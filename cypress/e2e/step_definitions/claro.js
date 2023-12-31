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

When (`se selecciona la opción {string}`, (txtBtn) => {
cy.contains(txtBtn).first().click();
});

When (`se cambia filtro a {string}`, (filterText) => {
claroHome.getCatalogFilter().click();
claroHome.getCatalogFilterSubOption().contains(filterText).click();
});

Then (`los precios están ordenados de menor a mayor`, () => {
claroHome.getLoadingIcon().should("be.visible");
claroHome.getLoadingIcon().should("not.exist");
let arrayPrice = [];

//Se obtienen todos los precios y se recorre al arrayPrice

claroHome.getOfferPrices().each((prices) => {
  cy.wrap(prices).find("p").first().invoke("text").then((precioEl)=> {
    precioEl = precioEl.replace("$", "");
    precioEl = Number(precioEl);
    arrayPrice.push(precioEl);
  
    
  });
})
.then(() => {
  cy.log(JSON.stringify(arrayPrice));

  // Recorre el Array verificando que los precios están en orden correcto en este caso de menos a mayor.

  for (let i = 0; i < arrayPrice.length - 1; i++) {
    const price1 = arrayPrice[i];
    const price2 = arrayPrice[i + 1];
    if (price1 <= price2) {
      cy.log(`El precio ${price1} es menor-igual que el ${price2}`);
    } else {
      throw new Error(
        `El precio ${price1} NO es menor-igual que el ${price2}`
      );
    }
  }
});
});