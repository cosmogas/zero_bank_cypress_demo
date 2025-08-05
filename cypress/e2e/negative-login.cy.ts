describe('NEGATIVE: Login error handling', () => {
    const base = 'http://zero.webappsecurity.com';

    beforeEach(() => {
        cy.visit(base);
        cy.get('#signin_button').click();
    });

    it('Shows error for empty username and password', () => {
        cy.get('input[name="submit"]').click();
        cy.get('.alert-error')
            .should('be.visible')
            .and('contain.text', 'Login and/or password are wrong.');
    });

    it('Shows error for valid username and empty password', () => {
        cy.get('#user_login').type('username');
        cy.get('input[name="submit"]').click();
        cy.get('.alert-error')
            .should('be.visible')
            .and('contain.text', 'Login and/or password are wrong.');
    });

    it('Shows error for empty username and valid password', () => {
        cy.get('#user_password').type('password');
        cy.get('input[name="submit"]').click();
        cy.get('.alert-error')
            .should('be.visible')
            .and('contain.text', 'Login and/or password are wrong.');
    });

    it('Shows error for too long credentials', () => {
        const longString = 'x'.repeat(256);
        cy.get('#user_login').type(longString);
        cy.get('#user_password').type(longString);
        cy.get('input[name="submit"]').click();
        cy.get('.alert-error')
            .should('be.visible')
            .and('contain.text', 'Login and/or password are wrong.');
    });

    it('Prevents SQL injection attempt', () => {
        cy.get('#user_login').type(`' OR '1'='1`);
        cy.get('#user_password').type(`' OR '1'='1`);
        cy.get('input[name="submit"]').click();
        cy.get('.alert-error')
            .should('be.visible')
            .and('contain.text', 'Login and/or password are wrong.');
    });
});
