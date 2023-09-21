import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then(`leo la siguiente tabla aplicando Hashes`, (table) => {
  table = table.hashes();

  cy.log(table);
  cy.log(table[1]);
  cy.log(table[1].num);
  cy.log(table[1].mes);
  cy.log(JSON.stringify(table));
});
//Row: Ignora la primera fila suponiendo que es la cabecera de la tabla.
Then(`leo la siguiente tabla aplicando rows`, (table) => {
  table = table.rows();
  cy.log(table);
  cy.log(table[0]);
  cy.log(table[0][0]);
  cy.log(table[0][1]);
});

Then(`leo la siguiente tabla aplicando raw`, (table) => {
  table = table.raw();
  cy.log(table);
  cy.log(table[0]);
  cy.log(table[0][0]);
  cy.log(table[0][1]);
});

Then(`leo la siguiente tabla aplicando rawTable`, (table) => {
  table = table.rawTable;
  cy.log(table);
  cy.log(table[0]);
  cy.log(table[0][0]);
  cy.log(table[0][1]);
});

Then(`leo la siguiente tabla aplicando RowsHashes`, (table) => {
  table = table.rowsHash();

  cy.log(table);
  cy.log(table["2"]);
  cy.log(JSON.stringify(table));
  cy.log(JSON.stringify(table["8"]));
});

Then(`leo la siguiente tabla con raw y aplico flat`, (table) => {
  table = table.raw();
  table = table.flat();

  cy.log(JSON.stringify(table));
});

Then(`leo la siguiente tabla con raw en 1 y aplico flat`, (table) => {
  table = table.rawTable[1];
  table = table.flat();

  cy.log(JSON.stringify(table));
});
