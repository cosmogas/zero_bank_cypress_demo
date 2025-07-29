describe('CRITICAL: Negative and edge scenarios', () => {
    const base = 'http://zero.webappsecurity.com';

    it('Shows error with empty login', () => {
        cy.visit(base);
        cy.get('#signin_button').click();
        cy.get('input[name="submit"]').click();
        cy.get('.alert-error')
            .should('contain', 'Login and/or password are wrong.');
    });

});
