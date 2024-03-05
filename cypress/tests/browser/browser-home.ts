import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../pages/homePage";

When("I visit the home page", () => {
  homePage.visit();
});

When("I accept all cookies", () => {
  cy.get("button[id='onetrust-accept-btn-handler']").should('have.text','Accept All Cookies').click();
});

Then("I should see the health plan link", () => {
  cy.get("a").contains("Get a health plan")
});