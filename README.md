# poc-cypress-cucumber
A POC for using Cypress in Cucumber.js.

Tests are written with [Cypress](https://docs.cypress.io/guides/overview/why-cypress), structured in a similar way to [Cucumber.js](https://cucumber.io/docs/guides/overview/).

- Uses the [Cucumber Preprocessor Plugin](https://github.com/badeball/cypress-cucumber-preprocessor)
- Based on its [quick-start guide](https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/quick-start.md)

## Installation
Requires [Node.js](https://nodejs.org/).

Dependencies can then be installed via the following command:

`npm i`

### VSCode & Cucumber
VSCode has a useful cucumber extension providing useful functionality such as navigation between feature files and step definitions.

Install:

`CucumberOpen.cucumber-official`

Add the following file to the root of the project:

`.vscode/settings.json` 
```
{
    "cucumber.glue": [
        "cypress/tests/**/*.ts"
    ]
}
```

### Environments
This project makes use of [dotenv](https://github.com/motdotla/dotenv) to read environment variables from a file, containing details for logging into the application.

Add and ammend the following file to the root of the project:

`.env`
```
{
  "username": "xxxxxxxxx",
  "password": "xxxxxxxxx"
}
```

## Run Example Tests
Open launchpad - opens the Cypress app where you can select and watch tests run:

`npx cypress open`

Run all - runs all of the tests in the command line:

`npx cypress run`

Run a tag - runs a subset of tests tagged in Feature files:

`npx cypress run --env tags=@api`

`npx cypress run --env tags=@browser`