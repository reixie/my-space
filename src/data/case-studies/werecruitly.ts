import type { CaseStudy } from './types';
import { projectMedia } from './media';
import { archiveScreenshots } from './archive-media';

const media = projectMedia.werecruitly;

export const werecruitlyCase = {
  slug: 'werecruitly',
  name: 'Werecruitly',
  website: 'https://werecruitly.com/',
  title: 'Werecruitly — Clearer actions for recruiters and candidates',
  summary: 'Recruiter profiles, candidate invitations, messaging, and design QA',
  metaDescription: 'Product design and design QA by Alex Lohinov for Werecruitly: role-specific profiles, messaging, candidate invitations, favorites, subscriptions, and account settings.',
  introduction: 'Werecruitly connects candidates and recruiters through profiles, matching, and conversations. I refined selected product journeys so each role could understand its profile, act on invitations, manage messages, and move between desktop and mobile with consistent states.',
  thumbnail: media.cover,
  markLight: media.mark,
  monochromeMark: true,
  hero: {
    kind: 'image', image: media.cover,
    alt: 'Werecruitly wordmark centered on a light gray background.',
  },
  outcomes: [
    { icon: 'users', title: 'Role-specific profiles', description: 'Empty and populated recruiter states developed around the differences between user roles.' },
    { icon: 'message', title: 'Invitations and conversations', description: 'Accept, decline, chat actions, and conversation entry points worked through as connected journeys.' },
    { icon: 'shield-check', title: 'Consistent product states', description: 'Responsive favorites, account settings, and documented design QA for the implemented interface.' },
  ],
  overview: [
    'Recruiters and candidates use the same platform for different decisions. One side reviews potential hires; the other considers opportunities and decides whether to respond. Profiles, invitations, and conversations need to reflect those roles.',
    'The agreed scope focused on selected UI and UX improvements in an existing product. My work covered recruiter-profile alternatives, subscriptions, messages, Hire, favorites, candidate invitations, settings, and follow-up design QA.',
  ],
  facts: [
    { label: 'Client', value: 'Werecruitly' },
    { label: 'Role', value: 'Product Designer & Design QA' },
    { label: 'Platform', value: 'Responsive web platform' },
    { label: 'Period', value: 'Jan — Mar 2026' },
  ],
  brief: 'Improve selected pages and their states within the existing recruitment platform. Develop alternatives around the different user roles, refine them through client reviews, and document implementation feedback across desktop and mobile.',
  goals: [
    { icon: 'users', text: 'Show information and actions that fit each user’s role.' },
    { icon: 'message', text: 'Keep invitation decisions connected to the right conversation.' },
    { icon: 'shield-check', text: 'Carry the agreed behavior into responsive and implemented states.' },
  ],
  role: 'At Konexta Agency, I designed selected pages and interaction states, explored alternatives, and prepared implementation feedback. I worked with the agency lead on requirements and reviews, and contributed follow-up QA alongside the wider team.',
  contributions: [
    'Developed recruiter-profile states, Activity and Top Matches alternatives, Subscription, Messages, and Hire-related design work.',
    'Designed Favorites, candidate Invites, account settings, identity and security flows, and responsive variants.',
    'Documented implementation issues, revisited agreed exceptions, and proposed ways to explain Hire metrics without treating them as an implemented matching algorithm.',
  ],
  challenges: [
    {
      icon: 'users',
      title: 'A profile that fits the person using it',
      problem: 'Recruiter and candidate profiles do not need the same content. Empty and populated states must also explain what belongs on the page before a user has built up activity or matches.',
      responseTitle: 'Develop the states around each role',
      response: 'I prepared recruiter-profile alternatives, then revised their content around the role differences. Activity and Top Matches were explored as part of that work, with several directions taken through review.',
      details: [
        'Included empty and populated profile states instead of relying on a single ideal example.',
        'Prepared Subscription alternatives and incorporated the client’s subsequent content and interface changes.',
      ],
      screenshots: [archiveScreenshots.werecruitlyProfile],
    },
    {
      icon: 'message',
      title: 'An invitation with a clear decision and outcome',
      problem: 'Candidates need to understand which invitations still need a response, what has been accepted or declined, and how an invitation leads into a conversation.',
      responseTitle: 'Design the invitation lifecycle',
      response: 'I developed candidate Invites with empty states, acceptance and decline actions, conversation entry points, and Active, Accepted, and Declined states. The visual treatment was refined through later reviews.',
      details: [
        'Worked through the result of each response and the path into the relevant chat.',
        'Kept state and style changes connected across the invitation views.',
      ],
      flow: ['Review an invitation', 'Accept or decline', 'Open the conversation when relevant'],
      flowLabel: 'Candidate invitation journey',
      screenshots: [archiveScreenshots.werecruitlyInvitations],
    },
    {
      icon: 'message',
      title: 'Conversation actions that explain their consequences',
      problem: 'Chat actions include saving a contact, opening a profile, reporting or blocking someone, and deleting a conversation. Each action needs an understandable result without adding unnecessary steps.',
      responseTitle: 'Work through the action menu and its follow-up states',
      response: 'I designed Messages and Hire-related flows, including chat menus, favorites, profile access, Block, Report, and chat deletion. Report behavior was refined toward selecting a predefined reason without a separate description field.',
      details: [
        'Clarified which fields and confirmations belonged to each action.',
        'Followed implementation with desktop and mobile feedback on files, duplicate chats, overflow, spacing, and interaction states.',
      ],
    },
    {
      icon: 'shield-check',
      title: 'Account actions across desktop and mobile',
      problem: 'Profile editing, account security, identity, and favorites combine everyday changes with more consequential actions. The same behavior needs to remain clear when the available space changes.',
      responseTitle: 'Keep the agreed controls and adapt their states',
      response: 'I developed Settings and Edit Profile, Account Security and Identity flows, including 2FA and Delete Account. Favorites alternatives were refined into a selected direction with mobile and pressed states.',
      details: [
        'Removed fields and session-management controls that were outside the client’s agreed scope.',
        'Documented expected favorites and account behavior alongside the responsive layouts.',
      ],
    },
    {
      icon: 'layers',
      title: 'Turning visual review into usable engineering feedback',
      problem: 'A design can look correct in one state but behave differently with files, long messages, empty lists, or a smaller screen. Review findings also need to reflect exceptions that the client has already accepted.',
      responseTitle: 'Keep the evidence and acceptance criteria together',
      response: 'I prepared design QA documents with expected appearance and Figma references, revisited Messages and Favorites after changes, and corrected findings when they conflicted with an agreed exception.',
      details: [
        'Covered file uploads, content overflow, hover and tap behavior, and favorites states across desktop and mobile.',
        'Prepared responsive footer layouts and grouped links as part of the broader page-level improvements.',
      ],
    },
  ],
} satisfies CaseStudy;
