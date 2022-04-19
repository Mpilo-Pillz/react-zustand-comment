import { Then } from "cypress-cucumber-preprocessor/steps";

Then("I should see that {string} occurs at least once", (container) => {
  cy.getElementByDataTestId(container).its("length").should("be.gte", 1);
});

Then("I should see that {string} is not in dom", (container) => {
  cy.getElementByDataTestId(container).its("length").should("be.lte", 0);
});

Then("I should see the text {string}", (text) => {
  cy.get(".ant-empty-description").contains(text);
});
