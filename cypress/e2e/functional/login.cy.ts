describe('FUNCTIONAL: Login & Logout flows', () => {
    const base = 'http://zero.webappsecurity.com';

    it('Valid login redirects to Account Summary', () => {
        cy.visit(base);
        cy.get('#signin_button').click();
        cy.get('#user_login').type('username');
        cy.get('#user_password').type('password');
        cy.get('input[name="submit"]').click();
        cy.url().should('include', 'account-summary.html');
        cy.get('h2').should('contain', 'Cash Accounts');
    });

    it('Logout by navigating to logout URL', () => {
        cy.visit(`${base}/logout.html`);
        cy.url().should('eq', `${base}/index.html`);
    });
});