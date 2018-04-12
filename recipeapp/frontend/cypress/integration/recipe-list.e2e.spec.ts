describe('Recipe list', () => {
   it('should show a list of recipes', () => {
       (cy as any).login();

        cy.visit('/');

        cy.get('[data-test=recipeList]');
   });
});
