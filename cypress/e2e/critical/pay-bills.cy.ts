describe('CRITICAL: Pay Bills flow', () => {
    const base = 'http://zero.webappsecurity.com';


    beforeEach(() => {
        cy.visit(base);
        cy.get('#signin_button').click();
        cy.get('#user_login').type('username');
        cy.get('#user_password').type('password');
        cy.get('input[name="submit"]').click();
    });

    it('Pays a bill successfully', () => {
        cy.contains('Pay Bills').click();
        cy.get('#sp_amount').type('300');
        cy.get('#sp_date').type('2025-08-20');
        cy.get('#pay_saved_payees').click();
        cy.get('#alert_content')
            .should('contain', 'The payment was successfully submitted.');
    });
});
