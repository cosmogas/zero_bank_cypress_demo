describe('Accessibility Tests', () => {
    const base = 'http://zero.webappsecurity.com';

    beforeEach(() => {
        cy.visit(base);
        cy.injectAxe();
    });

    it('Logs a11y violations on Home page', () => {
        // skip failures so test never fails
        cy.checkA11y(null, null, null, true);
    });

    it('Logs a11y violations on Login page', () => {
        cy.contains('Signin').click();
        cy.injectAxe();
        cy.checkA11y(null, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa'] } }, null, true);
    });

    it('Logs a11y violations on Feedback page', () => {
        cy.contains('Feedback').click();
        cy.injectAxe();
        cy.checkA11y(null, null, null, true);
    });
});


