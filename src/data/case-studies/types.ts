import type { ImageMetadata } from 'astro';

export type CaseIconName =
  | 'grid' | 'refresh' | 'layers' | 'shield-check' | 'copy'
  | 'calendar' | 'message' | 'users' | 'phone' | 'truck';

export interface CaseOutcome {
  icon: CaseIconName;
  title: string;
  description: string;
}

export interface CaseScreenshot {
  image: ImageMetadata;
  alt: string;
  caption: string;
  sourceUrl?: string;
  sourceLabel?: string;
  presentation?: 'portrait' | 'contained';
}

export interface CaseChallenge {
  icon: CaseIconName;
  title: string;
  problem: string;
  responseTitle: string;
  response: string;
  details: string[];
  flow?: string[];
  flowLabel?: string;
  screenshots?: CaseScreenshot[];
  mediaLayout?: 'columns' | 'stack';
}

export interface CaseVideo {
  kind: 'video';
  src: string;
  poster: ImageMetadata;
  width: number;
  height: number;
  label: string;
}

export interface CaseImage {
  kind: 'image';
  image: ImageMetadata;
  alt: string;
  source?: { url: string; label: string };
}

export interface CaseStudy {
  slug: string;
  name: string;
  website: string;
  title: string;
  summary: string;
  metaDescription: string;
  introduction: string;
  thumbnail: ImageMetadata;
  animatedThumbnail?: string;
  markLight: ImageMetadata;
  markDark?: ImageMetadata;
  monochromeMark?: boolean;
  hero: CaseImage | CaseVideo;
  outcomes: CaseOutcome[];
  overview: string[];
  facts: { label: string; value: string }[];
  brief: string;
  goals: { icon: CaseIconName; text: string }[];
  role: string;
  contributions: string[];
  challenges: CaseChallenge[];
  links?: { label: string; href: string }[];
  storeLinks?: StoreLink[];
}

export interface StoreLink {
  store: 'app-store' | 'google-play';
  href: string;
}
