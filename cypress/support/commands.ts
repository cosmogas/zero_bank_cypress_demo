Cypress.Commands.add('login', (username = 'username', password = 'password') => {
    cy.visit('/login.html');
    cy.get('#user_login').type(username);
    cy.get('#user_password').type(password);
    cy.get('input[name="submit"]').click();
    cy.url().should('include', 'account-summary.html');
});
