describe('UI: Basic checks for Zero Bank main page', () => {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/index.html');
        cy.url().should('include', 'index.html');
    });




    it('Signin button opens login form', () => {
        cy.contains('Signin').click();
        cy.get('#login_form').should('be.visible');
        cy.get('input[name="user_login"]').should('exist');
    });

    it('Feedback link navigates correctly', () => {
        cy.contains('Feedback').click();
        cy.url().should('include', 'feedback.html');
        cy.get('h3').should('contain.text', 'Feedback');
    });
    
});

