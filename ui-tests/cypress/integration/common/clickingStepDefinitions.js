import { When } from "cypress-cucumber-preprocessor/steps";

When("I click the element with testid {string}", (element) => {
  cy.getElementByDataTestId(element, { timeout: 20000 }).click();
});
