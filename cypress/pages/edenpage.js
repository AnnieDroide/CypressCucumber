class Eden {
  getSearchImput() {
    return cy.get("#espectaculoList");
  }

  getSearchSuggestions() {
    return cy.get('ul.ui-autocomplete [id^="ui-id-"]');
  }
}

module.exports = new Eden();
