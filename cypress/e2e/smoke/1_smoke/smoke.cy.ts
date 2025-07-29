describe('SMOKE: Zero Bank basic availability', () => {
    const base = 'http://zero.webappsecurity.com';

    it('Home page loads', () => {
        cy.visit(base);
        cy.get('#signin_button').should('be.visible');
    });

    it('Login page loads', () => {
        cy.visit(`${base}/login.html`);
        cy.get('#user_login').should('exist');
        cy.get('#user_password').should('exist');
    });

    it('Account Summary page loads after login', () => {
        cy.visit(base);
        cy.get('#signin_button').click();
        cy.get('#user_login').type('username');
        cy.get('#user_password').type('password');
        cy.get('input[name="submit"]').click();
        cy.url().should('include', 'account-summary.html');
        cy.get('h2').should('contain', 'Cash Accounts');
    });

    it('Feedback page loads', () => {
        cy.visit(`${base}/feedback.html`);
        cy.get('#name').should('exist');
        cy.get('#email').should('exist');
    });
});
