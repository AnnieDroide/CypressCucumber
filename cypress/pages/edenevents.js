class EdenEvent {
  getEventTitle() {
    return cy.get(".fechas-funciones span").first();
  }
  //Fechas
  getEventMonth() {
    return cy.get(".fechas-funciones span").eq(1);
  }
  getEventDay() {
    return cy.get("#calendarDay").first();
  }

  getEventTime() {
    return cy.get("#calendarTime").first();
  }
}

module.exports = new EdenEvent();
