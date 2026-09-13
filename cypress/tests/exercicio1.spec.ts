describe("Exercicio 1 - Login e Cadastro", () => {
    it("CT-001 - Login com sucesso", () => {
        cy.visit("/");
        cy.get('[name="username"]').type('Heath93')
        cy.get('[name="password"]').type('s3cret')
        cy.getBySel('signin-submit').click()
        cy.getBySel('sidenav-user-full-name').should('be.visible')

    });
    it('CT-002 - Login com credenciais inválidas', () => {
      cy.visit('/');
      cy.get('[name="username"]').type('invalidUserName')
      cy.get('[name="password"]').type('invalidPa$$word')
      cy.getBySel('signin-submit').click()
      cy.getBySel('signin-error').should('be.visible').and('have.text', 'Username or password is invalid')
      
});
    it('CT-003 - Registro de novo usuário com sucesso', () => {
      cy.visit('/');
      cy.contains("Don't have an account? Sign Up").dblclick()
      cy.get('[name="firstName"]').type('Paul')
      cy.get('[name="lastName"]').type('Mark')
      cy.get('[name="username"]').type('paulM')
      cy.get('[name="password"]').type('MarkP')
      cy.get('[name="confirmPassword"]').type('MarkP')
      cy.get('[data-test="signup-submit"]').click()
      cy.get('[name="username"]').type('paulM')
      cy.get('[name="password"]').type('MarkP')
      cy.get('[data-test="signin-submit"]').click()
      cy.getBySel('sidenav-user-full-name').should('be.visible')

});
    it.only('CT-004 - Registro com dados incompletos', () => {
      cy.visit('/');
      cy.contains("Don't have an account? Sign Up").dblclick()
      cy.get('[name="firstName"]').type('Paul')
      cy.get('[name="lastName"]').type('Mark')
      cy.get('[name="password"]').type('MarkP')
      cy.get('[name="confirmPassword"]').type('MarkP')
      cy.get('[data-test="signup-submit"]').should('be.disabled')



})


});