context("Header", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Has a Title and it is center", () => {
    cy.get("[data-cy=title]")
      .contains("Who's Next")
      .should("have.css", "text-align")
      .and("match", /center/);
  });
});
