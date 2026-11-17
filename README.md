# Alex Lohinov — Portfolio

A static Astro portfolio based on the **Home** artboard in [Paper](https://app.paper.design/file/01M75FPS6R8GQHEZ1H5JZ37X4V/p-1-0/1SU-0).

## Development

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

The static output is written to `dist/`.

## Content and structure

- `src/data/portfolio.ts` holds the profile and social URLs, and derives the project cards from the case-study registry.
- `src/data/experience.ts` holds the Konexta Agency role, dates, and contributions, based on the supplied resume.
- `src/data/case-studies/valorx.ts` holds the Valorx narrative, outcomes, and challenges. Its source and scope notes are in `docs/case-studies/valorx.md`.
- `src/data/case-studies/valorx-media.ts` holds the case screenshot metadata and documentation links. Shared content types and case-study components keep the narrative separate from presentation.
- `src/data/case-studies/index.ts` registers Valorx, CallFront, ROXFIT, TogaOS, Microcosm, and Werecruitly. Each narrative lives in its own module; source and scope notes for the new cases are in `docs/case-studies/projects.md`.
- `src/data/case-studies/archive-media.ts` holds the selected chat-export image metadata. Attachment context is recorded in `docs/case-studies/chat-media.json`; private correspondence is not published.
- `src/layouts/CaseStudyLayout.astro` provides the shared case page, while `src/pages/work/[slug].astro` generates a static route for each registered project.
- `src/components/` contains the profile, contact controls, reusable project card, and expandable work experience section. Interactive components use React islands through the official Astro integration.
- `src/components/ui/` provides shared Base UI button and avatar components. Navigation links share the button styles and retain native link semantics.
- `src/layouts/BaseLayout.astro` provides document metadata and the English document language.
- `src/styles/global.css` defines the shared styles and design values.
- `src/styles/radix-gray.ts` emits the official Radix Colors Gray and Gray Alpha scales for both system appearances at build time.
- `src/lib/ascii/` contains the background renderer, its worker, and the DOM lifecycle controller.
- `src/assets/` contains Paper artwork, official product screenshots, selected archive images, store badges, and user-supplied Valorx motion assets. Astro generates responsive WebP images during the build. The official store SVG badges are served unchanged.
- `public/icons/` contains the original social brand marks exported from Paper.

All typography uses the locally bundled `allo-font` package. The copy control uses `Copy` from `reicon-react`, in Outline weight. No additional icon library is included. UI primitives come from `@base-ui/react`, imported through component subpaths. Social brand marks use their original assets as masks, inheriting the theme's text color.

The interface uses Radix Colors Gray throughout, with semantic tokens for backgrounds, surfaces, text, borders, focus, and control states. Light and dark appearances follow `prefers-color-scheme` directly, without a switch, saved preference, or theme initialization script. Browser chrome also follows the system appearance.

The decorative ASCII background has a quiet ambient field, a pointer trail, and expanding rings on pointer presses, including taps. It runs in an OffscreenCanvas worker when available, with a lower-density main-thread fallback. Glyphs are cached in an atlas, pointer updates are coalesced, the number of cells and waves is capped, and animation pauses when the tab is hidden. Reduced motion renders a static field. The canvas stays behind the content and never intercepts input.

The linked Home design supplies the starting project artwork. All six projects have a dedicated description, brand mark, and case page. Microcosm and Werecruitly use official source artwork and appear after the original four projects. LinkedIn, GitHub, and X use the supplied profile URLs in `src/data/portfolio.ts`. The email control copies the address and opens the mail app if clipboard access is unavailable.

The desktop layout follows the 1440px artboard. The project grid changes to one column below 768px and scales its artwork proportionally.

Every project card opens its `/work/<slug>/` case. All cases share the introduction, outcomes, overview, brief, role, and challenges/solutions structure, with English narratives based on the local archive and official product context. Screenshots open at full size; public-source images also link to their sources. Selected archive images are captioned as concepts, studies, or iterations where appropriate. ROXFIT uses the official English App Store and Google Play download badges, with direct links to both listings.

Valorx's homepage cover uses an animated WebP converted from the supplied GIF, with a static preview for reduced motion. The first large visual in its case is the supplied MP4 recording, using native controls, muted looping playback, and a WebP poster extracted from the recording. Reduced motion disables video autoplay. The case includes eight challenges/solutions across Wave, Embedded, Matrix, Fusion, and shared interface work, with nine documentation screenshots.

The Work Experience section follows the supplied row-based reference. Its single Konexta Agency item has no disclosure arrow. Hover changes its background; clicking the row opens or closes a Base UI Collapsible. Its measured height and opacity transition over 200ms in both directions, with a reduced-motion alternative. Keyboard activation remains immediate. The official agency link is inside the expanded card, keeping the row a single accessible button. The agency's brand icon is saved locally as `public/icons/konexta.avif`. The expanded card shows contributions grouped by client and agency mentoring.

Only the production build is run, as requested. No tests or browser validation are configured.
