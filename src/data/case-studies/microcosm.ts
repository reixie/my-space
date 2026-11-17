import type { CaseStudy } from './types';
import { projectMedia } from './media';

const media = projectMedia.microcosm;

export const microcosmCase = {
  slug: 'microcosm',
  name: 'Microcosm',
  website: 'https://microcosm.one/',
  title: 'Microcosm — Clearer journeys for creators and customers',
  summary: 'Creator offers, bookings, and product design QA',
  metaDescription: 'Product design and design QA by Alex Lohinov for Microcosm: free bookings, preorder fulfillment, session cards, messaging, and creator-to-customer journeys.',
  introduction: 'Microcosm brings creators and customers together around products, services, and individual or group sessions. I refined offer and booking journeys, clarified important interface states, and documented how the experience held together across the working product.',
  thumbnail: media.cover,
  markLight: media.mark,
  monochromeMark: true,
  hero: {
    kind: 'image',
    image: media.cover,
    alt: 'Microcosm’s official community artwork with its brand mark and the phrase Be abundant as you.',
    source: { url: 'https://microcosm.one/', label: 'Brand artwork · Microcosm' },
  },
  outcomes: [
    { icon: 'calendar', title: 'Free booking journey', description: 'Creator setup, offer details, and confirmation connected without a payment checkout.' },
    { icon: 'layers', title: 'Offer-specific details', description: 'Fulfillment choices and session information made explicit at the point of decision.' },
    { icon: 'shield-check', title: 'Documented design QA', description: 'User scenarios, evidence, and follow-up reviews across creator and customer journeys.' },
  ],
  overview: [
    'The platform supports different kinds of offers: physical and digital products, services, and private or group sessions. Those differences affect availability, fulfillment, booking, and payment.',
    'I worked on targeted improvements to existing journeys, then followed their behavior across the implemented product. The focus was continuity: what a creator publishes should remain understandable when a customer discovers, books, receives, or manages it.',
  ],
  facts: [
    { label: 'Client', value: 'Microcosm' },
    { label: 'Role', value: 'Product Designer & Design QA' },
    { label: 'Platform', value: 'Web platform' },
    { label: 'Period', value: 'Oct 2025 — Jan 2026' },
  ],
  brief: 'Refine selected creator and customer scenarios in an existing platform, then evaluate the working journeys against their agreed behavior. The scope included offer setup, booking, fulfillment, communication, and the states that connect them.',
  goals: [
    { icon: 'calendar', text: 'Keep booking appropriate to the offer’s price and session type.' },
    { icon: 'users', text: 'Carry the creator’s choices through to the customer experience.' },
    { icon: 'shield-check', text: 'Give engineering clear, reproducible design feedback.' },
  ],
  role: 'Within Konexta Agency, I contributed targeted interface designs, developer explanations, user scenarios, and design QA reports. I worked with the agency lead on existing flows and clarified disputed observations against the agreed product behavior.',
  contributions: [
    'Designed free-offer setup and booking, preorder details, unread-message indicators, and session-card alternatives.',
    'Documented user scenarios with steps, screenshots, expected behavior, and implementation observations.',
    'Revisited reported issues after changes and refined findings when the evidence or agreed behavior differed.',
  ],
  challenges: [
    {
      icon: 'calendar',
      title: 'Booking something that is free',
      problem: 'A free offer still needs a complete booking journey, but asking for payment introduces a step that does not belong to that offer. The creator’s setup and the customer’s confirmation also need to agree on the price.',
      responseTitle: 'Carry “Free” through the whole journey',
      response: 'I designed alternatives for creating a free offer, displaying its price to the customer, and completing the booking without payment checkout.',
      details: [
        'Connected the creator’s pricing choice with the offer’s customer-facing state.',
        'Worked through confirmation so the reservation could finish without a payment action.',
      ],
      flow: ['Choose a free offer', 'Select a session', 'Confirm booking'],
      flowLabel: 'Free-session booking without payment checkout',
    },
    {
      icon: 'layers',
      title: 'Fulfillment changes the next step',
      problem: 'A physical preorder can require delivery or pickup and a different payment-confirmation sequence. Generic booking buttons can leave the customer unsure what happens after placing the order.',
      responseTitle: 'Make the fulfillment and payment sequence explicit',
      response: 'For a creator-specific preorder scenario, I clarified Delivery and Pickup behavior, revised action labels, and documented confirmation of payment after receipt.',
      details: [
        'Explained the intended sequence and changed controls for developers.',
        'Kept the scenario tied to the relevant creator and offer rather than applying one payment rule to every product.',
      ],
    },
    {
      icon: 'message',
      title: 'Enough information to choose and respond',
      problem: 'Session cards need to explain what is being booked before the user opens the details. Messages also need to distinguish conversations that still require attention.',
      responseTitle: 'Surface the details that change the decision',
      response: 'I explored session cards with type, duration, location, and private or group information. I also worked on unread-message indicators to make communication states easier to recognise.',
      details: [
        'Considered the differences between group, individual, online, and offline sessions.',
        'Kept session and communication states aligned with the surrounding existing flows.',
      ],
    },
    {
      icon: 'shield-check',
      title: 'Following a journey beyond one screen',
      problem: 'An offer can be edited, saved as a draft, published, archived, cancelled, or booked. A change may also appear in calendars and emails, where an isolated screen review can miss an inconsistency.',
      responseTitle: 'Document scenarios from setup to confirmation',
      response: 'I reviewed creator and customer journeys with reproducible steps and screenshots, covering offer lifecycle, booking, calendar behavior, and messages. Follow-up reviews separated remaining issues from corrected or unsupported findings.',
      details: [
        'Extended the scenarios to settings, tags, search, physical products, and group or recurring sessions.',
        'Clarified differences between the product and its emails, and corrected reports when the original evidence was inaccurate.',
      ],
      flow: ['Create or edit an offer', 'Publish and book', 'Review calendar and confirmation'],
      flowLabel: 'Cross-surface design QA journey',
    },
  ],
} satisfies CaseStudy;
