// cypress/support/e2e.ts
import './commands';
import 'cypress-axe';
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

addMatchImageSnapshotCommand({
    failureThreshold: 0.01,
    failureThresholdType: 'percent',
    customDiffConfig: { threshold: 0.1 },
});

