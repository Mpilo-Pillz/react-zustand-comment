import { Given, When } from "cypress-cucumber-preprocessor/steps";

Given("I visit dashboard on {string}", (url) => {
  cy.visit(url);
});

When(
  "I click {string} to intercept the request on {string} with mock object {string} with status code {string}",
  (element, endPoint, jsonFile, statusCode) => {
    cy.intercept(
      "POST",
      `${apiUrl}${endPoint}`,

      {
        statusCode: parseInt(statusCode),
        fixture: `${jsonFile}.json`,
      }
    ).as("requestSuccess");
    cy.getElementByDataTestId(element).click({ force: true });
    cy.wait("@requestSuccess", { timeout: 20000 });
  }
);
