context("Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  
  it('should require username', () => {
    cy.get('[data-cy=login]').click()
    cy.get('[data-cy=password-input]').focus().type('test')
    cy.get('[data-cy=login-button]').click()
    cy.get('[data-cy=error-username').contains('Username is required')
  })

  it('should require password', () => {
    cy.get('[data-cy=login]').click()
    cy.get('[data-cy=username-input]').focus().type('admin@whosnext.com')
    cy.get('[data-cy=login-button]').click()
    cy.get('[data-cy=error-password').contains('Password is required')
  })

  it('should login user when Login is clicked', () => {
    cy.get('[data-cy=login]').click()
    cy.get('[data-cy=username-input]').focus().type('admin@whosnext.com')
    cy.get('[data-cy=password-input]').focus().type('test')
    cy.get('[data-cy=login-button]').click()
    cy.get('[data-cy=account-menu-click]').contains("D. Colon")
  })

  it('should close login menu when cancel is clicked', () => {
    cy.get('[data-cy=login]').click()
    cy.get('[data-cy=cancel-button]').click()
    cy.get('[data-cy=login-form]').should('not.be.visible')
  })

})