# Portfolio case studies — sources and scope

All six case pages use `src/layouts/CaseStudyLayout.astro` and the static `/work/[slug]/` route. Their introductions, outcomes, overview, brief, role, and challenges/solutions follow the established Valorx layout. Content is held in individual data modules and registered in `src/data/case-studies/index.ts`; the homepage cards derive their names, summaries, artwork, and links from that registry.

## Local source archive

The five new narratives are based on `История проекта.docx` in these directories, relative to `/Users/alex/Downloads/Рабочие проекты с Анастасией/01. Клиентские проекты/`:

| Case | Directory | Documented period |
| --- | --- | --- |
| ROXFIT | `Roxfit — TRAIN` | 20 August–26 September 2025 |
| Microcosm | `Microcosm` | 7 October 2025–15 January 2026 |
| CallFront | `CallFront — сайт и платформа` | 11 November 2025–21 January 2026 |
| TogaOS | `TogaOS — FlowOS — Zembera Flow OS` | 4 February–6 March 2026 |
| Werecruitly | `Werecruitly` | 6 January–2 March 2026 |

The displayed periods describe the available work records, not the complete age or development timeline of each product. Private names, internal links, correspondence, and record identifiers are not published on the case pages.

## ROXFIT

The archive supports Discover, workout recommendations, planner and drag-and-drop states, Garmin/Apple/Amazfit setup, and rating/completed-workout statistics. HYPE Chat was supplied as an already approved design for possible ideas; the case does not claim ownership of that design.

Official context comes from [ROXFIT](https://roxfit.app/), the [App Store](https://apps.apple.com/us/app/roxfit/id6476465403), and [Google Play](https://play.google.com/store/apps/details?id=app.roxfit.app). The public planner and workout-player screenshots are credited to Google Play. The player illustrates the training context; it is not presented as a screenshot of the authored post-workout results. The supplied Paper phone artwork remains the cover. Original official store badges link to both app listings from the introduction; their provenance is documented in `store-badges.md`.

## Microcosm

The archive supports targeted design work on free offers, a creator-specific preorder scenario, session cards, unread states, and documented design QA across creator and customer journeys. Reported implementation issues are distinct from engineering fixes. Revisited or discarded findings are not presented as confirmed defects.

The official [Microcosm](https://microcosm.one/) brand artwork and logo supply the visuals. The legacy `logo192.png` asset is a React placeholder and is not used. The public page makes no claim about sales volume, revenue, or a full platform redesign. Workflow sequences are semantic summaries of documented design work, not invented screenshots of the product.

## CallFront

The archive supports website artwork, responsive authentication, company profile and calendar flows, agent selection/review, greeting, phone and voice setup, integration forms, Google OAuth, missing-integration requests, connection states, and field-label rules.

The [official website](https://www.callfront.ai/) supplies the dashboard, voice, and integration screenshots. They illustrate the public product and are credited individually. The homepage retains the supplied cover artwork. No conversion or call-volume result is attributed to the design work.

## TogaOS

The archive confirms the TogaOS/FlowOS/Zembera Flow OS naming chain. It supports the scoped Operations Agent MVP, shipment/customer/container flows, customer lookup, GRN → Invoice → Payment → Loading Sheet prototype, import validation, and selected Admin work before handoff. The case does not claim completion of the full Admin product or later implementation by another designer.

The [official TogaOS website](https://www.togaos.com/) provides the current product illustration. Its Owner Dashboard is credited as current product context, not as proof of sole authorship of that screen. The supplied Paper cover remains on the homepage. The four-step flow comes from the archive. Estimates of hours, marketing shipment counts, and projected business outcomes are not used as design results.

## Werecruitly

The archive supports selected-page improvements: footer, recruiter profile states, subscriptions, Messages and Hire-related work, Favorites, settings/security/identity, candidate Invites, and design QA. Hire metrics were recommendations; the case does not present them as a working matching algorithm or verified performance result. Contributions by other reviewers remain distinct from Alex's own follow-up work.

The Werecruitly cover is user-supplied artwork, served locally for both the homepage card and the case hero. The [official Werecruitly website](https://werecruitly.com/) remains product context only. The profile and invitation layout studies come from the supplied chat export.

## Chat-export visuals

The additional source is `/Users/alex/Downloads/ChatExport_Анастасія/`. Attachment context was matched against the project records and replies, then the selected source images were inspected before use. Proximity alone is not treated as proof of project or authorship: the export also contains unrelated projects, external references, and client-provided examples.

Ten selected images are stored locally and described in `src/data/case-studies/archive-media.ts`:

- ROXFIT: the Discover exploration shared by Alex and a device-connection state study.
- CallFront: agent selection/question preview and a mobile integration-setup study.
- TogaOS: customer lookup, new-customer creation, and a loading-sheet layout study using sample data.
- Werecruitly: a recruiter-profile alternative and an invitation-card layout iteration.
- Valorx: a pagination-control detail supplied during design-system/divider review; this is product-control context rather than a claim of sole authorship.

Drafts, concepts, and reviewed layouts retain those stages in their captions. The images are unmodified apart from WebP encoding. `chat-media.json` records each selected source attachment, message identifier, dimensions, and context. It contains no correspondence or access details. Private chat screenshots and review recordings are not copied into public site assets. Microcosm's available captures were largely correspondence, email confirmations, or review recordings, so its existing visuals remain in place.

## Media and presentation

`project-media.json` records the official asset URLs and dimensions. Local media lives under `src/assets/case-studies/`. Public-source captions link to their sources. Archive-image captions describe the artifact without exposing a private chat or filesystem link. All screenshot images open at full resolution. Source product colors are retained; the portfolio interface follows Radix Gray in both system appearances.

Official wordmarks for Microcosm, CallFront, TogaOS, and Werecruitly are rendered as CSS masks of their leading brand symbols. No new SVG paths or third-party icon library are introduced. UI icons use searched Reicon names with Outline weight.

The Valorx video poster is now imported from the prepared `grid-view-poster.webp` asset, replacing the earlier PNG import reported in the user's error. Media files are prepared before their source imports are introduced. The production build covers all seven static pages; no tests or browser validation are performed, as requested.
