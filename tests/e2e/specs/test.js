// https://docs.cypress.io/api/table-of-contents

describe("My First Test", () => {
  it("Enter an email address that doesn't exist in the login list and any valid Password", () => {
    cy.visit("/login");
    cy.get("#email").type("mahmoudelalfy13@gmail.com");
    cy.get("#password").type("12345678AA");
    cy.get("#submit").click();
    cy.get(".alert").should(
      "contain.text",
      "Your email and/or password are incorrect"
    );
  });

  it("Enter an email address that exists in the login list and any wrong password", () => {
    cy.visit("/login");
    cy.get("#email").type("mohamed@instabug.com");
    cy.get("#password").type("12345678AA");
    cy.get("#submit").click();
    cy.get(".alert").should(
      "contain.text",
      "Your email and/or password are incorrect"
    );
  });

  it("Enter an email address that exists in the login list and the right password", () => {
    cy.visit("/login");
    cy.get("#email").type("mohamed@instabug.com");
    cy.get("#password").type("A12345678");
    cy.get("#submit").click();
    cy.url().should("include", "/welcome");
  });

  it("Enter not a valid email address 'dddd' and unfocus the textbox", () => {
    cy.visit("/login");
    cy.get("#email").type("dddd");
    cy.get("#password").click();
    cy.get("#email-error").should(
      "contain.text",
      "Enter a valid email address."
    );
  });
});
