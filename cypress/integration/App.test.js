describe("App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("creates todos", () => {
    const todos = [
      "Say hello to the world!~",
      "Create a seven step plan for world domination",
      "...",
      "profit!",
    ];

    for (const todo of todos) {
      cy.get("input").type(todo);
      cy.get("form").submit();
      cy.get("ul button").last().contains(todo);
    }
  });

  it("toggles todo completion on click", () => {
    const todo = "Frog blast the vent core!";

    cy.get("input").type(todo);
    cy.get("form").submit();

    cy.get("ul button")
      .contains(todo)
      .click()
      .should("have.css", "text-decoration", "line-through solid rgb(0, 0, 0)")
      .click()
      .should("have.css", "text-decoration", "none solid rgb(0, 0, 0)");
  });
});
