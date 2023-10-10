import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
const dexterhome = require("../../pages/dexterhome");

When (`clickea la opción {string}`, (txt) => {
cy.contains(txt).click();
});

When (`realiza scroll hasta {string}`, (text) => {
    cy.contains(text).scrollIntoView();

});

When (`selecciona la opción de {string}`, (opcion) => {
    dexterhome.getBrandLink().each((brand) => {
        cy.wrap(brand).should("have.attr", "href").then((textoHref) => {
            cy.log(`**${textoHref}**`);
            
            if(textoHref.includes(opcion)) {
                cy.wrap(brand).click({ force: true });
            } else {
                dexterhome.getRightArrow().first().click({ force: true });

            }

        });
    });

});

Then (`se verifica que la url contiene {string}`, (url) => {
cy.url().should("include", url)
});