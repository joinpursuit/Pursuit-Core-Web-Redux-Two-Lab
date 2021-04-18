const createTodo = (todo) => {
  cy.get("input").clear().type(todo);
  cy.get("form").submit();
  cy.get("ul button").last().contains(todo);
  return todo;
};

describe("Bonus", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("creates todos", () => {
    createTodo("Say hello to the world!~");
    createTodo("Create a seven step plan for world domination");
    createTodo("...");
    createTodo("profit!");
  });

  it("toggles todo completion on click", () => {
    const todo = createTodo("Frog blast the vent core!");

    cy.get("ul button")
      .contains(todo)
      .click()
      .should("have.css", "text-decoration", "line-through solid rgb(0, 0, 0)")
      .click()
      .should("have.css", "text-decoration", "none solid rgb(0, 0, 0)");
  });

  it("filters to active todos", () => {
    const active = createTodo("Active!");
    const completed = createTodo("I am complete...");

    cy.get("ul button").contains(completed).click();
    cy.get("button").contains("completed").click();

    cy.get("button").contains(active).should("not.exist");
    cy.get("button").contains(completed).should("exist");
  });

  it("filters to completed todos", () => {
    const active = createTodo("Active!");
    const completed = createTodo("I am complete...");

    cy.get("ul button").contains(completed).click();
    cy.get("button").contains("active").click();

    cy.get("button").contains(active).should("exist");
    cy.get("button").contains(completed).should("not.exist");
  });
});
