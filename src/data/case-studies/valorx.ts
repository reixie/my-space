import videoSrc from '../../assets/case-studies/valorx/grid-view.mp4?url';
import videoPoster from '../../assets/case-studies/valorx/grid-view-poster.webp';
import thumbnail from '../../assets/case-studies/valorx/wave-hero-poster.webp';
import animatedThumbnail from '../../assets/case-studies/valorx/wave-hero-animation.webp?url';
import markLight from '../../assets/projects/valorx-mark-light.png';
import markDark from '../../assets/projects/valorx-mark-dark.png';
import type { CaseChallenge, CaseIconName, CaseOutcome, CaseStudy } from './types';
import { valorxMedia } from './valorx-media';
import { archiveScreenshots } from './archive-media';

export const valorxCase = {
  slug: 'valorx',
  name: 'Valorx',
  website: 'https://valorx.com/',
  title: 'Valorx — Product design across Wave and Fusion',
  summary: 'Salesforce workflows across Wave and Fusion',
  metaDescription:
    'Product design by Alex Lohinov for Valorx Wave and Fusion: grid setup, personal views, formulas, Matrix configuration, recovery, and rule-based controls.',
  introduction:
    'Valorx brings spreadsheet-style workflows to Salesforce and connects CRM data with Excel and Google Sheets. At Konexta, I worked across Wave and Fusion—from grid setup and personal views to formulas, Matrix configuration, recovery, and rule-based controls.',
  thumbnail,
  animatedThumbnail,
  hero: {
    kind: 'video',
    src: videoSrc,
    poster: videoPoster,
    width: 1280,
    height: 618,
    label: 'Valorx Wave grid view walkthrough',
  },
  markLight,
  markDark,
  outcomes: [
    {
      icon: 'grid',
      title: 'Configuration workflows',
      description:
        'Grid setup, personal views, formulas, and Matrix settings designed around real data and access rules.',
    },
    {
      icon: 'refresh',
      title: 'Clear decisions and feedback',
      description:
        'Explicit choices for copy limits, deletion, and restore conflicts, with progress and result states.',
    },
    {
      icon: 'layers',
      title: 'Reusable product patterns',
      description:
        'Shared controls, consistent interaction states, and engineering handoff within the existing product system.',
    },
  ] satisfies CaseOutcome[],
  overview: [
    'Wave lets teams work with Salesforce records in configurable grids, through a browser extension or directly inside Salesforce. Fusion connects CRM data with Excel and Google Sheets, with Design Studio for building spreadsheet-based apps.',
    'These products serve both the people configuring a workspace and those using it every day. My work connected the two: making setup choices understandable, showing their effect on the data, and carrying permissions and feedback into everyday use.',
  ],
  facts: [
    { label: 'Client', value: 'Valorx' },
    { label: 'Role', value: 'Product Designer' },
    { label: 'Products', value: 'Wave, Matrix & Fusion' },
    { label: 'Period', value: 'Oct 2025 — Mar 2026' },
  ],
  brief:
    'Extend a mature product family without making complex data work harder to understand. Starting from existing interfaces, requirements, and the design system, I developed flows and alternatives, then refined them with the agency and Valorx’s product and engineering teams.',
  goals: [
    { icon: 'grid', text: 'Make complex configuration easier to follow and preview.' },
    { icon: 'shield-check', text: 'Make access, ownership, and action consequences clear.' },
    { icon: 'layers', text: 'Carry familiar controls and states across the product family.' },
  ] satisfies { icon: CaseIconName; text: string }[],
  role:
    'I worked as a Product Designer within Konexta Agency, alongside the agency lead, another designer, and Valorx’s product and engineering teams. My scope covered interaction flows, interface states, reusable components, and design handoff across Wave, Embedded, Matrix, Fusion, and Build Studio.',
  contributions: [
    'Mapped setup, editing, access, publishing, and recovery flows, including empty, loading, error, and partial-success states.',
    'Explored alternatives for formula guidance, Matrix settings, Fusion dashboards, and conditional rules; refined them as requirements evolved.',
    'Extended the existing library, updated Build Studio panels, and prepared selected designs and interaction details for engineering.',
  ],
  challenges: [
    {
      icon: 'grid',
      title: 'A grid setup users can follow',
      problem:
        'Creating a grid involves fields, filters, related lists, layout, and access. Users need to understand both where they are in the setup and how each choice changes the result.',
      responseTitle: 'Keep configuration connected to its preview',
      response:
        'I developed Grid Wizard flows with step navigation and a preview beneath the setup controls. Related-list selection, object choices, tooltips, and ordering were worked through as part of the same configuration journey.',
      details: [
        'Refined the preview’s placement and height to keep the resulting grid visible while configuring it.',
        'Designed related-list ordering and Manage Access states, including a filter for active users.',
      ],
      screenshots: [valorxMedia.gridWizard],
    },
    {
      icon: 'shield-check',
      title: 'Personal views within shared rules',
      problem:
        'A shared Global Grid gives a team a common starting point, but people need their own fields, filters, and layouts. Creating, editing, sharing, and deleting a personal copy each has different permissions and consequences.',
      responseTitle: 'Separate the original from the personal layer',
      response:
        'I designed Custom Grid flows for creating, renaming, duplicating, sharing, and deleting personal views. Available actions reflected the user’s permissions, with separate view-only and editing paths through the configurator.',
      details: [
        'Distinguished deleting one personal copy from deleting a Global Grid and its dependent copies.',
        'At the ten-copy limit, a selection table let users remove existing copies and save the new one in the same flow. Deleting Copy 2 could make room for Copy 11.',
      ],
      flow: ['Copy limit reached', 'Choose copies to remove', 'Delete & save copy'],
      screenshots: [valorxMedia.personalViews],
    },
    {
      icon: 'layers',
      title: 'Working across wide, dense grids',
      problem:
        'As fields and related records accumulate, the grid becomes harder to scan. Grouping, display options, and pagination need to work together without taking over the data workspace.',
      responseTitle: 'Give structure to columns and navigation',
      response:
        'I designed Column Grouping controls and refined Related List and Display Options layouts. The work also covered pagination states for the main grid, row groups, and related lists.',
      details: [
        'Worked through grouped-column selection, appearance, and default-open behavior.',
        'Adjusted panel height, placement, spacing, and tooltips to fit the existing runtime constraints.',
      ],
      mediaLayout: 'stack',
      screenshots: [valorxMedia.columnGroups, archiveScreenshots.valorxPagination],
    },
    {
      icon: 'grid',
      title: 'Guidance without crowding the formula editor',
      problem:
        'Nested functions and field references are difficult to construct from scratch. Additional guidance needed to help people start a formula while preserving room to read and edit the expression.',
      responseTitle: 'Make helpers part of the editing flow',
      response:
        'I developed Insert Function and Nested Functions flows, then iterated on compact, expandable helpers and the related dropdown states. Formula Template exploration addressed what happens after choosing a starting formula, including selecting the fields it should use.',
      details: [
        'Kept fields, functions, and the existing editor behavior connected throughout the flow.',
        'Prepared step-by-step alternatives for inserting templates and replacing their field references.',
      ],
      screenshots: [valorxMedia.formulaBuilder],
    },
    {
      icon: 'refresh',
      title: 'Recovery with a clear next step',
      problem:
        'A restore can finish for some items while others fail, are skipped, or still need a conflict decision. A single undifferentiated result would leave users working out what succeeded and what they could act on next.',
      responseTitle: 'Separate results from remaining decisions',
      response:
        'I refined Backup & Restore across progress, success, failure, and partial recovery. Already restored items were separated into a summary, while unresolved items retained the actions that applied to them.',
      details: [
        'Distinguished In Progress, Completed, Failed, and Skipped states.',
        'Kept Copy, Overwrite, and Skip decisions attached to the relevant existing items.',
      ],
      screenshots: [valorxMedia.restoreConflicts, valorxMedia.restoreSummary],
    },
    {
      icon: 'grid',
      title: 'Making Matrix configuration readable',
      problem:
        'A Matrix combines row and column axes, values, and time-based settings. Two-level column headers and historical data add choices that need to remain understandable together.',
      responseTitle: 'Work through the axes, then the time context',
      response:
        'I explored Matrix Setup within the wizard and developed flows for date formats, X-axis display styles, and two-level X-axis configuration. Historical-date formatting was refined as the product requirements changed.',
      details: [
        'Prepared alternatives for configuring and displaying two levels of column data.',
        'Connected date-format and historical-data decisions to the relevant setup states.',
      ],
      screenshots: [valorxMedia.matrixAxes, valorxMedia.matrixTimeline],
    },
    {
      icon: 'shield-check',
      title: 'Control across Fusion apps',
      problem:
        'Fusion brings CRM workflows into spreadsheets. Users need clear entry points to their apps, while app designers need to control what is visible and what can be edited at runtime.',
      responseTitle: 'Design the entry points and the rules behind them',
      response:
        'I researched Managed Package requirements and explored dashboard cards, lists, and launch options for Excel, Mac, and Google Sheets. For State Management, I designed flows and alternatives for Ribbon, Sheet, and Map rules.',
      details: [
        'Worked through conditional show/hide behavior and cell, row, and column locking.',
        'Added dashboard empty states, deletion confirmations, and an empty Manage Access state.',
      ],
      screenshots: [valorxMedia.fusionRules],
    },
    {
      icon: 'layers',
      title: 'Consistency across a product family',
      problem:
        'Valorx already had a design system and linked product files. New flows, dropdowns, filters, and panel controls needed to fit that foundation while supporting different content lengths and configurations.',
      responseTitle: 'Extend the library, then reuse the pattern',
      response:
        'I created Dropdown and Filter components and refined their states against the existing library. In Build Studio, I updated right-hand panels, controls, icons, and spacing, using flow comparisons to work through the changes.',
      details: [
        'Handled search, scrolling, variable content height, and default, hover, selected, and disabled states within shared patterns.',
        'Organised selected designs, alternatives, and implementation feedback for review and engineering handoff.',
      ],
    },
  ] satisfies CaseChallenge[],
} satisfies CaseStudy;
