# poc-cypress-cucumber

[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

A POC for using Cypress in Cucumber.js.

Tests are written with [Cypress](https://docs.cypress.io/guides/overview/why-cypress), structured in a similar way to [Cucumber.js](https://cucumber.io/docs/guides/overview/).

- Uses the [Cucumber Preprocessor Plugin](https://github.com/badeball/cypress-cucumber-preprocessor)
- Based on its [quick-start guide](https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/quick-start.md)

## Installation

Requires [Node.js](https://nodejs.org/).

Dependencies can then be installed via the following command:

`npm i`

## VSCode

VSCode has a Cucumber extension providing useful functionality such as navigation between feature files and step definitions.

### Extensions

- Cucumber - `CucumberOpen.cucumber-official`
- Prettier - `esbenp.prettier-vscode` - code formatting

### Settings

Add the following file to the root of the project:

`.vscode/settings.json`

```JSON
{
  "cucumber.features": ["cypress/tests/**/*.ts"],
  "cucumber.glue": ["cypress/tests/**/*.ts"],
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "[cucumber]": {
    "editor.defaultFormatter": "CucumberOpen.cucumber-official"
  }
}
```

## Run Example Tests

Run in an interactive UI mode:
`npx cypress open`

Run all - runs all of the tests in the command line:
`npx cypress run`

Run a tag - runs a subset of tests tagged in feature files:
`npx cypress run --env tags=@api`

Run headed - runs tests in the Cypress runner UI:
`npx cypress run --env tags=@ui --headed`
