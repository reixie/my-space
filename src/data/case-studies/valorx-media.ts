import gridWizard from '../../assets/case-studies/valorx/grid-wizard.png';
import personalViews from '../../assets/case-studies/valorx/personal-views.png';
import columnGroups from '../../assets/case-studies/valorx/column-groups.png';
import formulaBuilder from '../../assets/case-studies/valorx/formula-builder.png';
import restoreConflicts from '../../assets/case-studies/valorx/restore-conflicts.png';
import restoreSummary from '../../assets/case-studies/valorx/restore-summary.png';
import matrixAxes from '../../assets/case-studies/valorx/matrix-axes.png';
import matrixTimeline from '../../assets/case-studies/valorx/matrix-timeline.png';
import fusionRules from '../../assets/case-studies/valorx/fusion-rules.png';
import type { CaseScreenshot } from './types';

const waveDocs = 'https://docs.valorx.com/valorx-wave';

export const valorxMedia = {
  gridWizard: {
    image: gridWizard,
    alt: 'Wave Grid Wizard with setup steps, related-list configuration, and a data preview below the controls.',
    caption: 'Grid Wizard and related lists',
    sourceUrl: `${waveDocs}/wave-experience/create-a-new-grid/grid-wizard-in-salesforce`,
  },
  personalViews: {
    image: personalViews,
    alt: 'Wave Embedded inside Salesforce, with a selected personal account view, grid actions, and editing controls.',
    caption: 'Working with a grid in Salesforce',
    sourceUrl: `${waveDocs}/surf-the-wave/surf-the-wave-in-salesforce`,
  },
  columnGroups: {
    image: columnGroups,
    alt: 'Column Group configuration with two named groups, their assigned fields, and appearance controls above the account grid.',
    caption: 'Column grouping',
    sourceUrl: `${waveDocs}/wave-data-management/managing-grid-data/column-group`,
  },
  formulaBuilder: {
    image: formulaBuilder,
    alt: 'Formula Field editor with a formula name, return type, field and function selectors, and a syntax validation result.',
    caption: 'Formula fields',
    sourceUrl: `${waveDocs}/wave-data-management/data-control-and-customization`,
  },
  restoreConflicts: {
    image: restoreConflicts,
    alt: 'Handle Duplicates dialog with Create new copy, Overwrite, and Skip choices for an existing grid.',
    caption: 'Resolving restore conflicts',
    sourceUrl: `${waveDocs}/wave-admin-and-control/backup-and-restore`,
  },
  restoreSummary: {
    image: restoreSummary,
    alt: 'Restore Summary listing a processed grid, the action performed, and its successful result.',
    caption: 'Restore summary',
    sourceUrl: `${waveDocs}/wave-admin-and-control/backup-and-restore`,
  },
  matrixAxes: {
    image: matrixAxes,
    alt: 'Matrix Wizard showing row, column, and data configuration, with two fields selected for a two-level column axis.',
    caption: 'Two-level Matrix configuration',
    sourceUrl: `${waveDocs}/matrix/matrix-configuration`,
  },
  matrixTimeline: {
    image: matrixTimeline,
    alt: 'Matrix Timeline settings with calendar and fiscal years, date formats, time horizon, and historical-view options.',
    caption: 'Timeline and historical data',
    sourceUrl: `${waveDocs}/matrix/matrix-configuration`,
  },
  fusionRules: {
    image: fusionRules,
    alt: 'Fusion State Management map rule with an optional condition and separate actions to lock a cell, row, and column.',
    caption: 'Fusion State Management',
    sourceUrl: 'https://docs.valorx.com/valorx-fusion/design-studio/tasks/state-management',
  },
} satisfies Record<string, CaseScreenshot>;
