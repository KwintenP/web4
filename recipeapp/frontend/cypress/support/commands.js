Cypress.Commands.add('login', () => {
   cy.request({
       method: "POST",
       url: 'http://localhost:4200/API/users/login',
       body: {username: 'Kwinten', password: 'testtesttest'}
   }).then(res => localStorage.setItem('currentUser', res.body.token));
});