import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

async function setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions): Promise<Cypress.PluginConfigOptions> {
  // Required for the preprocessor, e.g. to generate JSON reports after each run
  await addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    }),
  );
  return config;
}

export default defineConfig({
  e2e: {
    supportFile: false,
    specPattern: "cypress/tests/**/*.feature",
    baseUrl: "https://www.simplyhealth.co.uk",
    setupNodeEvents,
  },
});
