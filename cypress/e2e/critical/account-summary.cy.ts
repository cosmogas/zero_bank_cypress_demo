describe('CRITICAL: Account Summary balances', () => {
    const base = 'http://zero.webappsecurity.com';

    beforeEach(() => {
        // логин
        cy.visit(base);
        cy.get('#signin_button').click();
        cy.get('#user_login').type('username');
        cy.get('#user_password').type('password');
        cy.get('input[name="submit"]').click();
        cy.contains('Account Summary').click();
    });

    it('Displays account tables with valid balances', () => {
        cy.contains('h2', 'Cash Accounts').should('be.visible');


        cy.get('table.table').should('have.length.at.least', 1);


        cy.get('table.table').first()
            .find('tbody tr')
            .should('have.length.at.least', 1)
            .each($row => {
                const text = $row.find('td').eq(1).text().trim().replace('$', '').replace(/,/g, '');
                expect(parseFloat(text)).to.be.a('number').and.not.be.NaN;
            });
    });
});

