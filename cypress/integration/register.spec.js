context("register", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('[data-cy=register]').click();
    cy.fixture('user').as('newUser')

  })
  it('should submit data when register is clicked', () => {
    cy.server()
    cy.route('POST', 'http://localhost:8080/users/register', '@newUser')
    cy.get('[data-cy=username-input]').focus().type('admin')
    cy.get('[data-cy=password-input]').focus().type('test')
    cy.get('[data-cy=first-name-input]').focus().type('John')
    cy.get('[data-cy=last-name-input]').focus().type('Doe')
    cy.get('[data-cy=instructor-yes-radio]').focus().click()
    cy.get('[data-cy=register-button]').click()
  })

  
})