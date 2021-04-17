describe("feature two", () => {
  it("has a heading", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h1").should("be.visible");
  });
});
