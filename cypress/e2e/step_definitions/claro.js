import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
const claroHome = require("../../pages/clarohome");

When(`posiciona el mouse sobre {string}`, (option) => {
  claroHome.getHeaderOptionMenu().contains(option).realHover();
});

Then (`se visualizan las opciones {string}`,(lista) => {
  lista = lista.split(", ");
  claroHome.getHeaderSuboptionMenu().should("be.visible");
  lista.forEach((subOption) => {
    claroHome.getHeaderSuboptionMenu().find("a").should("contain.text", subOption);
    
  });

});
