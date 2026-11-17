export const experience = {
  company: 'Konexta Agency',
  website: 'https://www.konexta.agency/',
  logo: '/icons/konexta.avif',
  role: 'Product Designer',
  start: { date: '2023-08', label: 'Aug 2023' },
  end: { date: '2026-10', label: 'Oct 2026' },
  summary:
    'Worked remotely across B2B SaaS and mobile products, combining user research, interaction design, reusable systems, and close collaboration with engineering.',
  projects: [
    {
      name: 'Valorx',
      focus: 'Salesforce data workflows',
      highlights: [
        'Enabled personal grid views within access rules and kept saving available at the copy limit with a shipped delete-and-save workflow.',
        'Made partial restores actionable with recovery summaries that separated restored views from items still awaiting a decision.',
        'Created dropdown and filter components for Wave’s design system, aligning states and tokens and documenting component APIs and versioning for engineering handoff.',
      ],
    },
    {
      name: 'CallFront',
      focus: 'AI-agent setup',
      highlights: [
        'Unified AI-agent preview, phone, voice, and integration settings in a shipped setup flow through activation request, accommodating Twilio and Google OAuth constraints.',
        'Defined question rules with the client so businesses could understand when an agent asks follow-up questions and which answers are optional.',
      ],
    },
    {
      name: 'TogaOS',
      focus: 'Freight operations MVP',
      highlights: [
        'Replaced repeat entry for existing customers with shipped phone lookup across shipment, invoice, payment, and loading-sheet flows in an MVP agreed with stakeholders.',
      ],
    },
    {
      name: 'Microcosm',
      focus: 'Creator & customer journeys',
      highlights: [
        'Enabled free-session bookings without payment checkout, keeping creator setup, offer details, and confirmation consistent in the shipped flow.',
        'Researched creator and customer journeys.',
      ],
    },
    {
      name: 'ROXFIT',
      focus: 'Mobile fitness app',
      highlights: [
        'Designed workout rescheduling and wearable setup within the existing mobile design system, showing drop destinations and distinguishing saved-device connections from adding a new device.',
        'Structured post-workout results by sets for strength training and rounds for conditioning, keeping repetitions, weight, time, and heart rate in context.',
      ],
    },
  ],
  mentoring:
    'Mentored a junior designer through task planning, reviews, and video guides.',
};

export type WorkExperience = typeof experience;
