context("Header", () => {
  beforeEach(() => {
    cy.visit("/");

    // FIXTURES
    cy.fixture('user').as('getUser')
    cy.fixture('user-classList').as('getUser-W-CL')
    cy.fixture('class-list').as('classList')
    cy.fixture('className').as('className')
    cy.fixture('classListAll').as('classListAll')
    // START SERVER
    cy.server()
    // STUB ROUTES
    cy.route('POST', 'http://localhost:8080/users/login', '@getUser')
    cy.route('POST', 'http://localhost:8080/upload-csv', '@className')
    cy.route('POST', 'http://localhost:8080/class/new', '@classList')
    cy.route('PUT', 'http://localhost:8080/users/default/1', '@getUser-W-CL').as('getUser-W-ClRoute')
    cy.route('POST', 'http://localhost:8080/class/list/all', [])
    // LOGIN BEFORE TESTS
    cy.get('[data-cy=login]').click()
    cy.get('[data-cy=username-input]').focus().type('admin')
    cy.get('[data-cy=password-input]').focus().type('test')
    cy.get('[data-cy=login-button]').click()
  });

  it('should display account menu', () => {
    cy.get('[data-cy=account-menu-click]').click()
    cy.get('[data-cy=upload-link-button]').contains('Upload New ClassList')
  })

  it('should redirect to upload new class', () => {
    cy.get('[data-cy=account-menu-click]').click()
    cy.get('[data-cy=upload-link-button]').click()
    cy.url().should('include', '/upload')
  })

  it('should choose new class', () => {
    cy.get('[data-cy=account-menu-click]').click()
    cy.get('[data-cy=upload-link-button]').click()
    cy.fixture('gradebook-text.csv').then(csv => {
      cy.get('[data-cy=upload-file-input]').attachFile({
        fileContent: csv,
        fileName: '@gradebookCSV',
      })
    })
    cy.get('[data-cy=upload-file-button]').click()
    cy.get('[data-cy=class-name]').focus().type('August2020')
    cy.get('[data-cy=save-button]').click()
    cy.wait('@getUser-W-ClRoute')
    cy.wait(2000)
    cy.route('POST', 'http://localhost:8080/class/list/all', '@classListAll')
    cy.get('[data-cy=account-menu-click]').click()
    cy.get('[data-cy=choose-class-button]').click()
    cy.get('[data-cy=class-list-select]').children().should(($children) => {
      expect($children).to.have.length(3)
    })
  })

  it('should redirect to edit class when class is availble', () => {
    cy.get('[data-cy=account-menu-click]').click()
    cy.get('[data-cy=upload-link-button]').click()
    cy.fixture('gradebook-text.csv').then(csv => {
      cy.get('[data-cy=upload-file-input]').attachFile({
        fileContent: csv,
        fileName: '@gradebookCSV',
      })
    })
    cy.get('[data-cy=upload-file-button]').click()
    cy.get('[data-cy=class-name]').focus().type('August2020')
    cy.get('[data-cy=save-button]').click()
    cy.wait('@getUser-W-ClRoute')
    cy.wait(2000)
    cy.route('POST', 'http://localhost:8080/class/list/all', '@classListAll')
    cy.get('[data-cy=account-menu-click]').click()
    cy.get('[data-cy=edit-link-button]').click()
    cy.url().should('include', '/edit')
  })

  it('should be disabled when no class lists are availble', () => {
    cy.get('[data-cy=account-menu-click]').click()
    cy.get('[data-cy=edit-link-button]').should('have.attr', 'disabled')
  })

  it('should redirect to spinner', () => {
    cy.get('[data-cy=account-menu-click]').click()
    cy.get('[data-cy=spinner-link-button]').click()
    cy.url().should('include', '/spinner')
  })

  it('should log out user', () => {
    cy.get('[data-cy=account-menu-click]').click()
    cy.get('[data-cy=logout-button]').click()
    cy.get('[data-cy=login]').contains("Login").and('be.visible')
  })

  it('should close account menu', () => {
    cy.get('[data-cy=account-menu-click]').click()
    cy.get('[data-cy=cancel-menu-button]').click()
    cy.get('[data-cy=upload-link-button]').should('not.be.visible')
  })
})