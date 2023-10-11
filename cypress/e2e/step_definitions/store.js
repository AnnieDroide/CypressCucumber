import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
const store = require ("../../pages/store")
const storeLogin = require ("../../pages/storeLogin");
const storeAccount = require ("../../pages/storeAccount");


When (`el usuario presiona {string} en el menu principal`, (opcion) => {
    store.getHeaderLinks().contains(opcion).click();

});

When (`el usuario realiza hover {string}`,(opcion) => {
    store.getHeaderLinks().contains(opcion).trigger("mouseover");
});

When (`el usuario realiza logout`, ()=> {
    store.getHeaderLinks().contains("Welcome back").trigger("mouseover");
    cy.contains("Logoff", {matchCase: false}).click();
});

When (`completa usuario y password {string}`, (num) => {
    const userData = Cypress.env().users[num-1];
    cy.log(userData);

    //Login empleando función del mismo PageObject (se crea un PO específico de login)
    storeLogin.login(userData.user, userData.pass);

    
    //Login agregando un comando en el support/commands.js
    //cy.login(userData.user, userData.pass);

    //Login usando cada método del PageObject

   /* storeLogin.getLoginInput().type(userData.user);
    storeLogin.getPassInput().type(userData.pass);
    storeLogin.getLoginBtn().click();*/

});

Then (`se verifica que el titulo principal es {string}`, (title) => {
storeAccount.getMainTitle().should("contain.text", title);
});