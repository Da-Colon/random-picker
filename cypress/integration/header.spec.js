context("Header", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it('should load logo', () => {
    cy.get('[data-cy=logo]').should('be.visible')
  });

  it('should go home when logo is clicked', () => {
    cy.get('[data-cy=logo]').click()
    cy.url().should('include', '/')
  })

  it('should show login if not logged in', () => {
    cy.get('[data-cy=login]').contains("Login").and('be.visible')
  })

  it('should change to username when logged in', () => {
    cy.get('[data-cy=login]').click()
    cy.get('[data-cy=username-input]').focus().type('admin@whosnext.com')
    cy.get('[data-cy=password-input]').focus().type('test')
    cy.get('[data-cy=login-button]').click()
    cy.get('[data-cy=account-menu-click]').contains("D. Colon")
  })

  it('should navigate to /register when register is clicked', () =>{
    cy.get('[data-cy=register]').click();
    cy.url().should('include', '/register')
  })

});
