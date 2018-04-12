/// <reference types="Cypress" />
describe('Login Page', () => {
   it('should go to the login page and try to login', () => {
       cy.visit('');

       cy.get('[data-test=username]').type('Kwinten');
       cy.get('[data-test=password]').type('testtesttest');
       cy.get('[data-test=loginBtn]').click();

       cy.url().should('include', 'recipe/list');
       cy.contains('Kwinten');
   });
});
