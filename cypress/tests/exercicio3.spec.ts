describe("Exercicio 3 - Historico de Transacoes", () => {
  it("CT-007 - Historico de transacoes anteriores", () => {
    cy.task("db:seed")
    cy.visit("/")
      cy.get('[name="username"]').type('Heath93')
      cy.get('[name="password"]').type('s3cret')
      cy.getBySel('signin-submit').click()
      cy.contains('Ted Parisian paid Lia Rosenbaum').should('be.visible')
      
  })
  it("CT-008 - Historico sem transacoes anteriores", () => {
  cy.task("db:seed")
  cy.visit("/")

  cy.get('[name="username"]').type('Heath93')
  cy.get('[name="password"]').type('s3cret')
  cy.getBySel('signin-submit').click()
  cy.pickDateRange(new Date(2025, 7, 1), new Date(2025, 7, 2))
  cy.getBySelLike("transaction-item").should("have.length", 0)
  cy.getBySel("empty-list-header").should("contain", "No Transactions") 
})
})