import type { CaseStudy } from './types';
import { projectMedia } from './media';
import { archiveScreenshots } from './archive-media';

const media = projectMedia.togaos;

export const togaosCase = {
  slug: 'togaos',
  name: 'TogaOS',
  website: 'https://www.togaos.com/',
  title: 'TogaOS — Connecting cargo, documents, and payments',
  summary: 'Freight operations from cargo receipt to payment and loading',
  metaDescription: 'Product design by Alex Lohinov for the TogaOS freight operations MVP: shipment creation, customer lookup, GRN, invoicing, payments, loading sheets, and handoff.',
  introduction: 'TogaOS brings cargo, shipments, documents, and payments into one operations system for freight businesses. I helped shape an Operations Agent MVP, connecting the steps from receiving goods to invoicing, collecting payment, and preparing a loading sheet.',
  thumbnail: media.cover,
  markLight: media.mark,
  monochromeMark: true,
  hero: {
    kind: 'image', image: media.overview,
    alt: 'TogaOS’s public product illustration showing an operations dashboard on a laptop.',
    source: { url: 'https://www.togaos.com/', label: 'Current product overview · TogaOS' },
  },
  outcomes: [
    { icon: 'truck', title: 'Connected operations flow', description: 'GRN, invoice, payment, and loading-sheet steps brought into a clickable prototype.' },
    { icon: 'users', title: 'Less repeated entry', description: 'Customer lookup, new-customer creation, and autofill worked into shipment setup.' },
    { icon: 'layers', title: 'Scoped delivery', description: 'Reusable components and selected final screens prepared for engineering and design handoff.' },
  ],
  overview: [
    'Small freight teams coordinate physical cargo and financial records at the same time. A shipment needs customer information, goods and destination details, documents, payment status, and a place on a loading sheet.',
    'The initial requirements included spreadsheet templates, user flows, and early HTML layouts. The first milestone was narrowed to the Operations Agent role; later work introduced a limited Admin scope and a handoff for the next stage.',
  ],
  facts: [
    { label: 'Client', value: 'TogaOS' },
    { label: 'Role', value: 'Product Designer' },
    { label: 'Focus', value: 'Freight operations MVP' },
    { label: 'Period', value: 'Feb — Mar 2026' },
  ],
  brief: 'Turn a broad operations concept into a practical, scoped MVP. Start with the Operations Agent’s daily work, connect the core documents and payment actions, and prepare an interface that engineering and the next designer could continue.',
  goals: [
    { icon: 'truck', text: 'Connect shipment details to the documents used to move cargo.' },
    { icon: 'users', text: 'Reuse known customer information throughout the workflow.' },
    { icon: 'shield-check', text: 'Make payment, release, and validation states explicit.' },
  ],
  role: 'At Konexta Agency, I worked on interface design, flows, a clickable prototype, revisions, and handoff. I collaborated with the agency lead and another designer in the first stage, then prepared the selected screens, components, and context for further development.',
  contributions: [
    'Designed shipment lists, creation and details, customer and container pages, payment collection, and Customer Advance states.',
    'Connected GRN, invoice, payment, and loading-sheet steps, including Excel-import validation and container-status updates.',
    'Developed reusable elements, prepared engineering exports, and began agreed Admin flows before handoff.',
  ],
  challenges: [
    {
      icon: 'users',
      title: 'Creating a shipment with less repeated information',
      problem: 'Shipment creation combines customer, cargo, destination, and financial details. Re-entering customer information slows the flow and creates more opportunities for inconsistent records.',
      responseTitle: 'Start with customer lookup and reuse the details',
      response: 'I reworked creation into sequential steps with customer lookup, new-customer creation, and autofill. Unnecessary fields were removed as the requirements became clearer.',
      details: [
        'Refined field names, including Customer Advance and Mobile, to match the agreed product language.',
        'Carried customer and cargo details into the later shipment and document steps.',
      ],
      flow: ['Find or create a customer', 'Add cargo and destination', 'Review shipment details'],
      flowLabel: 'Shipment creation journey',
      screenshots: [archiveScreenshots.togaosLookup, archiveScreenshots.togaosCustomer],
    },
    {
      icon: 'truck',
      title: 'Documents that stay connected to the cargo',
      problem: 'Receiving goods, preparing an invoice, recording a payment, and creating a loading sheet are related operational decisions. Treating each as an isolated form makes it harder to follow the shipment through the process.',
      responseTitle: 'Link the four core steps in one prototype',
      response: 'I assembled a GRN → Invoice → Payment → Loading Sheet flow, including cargo and destination choices and the supported country variants. The clickable prototype made the sequence available for review.',
      details: [
        'Refined GRN details, container number, discharge port, and the relationship between cargo release and remaining payment.',
        'Added Shipment ID, totals, and quick payment collection to the loading-sheet work.',
      ],
      flow: ['GRN', 'Invoice', 'Payment', 'Loading Sheet'],
      flowLabel: 'Core freight operations sequence',
      screenshots: [archiveScreenshots.togaosLoading],
    },
    {
      icon: 'grid',
      title: 'Importing spreadsheets with useful feedback',
      problem: 'Existing business data arrives through Excel templates. When an import contains errors, operators need a clear result before they can use that data in their daily tables and records.',
      responseTitle: 'Design the upload and its validation result together',
      response: 'I worked on the template-upload flow and validation results with errors, alongside the main tables for shipments, customers, and containers.',
      details: [
        'Included the states after validation as part of the import journey.',
        'Refined table structure and actions through requirements reviews with the project team.',
      ],
    },
    {
      icon: 'message',
      title: 'Knowing what a container update will communicate',
      problem: 'A container status connects an internal operational change with information a customer may receive. The operator needs to understand the update in the context of the container’s details.',
      responseTitle: 'Keep status changes and notification previews together',
      response: 'I designed container details and a status-update flow with a preview of the notification. Card and table presentations were explored as alternatives for working with containers.',
      details: [
        'Worked through the selected container, its status, and the message preview within the same flow.',
        'Kept the first milestone aligned with the Operations Agent scope as communication requirements changed.',
      ],
    },
    {
      icon: 'layers',
      title: 'A clear boundary for the next milestone',
      problem: 'The product scope expanded toward administrative tools while the first operational milestone still needed a clear handoff. Repeated controls and changing status colors also needed a shared foundation.',
      responseTitle: 'Package the agreed screens and reusable elements',
      response: 'I organised frequently repeated elements and colors into components, exported the Operations Agent final screens and components for engineering, and prepared context for the next designer. Limited Admin work covered login, advance approvals, rates and routes, and extra charges.',
      details: [
        'Reused operational pages where appropriate and kept the next milestone tied to its agreed scope.',
        'Passed on the selected designs, ongoing work, and product context so the next stage had a clear starting point.',
      ],
    },
  ],
} satisfies CaseStudy;
