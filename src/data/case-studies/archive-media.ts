import roxfitDiscover from '../../assets/case-studies/roxfit/discover-exploration.webp';
import roxfitDevices from '../../assets/case-studies/roxfit/device-empty-state.webp';
import callfrontAgents from '../../assets/case-studies/callfront/agent-selection-study.webp';
import callfrontMobile from '../../assets/case-studies/callfront/mobile-integrations-study.webp';
import togaosLookup from '../../assets/case-studies/togaos/customer-lookup-study.webp';
import togaosCustomer from '../../assets/case-studies/togaos/new-customer-study.webp';
import togaosLoading from '../../assets/case-studies/togaos/loading-sheet-study.webp';
import werecruitlyProfile from '../../assets/case-studies/werecruitly/recruiter-profile-study.webp';
import werecruitlyInvitations from '../../assets/case-studies/werecruitly/invitation-layout-study.webp';
import valorxPagination from '../../assets/case-studies/valorx/pagination-detail.webp';
import type { CaseScreenshot } from './types';

export const archiveScreenshots = {
  roxfitDiscover: {
    image: roxfitDiscover,
    alt: 'Early Discover exploration showing grouped workout categories and related mobile screens on a design board.',
    caption: 'Discover layout exploration',
    presentation: 'contained',
  },
  roxfitDevices: {
    image: roxfitDevices,
    alt: 'A device-connection state study with No devices yet, Connect, and Add New Wearable actions.',
    caption: 'Device-connection state study',
    presentation: 'contained',
  },
  callfrontAgents: {
    image: callfrontAgents,
    alt: 'CallFront agent-selection study with an expanded Real Estate Agent question table and other available agents.',
    caption: 'Agent selection and question-preview study',
  },
  callfrontMobile: {
    image: callfrontMobile,
    alt: 'CallFront mobile integration setup showing connected and available services within the agent configuration.',
    caption: 'Mobile integration setup study',
    presentation: 'portrait',
  },
  togaosLookup: {
    image: togaosLookup,
    alt: 'TogaOS shipment-creation concept with mobile-number lookup, an existing customer, and an Add New Client action.',
    caption: 'Shipment customer-lookup concept',
  },
  togaosCustomer: {
    image: togaosCustomer,
    alt: 'TogaOS new-customer concept showing a side panel with customer details beside the client list.',
    caption: 'New-customer creation concept',
  },
  togaosLoading: {
    image: togaosLoading,
    alt: 'Loading-sheet layout study with cargo and invoice totals, payment filters, and shipment rows using sample data.',
    caption: 'Loading-sheet layout study',
  },
  werecruitlyProfile: {
    image: werecruitlyProfile,
    alt: 'Werecruitly recruiter-profile alternative with profile information, contact details, expertise, and active job listings.',
    caption: 'Recruiter-profile design alternative',
  },
  werecruitlyInvitations: {
    image: werecruitlyInvitations,
    alt: 'Werecruitly invitation-layout iteration with pending, accepted, and declined examples and conversation actions.',
    caption: 'Invitation-card layout iteration',
  },
  valorxPagination: {
    image: valorxPagination,
    alt: 'Valorx pagination control detail with a record count, page-size choices, All Records, and settings.',
    caption: 'Pagination control detail',
  },
} satisfies Record<string, CaseScreenshot>;
