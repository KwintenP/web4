Cypress.Commands.add('login', () => {
   cy.request({
       method: "POST",
       url: 'http://localhost:4200/API/users/login',
       body: {username: 'Kwinten', password: 'testtesttest'},
   }).then(res => localStorage.setItem('currentUser', res.body.token));
});

Cypress.Commands.add('addRecipe', (recipe) => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:4200/API/recipes',
        body: recipe,
        headers: {'Authorization': `Bearer ${localStorage.getItem('currentUser')}`}
    })
});
