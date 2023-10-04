class Eden {
  getSearchImput() {
    return cy.get("#espectaculoList");
  }

  getSearchSuggestions() {
    return cy.get('ul.ui-autocomplete [id^="ui-id-"]');
  }
  getNavBarBtn() {
    return cy.get(".navbar-menu");
  }
  getEventBlock() {
    return cy.get(".fechas-funciones");
  }

  getVerBtn() {
    return cy.get(".contenido-todos-ver-funcion");
  }
  getEventprice() {
    return cy.get('[class="col-12 mb-1"]');
  }

  getEventLocation() {
    return cy.get(".col-12 tbody");
  }
}

module.exports = new Eden();
