export const login = (cy) => {
  cy.get('[data-cy=login]').click()
  cy.focus('[data-cy=username]').type('admin@whosnext.com')
  cy.focus('[data-cy=password]').type('test')
}