class StoreAccount {

    getMainTitle() {
        return cy.get("h1");
    }
    
}

module.exports = new StoreAccount();