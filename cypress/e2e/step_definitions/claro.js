import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
const claroHome = require("../../pages/clarohome");

When(`posiciona el mouse sobre {string}`, (option) => {
  claroHome.getHeaderOptionMenu().contains(option).realHover();
});
