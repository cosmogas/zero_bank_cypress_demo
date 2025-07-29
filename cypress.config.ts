import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://zero.webappsecurity.com',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    supportFile: 'cypress/support/e2e.ts',
  },
});
