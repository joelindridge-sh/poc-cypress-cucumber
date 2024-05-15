import { When, Then, defineParameterType } from "@badeball/cypress-cucumber-preprocessor";

/**
 * Define custom parameter type: json.
 * Converts strings to a JSON object, returning valid JSON if null (empty curly braces).
 */
defineParameterType({
  name: "json",
  regexp: /(.*)/,
  transformer: (s) => JSON.parse(s ? s : "{}"),
});

/**
 * Makes a <method> HTTP request to <endpoint> with <parameters>.
 */
When('I make a "{}" request to the "{}" endpoint with parameters "{json}"', function (method: string, endpoint: string, parameters: JSON) {
  cy.request({
    method: method,
    url: endpoint,
    qs: parameters,
  }).then((response) => {
    this.response = response;
  });
});

/**
 * Asserts the numerical response status.
 */
Then('the response status is "{}"', function (status: string) {
  expect(this.response.status).to.eq(parseInt(status));
});
