# Valorx case study — content notes

The public case is `/work/valorx/`. Its content ends at **Challenges & solutions**. The narrative describes Alex's contribution within an existing product and design team.

## Sources

All local paths below are relative to `/Users/alex/Downloads/Рабочие проекты с Анастасией/01. Клиентские проекты/Valorx — обзор работы/`.

- `История проекта.docx`: client and product family, individual scope, archive coverage from 29 October 2025 through 6 March 2026.
- `Направления/Wave Embedded — Wizard, представления и публикация/История проекта.docx`: permissions, personal copies, the ten-copy limit, Delete and Save Copy, separate deletion warnings for a personal copy and a Global Grid, and iterative Custom Grid approval. Relevant source records include 87524, 87552, 87588, 88772, 88935, 88959, and 89096.
- `Направления/Wave Home и Settings/История проекта.docx`: Backup & Restore, progress/result states, and separating already restored items from unresolved actions. Relevant records include 84765, 85109, 85133, 86688, and 86694.
- `Направления/Wave — дизайн-система, иконки и файлы/История проекта.docx`: the pre-existing library, Dropdown and Filter components, and design-state alignment. Relevant records include 86716, 86752, and 86802.
- `Направления/Wave Grids — группировки и пагинация/История проекта.docx`: Column Grouping, Related List and Display Options, runtime constraints, and pagination across main grids, row groups, and related lists.
- `Направления/Wave Grids — Formula Builder и Template/История проекта.docx`: Insert Function, Nested Functions, expandable helpers, and template-insertion alternatives. Core work was approved with an explicit exception for template behavior; that exploration is not described as a fully delivered feature.
- `Направления/Wave Matrix/История проекта.docx`: wizard setup, date formats, historical data, X-axis display styles, and two-level X-axis alternatives. These are described as design work and iteration rather than a full Matrix launch.
- `Направления/Fusion — dashboard и State Management/История проекта.docx`: Managed Package research; dashboard, app-launch, and empty-state alternatives; Ribbon, Sheet, and Map rules; conditional visibility and locking.
- `Направления/Build Studio — правые панели/История проекта.docx`: right-panel, control, icon, and spacing updates; before/after flows and further review. The case does not claim authorship of the whole Build Studio product.
- [Paper case reference](https://app.paper.design/file/01M75FPS6R8GQHEZ1H5JZ37X4V/p-1-0/1XC-0): the initial two-layer cover, three outcome blocks, 1240px content width, 24px card padding, and 12px corners. The cover was subsequently replaced with the user's video.
- [Content-structure reference](https://phenomenonstudio.com/projects/isora-governance-risk-and-compliance-assessment-platform): overview, business needs, role, and challenges/solutions. No client facts or performance claims are transferred from that project.
- Official Valorx site: light and dark brand marks.

## User-supplied motion assets

- `691db86e3761bc2d84c3fc33_695ead0ac74a2553eaf3c718_Valorx Wave - Grid View Recording 2026-01-07 161050_mp4.mp4`: the original 1280×618 recording replaces the first large image on the case page. A frame extracted from that recording supplies its poster and social preview. Playback uses native video controls, muted looping autoplay, and inline playback. Reduced motion disables autoplay; the user can still start the video with its controls.
- `Wave-Hero-Animation.gif`: the homepage Valorx cover. An animated WebP retains the supplied animation and transparency while reducing the transfer size. A static first-frame preview is used for reduced motion and social metadata.

Both files were supplied from the user's Downloads folder on 17 November 2026. The website serves local assets and does not depend on those original filesystem paths.

## Official product context and screenshots

The extended narrative uses the official [Wave](https://docs.valorx.com/valorx-wave) and [Fusion](https://docs.valorx.com/valorx-fusion) documentation for product context. Individual contributions remain grounded in the local archive above.

Nine static screenshots come from public documentation. For tutorial GIFs, an existing frame was extracted without changing the interface. The page credits the documentation beside each screenshot and links the screenshot to a full-resolution image. These are public product illustrations, not a claim that Alex designed every part of the depicted interface or its current release.

- [Grid Wizard](https://docs.valorx.com/valorx-wave/wave-experience/create-a-new-grid/grid-wizard-in-salesforce): related-list configuration and preview.
- [Surf the Wave in Salesforce](https://docs.valorx.com/valorx-wave/surf-the-wave/surf-the-wave-in-salesforce): grid runtime and personal-view context.
- [Column Grouping](https://docs.valorx.com/valorx-wave/wave-data-management/managing-grid-data/column-group): multiple column groups.
- [Data Control and Customization](https://docs.valorx.com/valorx-wave/wave-data-management/data-control-and-customization): the product's formula-field editor. It illustrates the editing context rather than every later helper/template design from the archive.
- [Backup and Restore](https://docs.valorx.com/valorx-wave/wave-admin-and-control/backup-and-restore): duplicate-handling decisions and restore results. The shown success result illustrates one recovery state; it is not presented as the partial-recovery design itself.
- [Matrix Configuration](https://docs.valorx.com/valorx-wave/matrix/matrix-configuration): two-level axes and timeline/historical options.
- [Fusion State Management](https://docs.valorx.com/valorx-fusion/design-studio/tasks/state-management): Map rules and conditional locking.

`valorx-media.json` records each original asset URL, documentation page, extracted frame, and image dimensions. Local originals are in `src/assets/case-studies/valorx/`; Astro generates responsive WebP versions during the build. Screenshots retain the product's original colors while the portfolio interface uses the shared Radix Gray theme.

## Editorial boundaries

- The period describes the documented work, not the age or entire delivery timeline of Valorx.
- The case presents qualitative design outcomes. The archive does not establish conversion, productivity, revenue, or time-to-market metrics.
- Existing product and design-system foundations are credited as existing. The case does not claim ownership of another designer's header, Grid Picker, or complete product redesign.
- Partial approvals and completed design tasks are not presented as proof that every product or feature shipped. The outcome copy focuses on the delivered design flows and components.
- The ten-copy maximum and the Copy 2 / Copy 11 example are product requirements from the archive, not invented performance statistics.
- Private correspondence, internal ticket links, access details, and source-message identifiers are not exposed in the public page.
