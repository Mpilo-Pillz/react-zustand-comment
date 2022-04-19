import { Given, When } from "cypress-cucumber-preprocessor/steps";

Given("I visit dashboard on {string}", (url) => {
  cy.visit(url);
});
