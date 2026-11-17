import roxfitCover from '../../assets/projects/roxfit.png';
import roxfitMark from '../../assets/case-studies/roxfit/mark.png';
import roxfitPlanner from '../../assets/case-studies/roxfit/planner.webp';
import roxfitPlayer from '../../assets/case-studies/roxfit/player.webp';
import microcosmCover from '../../assets/case-studies/microcosm/cover.webp';
import microcosmMark from '../../assets/case-studies/microcosm/mark.png';
import callfrontCover from '../../assets/projects/callfront.png';
import callfrontMark from '../../assets/case-studies/callfront/mark.png';
import callfrontDashboard from '../../assets/case-studies/callfront/dashboard.webp';
import callfrontVoice from '../../assets/case-studies/callfront/voice.webp';
import callfrontIntegrations from '../../assets/case-studies/callfront/integrations.webp';
import togaosCover from '../../assets/projects/togaos.png';
import togaosMark from '../../assets/case-studies/togaos/mark.png';
import togaosOverview from '../../assets/case-studies/togaos/overview.webp';
import werecruitlyMark from '../../assets/case-studies/werecruitly/mark.png';
import werecruitlyCover from '../../assets/case-studies/werecruitly/cover.webp';
import werecruitlyInvites from '../../assets/case-studies/werecruitly/invites.webp';
import type { CaseScreenshot } from './types';

export const projectMedia = {
  roxfit: { cover: roxfitCover, mark: roxfitMark },
  microcosm: { cover: microcosmCover, mark: microcosmMark },
  callfront: { cover: callfrontCover, mark: callfrontMark, dashboard: callfrontDashboard },
  togaos: { cover: togaosCover, mark: togaosMark, overview: togaosOverview },
  werecruitly: { cover: werecruitlyCover, mark: werecruitlyMark },
};

const playStore = 'https://play.google.com/store/apps/details?id=app.roxfit.app';

export const projectScreenshots = {
  roxfitPlanner: {
    image: roxfitPlanner,
    alt: 'ROXFIT training planner showing a monthly calendar and scheduled workouts.',
    caption: 'Training planner',
    sourceUrl: playStore,
    sourceLabel: 'Google Play',
    presentation: 'portrait',
  },
  roxfitPlayer: {
    image: roxfitPlayer,
    alt: 'ROXFIT workout player with an exercise timer and controls for progressing through a training session.',
    caption: 'Workout player',
    sourceUrl: playStore,
    sourceLabel: 'Google Play',
    presentation: 'portrait',
  },
  callfrontVoice: {
    image: callfrontVoice,
    alt: 'CallFront agent setup showing phone-number selection and a list of voices with audio previews.',
    caption: 'Phone number and voice setup',
    sourceUrl: 'https://www.callfront.ai/',
    sourceLabel: 'CallFront',
  },
  callfrontIntegrations: {
    image: callfrontIntegrations,
    alt: 'CallFront integration setup showing available services, Connect buttons, and a request for a missing integration.',
    caption: 'Connecting an agent to existing tools',
    sourceUrl: 'https://www.callfront.ai/',
    sourceLabel: 'CallFront',
  },
  werecruitlyInvites: {
    image: werecruitlyInvites,
    alt: 'Werecruitly candidate invitations with accept and decline actions, status filters, and an option to open a conversation.',
    caption: 'Candidate invitations',
    sourceUrl: 'https://werecruitly.com/candidates',
    sourceLabel: 'Werecruitly',
  },
} satisfies Record<string, CaseScreenshot>;
