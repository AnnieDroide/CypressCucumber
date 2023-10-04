import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
const edenHome = require("../../pages/edenpage");
const edenEvent = require("../../pages/edenevents");

When(`escribe {string} en el campo del buscador`, (palabraAbuscar) => {
  edenHome.getSearchImput().type(palabraAbuscar);
});

When(`hace click en la sugerencia {string}`, (suggestionTxt) => {
  edenHome.getSearchSuggestions().contains(suggestionTxt).click();
});

When(`presiona el botón del header {string}`, (btnHeader) => {
  edenHome.getNavBarBtn().contains(btnHeader).click();
});

When(`presiona el botón Ver de {string}`, (showName) => {
  cy.intercept("GET", "FUNC022273").as("getShow");
  if (isNaN(showName)) {
    edenHome
      .getEventBlock()
      .contains(showName)
      .parent()
      .parent()
      .find("a")
      .last()
      .click();
  } else {
    edenHome
      .getEventBlock()
      .eq(showName - 1)
      .parent()
      .parent()
      .find("a")
      .last()
      .click();
  }
  cy.wait("@getShow").then((respuesta) => {
    cy.writeFile("cypress/fixtures/intercept/show.json", respuesta);
  });
});
Then(
  `el precio que se visualiza tiene el formato correcto validado con la respuesta del Intercept`,
  () => {
    cy.fixture("intercept/show.json").then((resp) => {
      const precios = resp.response.body.Precios;

      edenHome.getEventprice().each((precioShow, inx) => {
        const precioUb = precios[inx];
        const precioShows = `${precioUb.PrecioEntrada} + ${precioUb.ServiceCharge}`;

        cy.wrap(precioShow).should("contain.text", precioShows);
      });

      /*cy.log(`El body es: ${JSON.stringify(precios)}`);
      edenHome.getEventprice().each((precioShow, inx) => {
        cy.wrap(precioShow).should(
          "contain.text",
          `${precios[inx].PrecioEntrada} + ${precios[inx].ServiceCharge}`
        );
        //$ 1.500,00 + $ 180,00
      });*/
    });
  }
);

Then(`el precio que se visualiza tiene el formato correcto`, () => {
  const precio = new RegExp(
    "\\$ [0-9]{1,3}.[0-9]{3},[0-9]{2} \\+ \\$ [0-9]{1,3}.[0-9]{2}"
  );
  edenHome.getEventprice().contains(precio);
});

Then(`se verifica que el titulo es {string}`, (eventTitle) => {
  edenEvent.getEventTitle().should("have.text", eventTitle);
});

Then(
  `la fecha es {string} de {string} a las {string} Hs`,
  (day, month, time) => {
    edenEvent.getEventDay().should("contain.text", day);
    edenEvent.getEventMonth().should("contain.text", month);
    edenEvent.getEventTime().should("contain.text", time);
  }
);

Then(`se verifican los siguientes datos del evento`, (table) => {
  table = table.rowsHash();
  edenEvent.getEventTitle().should("contain.text", table["titulo"]);
  edenEvent.getEventDay().should("contain.text", table["dia"]);
  edenEvent.getEventMonth().should("contain.text", table["mes"]);
  edenEvent.getEventTime().should("contain.text", table["hora"]);
});
