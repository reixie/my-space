import type { CaseStudy } from './types';
import { projectMedia, projectScreenshots } from './media';
import { archiveScreenshots } from './archive-media';

const media = projectMedia.roxfit;

export const roxfitCase = {
  slug: 'roxfit',
  name: 'ROXFIT',
  website: 'https://roxfit.app/',
  title: 'ROXFIT — From finding a workout to understanding the result',
  summary: 'Discovery, planning, and workout experiences for hybrid athletes',
  metaDescription: 'Product design by Alex Lohinov for ROXFIT: workout discovery, rescheduling, wearable setup, and post-workout results within an existing mobile design system.',
  introduction: 'ROXFIT helps hybrid athletes train, prepare for HYROX, and follow their performance. I worked on the everyday training journey: finding a session, fitting it into a schedule, connecting devices, and reviewing what happened after the workout.',
  thumbnail: media.cover,
  markLight: media.mark,
  hero: {
    kind: 'image',
    image: media.cover,
    alt: 'ROXFIT mobile interface presented on two phones, showing an athlete profile and profile editing.',
  },
  storeLinks: [
    { store: 'app-store', href: 'https://apps.apple.com/us/app/roxfit/id6476465403' },
    { store: 'google-play', href: 'https://play.google.com/store/apps/details?id=app.roxfit.app' },
  ],
  outcomes: [
    { icon: 'grid', title: 'Workout discovery', description: 'Categories, recommendations, and browsing paths organised around an athlete’s training needs.' },
    { icon: 'calendar', title: 'Planning and connections', description: 'Rescheduling states and device-connection journeys within the existing mobile system.' },
    { icon: 'layers', title: 'Results in context', description: 'Training summaries structured around sets, rounds, time, weight, and heart rate.' },
  ],
  overview: [
    'Hybrid training combines running, strength, and conditioning. A useful training app needs to support that variety while keeping the next session easy to find and the weekly plan understandable.',
    'My scope covered Discover, workout recommendations, planner interactions, wearable connections, and completed-workout statistics. Each part had to work with ROXFIT’s established components and existing product decisions.',
  ],
  facts: [
    { label: 'Client', value: 'ROXFIT' },
    { label: 'Role', value: 'Product Designer' },
    { label: 'Platform', value: 'Mobile app' },
    { label: 'Period', value: 'Aug — Sep 2025' },
  ],
  brief: 'Develop selected training experiences in the existing mobile product. The work began with Discover and expanded into recommendations, planning, device setup, and workout completion, with alternatives refined through agency and client reviews.',
  goals: [
    { icon: 'grid', text: 'Help athletes find a session for their goal and available time.' },
    { icon: 'calendar', text: 'Make changes to a training plan clear and predictable.' },
    { icon: 'layers', text: 'Keep workout details meaningful across different training types.' },
  ],
  role: 'I worked as a Product Designer at Konexta Agency, developing flows and interface alternatives with the agency lead and client feedback. I used the existing design system to carry the same interaction language across discovery, planning, and results.',
  contributions: [
    'Structured Discover with workout categories, ROXFIT WOD, athletes, Most Played, Trending, and goal- and time-based discovery.',
    'Designed recommendation cards, rescheduling interactions, and device-list, connection, and empty states.',
    'Prepared rating prompts and completed-workout statistics for different session structures.',
  ],
  challenges: [
    {
      icon: 'grid',
      title: 'Finding the right session',
      problem: 'An athlete may arrive with a specific training goal, a short time window, or a desire to explore. Discover needed to support those starting points while bringing different kinds of workouts into one coherent screen.',
      responseTitle: 'Organise discovery around useful choices',
      response: 'I built Discover around clear content groups and developed alternatives for workout recommendations. Card treatments used the product’s yellow accents, with swipe behavior and explicit selection actions explored during review.',
      details: [
        'Connected categories, athlete-led content, popular sessions, and new workouts within the same browsing structure.',
        'Included discovery by goal and duration so a user could narrow the choice around the session they needed.',
      ],
      screenshots: [archiveScreenshots.roxfitDiscover],
    },
    {
      icon: 'calendar',
      title: 'Changing a plan without losing the workout',
      problem: 'Training plans change. Moving a workout requires a clear connection between the selected session, its current position, and the day it will move to.',
      responseTitle: 'Make the move and its destination visible',
      response: 'I developed planner alternatives with workout movement and drag-and-drop states. The work addressed the feedback shown during a move and the resulting placement in the schedule.',
      details: [
        'Explored how the selected workout and available drop destinations should appear.',
        'Kept the interaction and spacing aligned with the established mobile components.',
      ],
      screenshots: [projectScreenshots.roxfitPlanner],
    },
    {
      icon: 'refresh',
      title: 'Connecting a device with a clear starting point',
      problem: 'Adding a new wearable and reconnecting a saved device are different tasks. An empty device list also needs a useful next action before any connection exists.',
      responseTitle: 'Separate adding from connecting',
      response: 'I worked through Garmin, Apple, and Amazfit connection journeys, including adding a device, connecting it, displaying saved devices, and presenting the empty state.',
      details: [
        'Distinguished the available actions for a saved device from the flow for adding a new one.',
        'Kept setup states consistent across the supported device journeys.',
      ],
      flow: ['Open devices', 'Add or choose a device', 'Connect'],
      flowLabel: 'Wearable connection journey',
      screenshots: [archiveScreenshots.roxfitDevices],
    },
    {
      icon: 'layers',
      title: 'A result that matches the workout',
      problem: 'A strength session is read through sets, repetitions, and weight; a conditioning session may be organised around rounds and time. A single flat summary would hide the structure of the work completed.',
      responseTitle: 'Preserve the session’s structure in the result',
      response: 'I developed completed-workout statistics and rating-prompt alternatives. Sets and rounds remained visible alongside the relevant measurements, including time, weight, and heart rate.',
      details: [
        'Worked through different layouts for strength and conditioning results.',
        'Placed the completion and rating experience within the wider workout journey.',
      ],
      screenshots: [projectScreenshots.roxfitPlayer],
    },
  ],
} satisfies CaseStudy;
