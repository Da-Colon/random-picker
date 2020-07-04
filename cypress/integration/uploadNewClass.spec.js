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

  it('should redirect to upload new class', () => {
    cy.get('[data-cy=account-menu-click]').click()
    cy.get('[data-cy=upload-link-button]').click()
    cy.url().should('include', '/upload')
  })

  it('should parse file and map class names', () => {
    cy.get('[data-cy=account-menu-click]').click()
    cy.get('[data-cy=upload-link-button]').click()
    cy.fixture('gradebook-text.csv').then(csv => {
      cy.get('[data-cy=upload-file-input]').attachFile({
        fileContent: csv,
        fileName: '@gradebookCSV',
      })
    })
    cy.get('[data-cy=upload-file-button]').click()
    cy.get('[data-cy=class-list-container]').children().should(($children) => {
      expect($children).to.have.length(13)
    })
  })

  it('should save class list and return home', () => {
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
    cy.url().should('include', '/')
  })

})