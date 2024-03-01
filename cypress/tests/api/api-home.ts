import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../../pages/homePage";

When('I make a GET request to the home page', function() {
  cy.request("GET", homePage.url).then((response) => {
    this.response = response;
  })
})

Then('the response status is {int}', function(int: number) {
  expect(this.response.status).to.eq(int);
})