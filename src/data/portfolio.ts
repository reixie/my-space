import type { ImageMetadata } from 'astro';
import avatar from '../assets/avatar.jpg';
import { caseStudies } from './case-studies';

export const profile = {
  name: 'Alex Lohinov',
  email: 'alex@lohinov.com',
  avatar,
  title: 'I’m Alex, Product Designer & Builder with 3+ years experience.',
  bio: [
    'I work across web, mobile, and native apps, turning complex workflows into clear, considered experiences.',
    'From research and interaction design to design systems and AI-assisted prototypes, I work closely with engineers to bring ideas into products.',
  ],
};

export interface SocialLink {
  name: string;
  icon: string;
  href: string | null;
}

// A missing profile URL opens an email request for that platform.
export const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', icon: '/icons/linkedin.svg', href: 'https://www.linkedin.com/in/alex-lohinov/' },
  { name: 'GitHub', icon: '/icons/github.svg', href: 'https://github.com/reixie' },
  { name: 'X', icon: '/icons/x.svg', href: 'https://x.com/reixxiie' },
];

export interface Project {
  id: string;
  name: string;
  description: string;
  cover: ImageMetadata;
  animatedCover?: string;
  background?: ImageMetadata;
  mark: ImageMetadata;
  darkMark?: ImageMetadata;
  monochromeMark?: boolean;
  href?: string;
}

export const projects: Project[] = caseStudies.map((caseStudy) => ({
  id: caseStudy.slug,
  name: caseStudy.name,
  description: caseStudy.summary,
  cover: caseStudy.thumbnail,
  animatedCover: caseStudy.animatedThumbnail,
  mark: caseStudy.markLight,
  darkMark: caseStudy.markDark,
  monochromeMark: caseStudy.monochromeMark,
  href: `/work/${caseStudy.slug}/`,
}));
