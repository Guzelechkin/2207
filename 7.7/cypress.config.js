const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "h2iw9k",

    baseUrl: "https://petstore.swagger.io/v2/",

    retries: 2,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
