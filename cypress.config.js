const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  env: {
    TAGS: "not @ignore",
    YVYTU_URL: "https://vientosdelaselva.com.ar/",
    EDEN_URL: "https://www.edenentradas.com.ar/",
    CLARO_URL: "https://tienda.claro.com.ar/",
    DEXTER_URL: "https://www.dexter.com.ar/",
    STORE_URL: "https://automationteststore.com/",

    //Configuración de los usuarios y passwords

    users: [
      {
        user: "XXXXXXX",
        pass: "XXXXXXX"
        
      },
      {
        user: "ZZZZZZZ",
        pass: "ZZZZZZZ"
      }
    ]
  },

  

  e2e: {
    hideXHRInCommandLog: true,
    specPattern: "cypress/e2e/features/**/*.feature",
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      return config;
    },

    // implement node event listeners here.
  },
  viewportWidth: 1536,
  viewportHeight: 960,
  video: false,
  retries: {
    openMode: 0,
    runMode: 2,
  },
  //numTestsKeptInMemory: 0, sirve para test muy pesados, con esta config ejecuta solo 1
  //defaultCommandTimeout: 8000 sirve para agregar tiempo de ejecución a los test
});
