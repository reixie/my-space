import type { CaseStudy } from './types';
import { projectMedia, projectScreenshots } from './media';
import { archiveScreenshots } from './archive-media';

const media = projectMedia.callfront;

export const callfrontCase = {
  slug: 'callfront',
  name: 'CallFront',
  website: 'https://www.callfront.ai/',
  title: 'CallFront — Configuring an AI phone agent with confidence',
  summary: 'AI phone-agent setup, integrations, and responsive product flows',
  metaDescription: 'Product design by Alex Lohinov for CallFront: agent selection, question flows, phone and voice setup, integrations, and responsive onboarding.',
  introduction: 'CallFront helps businesses handle inbound calls and follow up with new leads through AI phone agents. I worked across its website and platform, turning agent selection, questions, phone settings, and integrations into a connected setup journey.',
  thumbnail: media.cover,
  markLight: media.mark,
  monochromeMark: true,
  hero: {
    kind: 'image', image: media.dashboard,
    alt: 'CallFront dashboard with call activity, a recent-calls table, and an activity chart.',
    source: { url: 'https://www.callfront.ai/', label: 'Product dashboard · CallFront' },
  },
  outcomes: [
    { icon: 'phone', title: 'Connected agent setup', description: 'Agent preview, phone-number selection, and voice settings carried through one configuration journey.' },
    { icon: 'layers', title: 'Explicit question rules', description: 'Required, optional, conditional, and compound questions presented according to agreed logic.' },
    { icon: 'refresh', title: 'Integration states', description: 'Connection flows, Connected feedback, and a request path for services that were not listed.' },
  ],
  overview: [
    'An AI phone agent needs more than a greeting. Businesses configure what it asks, when it asks a follow-up question, which number and voice it uses, and how it connects to their existing tools.',
    'My work moved from landing-page visuals into the product dashboard and setup flows. The central design task was to keep those decisions understandable as requirements expanded across different industry agents and integrations.',
  ],
  facts: [
    { label: 'Client', value: 'CallFront' },
    { label: 'Role', value: 'Product Designer' },
    { label: 'Platform', value: 'Web platform & website' },
    { label: 'Period', value: 'Nov 2025 — Jan 2026' },
  ],
  brief: 'Design website visuals and product journeys for selecting and configuring AI phone agents. The platform scope developed through detailed requirements for agent questions, phone numbers, voice previews, connected services, and mobile behavior.',
  goals: [
    { icon: 'phone', text: 'Help a business understand its agent before requesting activation.' },
    { icon: 'layers', text: 'Make question requirements and conditional behavior understandable.' },
    { icon: 'refresh', text: 'Keep service connections and their status visible during setup.' },
  ],
  role: 'I worked within Konexta Agency on interface design, flow alternatives, responsive states, and review updates. My contributions covered both the marketing website and the platform, with the agency lead coordinating requirements and client feedback.',
  contributions: [
    'Designed dashboard and agent-selection journeys, including previewing the agent’s questions and flow.',
    'Developed greeting, phone, voice, integration, Google OAuth, and calendar-configuration states.',
    'Prepared mobile authentication and setup variants, field-label rules, and supporting website and integration artwork.',
  ],
  challenges: [
    {
      icon: 'users',
      title: 'Choosing an agent while understanding its behavior',
      problem: 'An industry label alone does not explain how an agent will handle a conversation. Splitting selection and review into separate decisions also makes the setup harder to follow.',
      responseTitle: 'Bring selection and the question flow together',
      response: 'I developed agent-selection and dashboard flows that let a business review an agent’s questions and conversation structure as part of choosing it. The work evolved toward a combined selection and review experience.',
      details: [
        'Worked through industry-agent alternatives and the transition into configuration.',
        'Carried the selected agent into its greeting, settings, integrations, and activation-request journey.',
      ],
      flow: ['Choose and preview an agent', 'Configure its behavior', 'Request activation'],
      flowLabel: 'Agent setup journey',
      screenshots: [archiveScreenshots.callfrontAgents],
    },
    {
      icon: 'phone',
      title: 'Setting the voice a customer will hear',
      problem: 'Phone-number selection and voice choice affect how the agent reaches customers and represents the business. Voice selection needs a preview before the business can make a useful decision.',
      responseTitle: 'Make phone and voice choices tangible',
      response: 'I designed the greeting, phone-number selection, and voice-listening flows. Voice options and their preview states were considered alongside the selected number and the rest of the setup.',
      details: [
        'Worked through selection and listening behavior for available voices.',
        'Refined the layouts and navigation as client requirements and implementation feedback changed.',
      ],
      screenshots: [projectScreenshots.callfrontVoice],
    },
    {
      icon: 'refresh',
      title: 'Connecting existing tools, including the missing ones',
      problem: 'The setup needs to show which services are available, what is already connected, and what a business can do when its integration is missing. Authentication and calendar settings add service-specific decisions.',
      responseTitle: 'Give every connection a visible state and next step',
      response: 'I developed integration forms, Google OAuth and calendar settings, a dedicated Integrations page, and a request flow for missing services. Connection and request-confirmation states were included in the journey.',
      details: [
        'Distinguished an available connection action from the Connected state.',
        'Provided feedback after an integration request and prepared mobile versions of the flows.',
      ],
      screenshots: [projectScreenshots.callfrontIntegrations],
    },
    {
      icon: 'layers',
      title: 'Question labels that explain the agent’s logic',
      problem: 'An agent can ask required, optional, or conditional questions, including compound questions with child fields. Inconsistent labels would make the same rule appear to mean different things across the configuration.',
      responseTitle: 'Define one rule for each kind of question',
      response: 'I refined the field-label rules with the project team: required fields used the default treatment, optional fields were labelled, and conditional fields always kept their label. Compound questions followed the rule of their parent.',
      details: [
        'Applied the agreed hierarchy to question and form states.',
        'Corrected mobile text-field behavior alongside the label and content updates.',
      ],
    },
    {
      icon: 'grid',
      title: 'One product across website and mobile setup',
      problem: 'The business encounters CallFront through the website before reaching authentication, its company profile, and the agent configuration. These surfaces need a consistent visual language while accommodating smaller screens.',
      responseTitle: 'Carry the same interface decisions into responsive flows',
      response: 'I prepared landing-page visuals and website UI, followed by mobile Login and Signup, company-profile, and calendar-flow designs. Supporting work included link-preview artwork and requested integration marks.',
      details: [
        'Refined responsive layouts through the same review process as the desktop platform.',
        'Kept website assets and platform states connected to the client’s established product direction.',
      ],
      screenshots: [archiveScreenshots.callfrontMobile],
    },
  ],
} satisfies CaseStudy;
