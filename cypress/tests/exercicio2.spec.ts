describe("Exercicio 2 - Enviar Dinheiro", () => {
    it("CT-005 - Enviar Dinheiro com saldo suficiente", () => {
      cy.task("db:seed")
      cy.visit("/");
        cy.get('[name="username"]').type('Heath93') 
        cy.get('[name="password"]').type('s3cret')
        cy.getBySel('signin-submit').click()
        cy.get('[data-test="nav-top-new-transaction"]').click()
        cy.get('[data-test="user-list-search-input"]').type('Arvilla', {force: true})
        cy.contains('Arvilla').click()
        cy.get('[name="amount"]').type('100')
        cy.get('.MuiInputBase-root > [name="description"]').type('Teste de transferência')
        cy.get('[data-test="transaction-create-submit-payment"]').click()
        cy.contains('Paid $100.00 for Teste de transferência').should('be.visible')
    
    });
    it("CT-006 - Enviar Dinheiro com saldo insuficiente", () => {
      cy.task("db:seed")
      cy.visit("/");
        cy.get('[name="username"]').type('Heath93')
        cy.get('[name="password"]').type('s3cret')
        cy.getBySel('signin-submit').click()
        cy.get('[data-test="nav-top-new-transaction"]').click()
        cy.get('[data-test="user-list-search-input"]').type('Arvilla', {force: true})
        cy.contains('Arvilla').click()
        cy.get('[name="amount"]').type('99999')
        cy.get('.MuiInputBase-root > [name="description"]').type('Teste de transferência')
        cy.get('[data-test="transaction-create-submit-payment"]').click()
        cy.contains('Paid $99,999.00 for Teste de transferência')
        
});
  });

      