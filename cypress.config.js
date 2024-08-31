const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    requestTimeout: 9000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
