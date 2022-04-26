import { When } from "cypress-cucumber-preprocessor/steps";

When("I enter {string} inside {string}", (textValue, element) => {
  cy.getElementByDataTestId(element).clear().type(textValue, { force: true });
});
