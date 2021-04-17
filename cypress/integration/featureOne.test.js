describe("feature one", () => {
  it("passes this test", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("Hello, world!");
  });
});
