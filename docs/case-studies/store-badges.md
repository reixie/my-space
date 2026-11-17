# Official download badges

The ROXFIT case uses the original English store artwork as local SVG images. The badges link directly to the app URLs supplied by Alex.

| Badge | Local asset | Official source |
| --- | --- | --- |
| Download on the App Store | `src/assets/store-badges/app-store.svg` | [Apple badge asset](https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg) |
| Get it on Google Play | `src/assets/store-badges/google-play.svg` | [Google Play Partner Marketing Hub](https://partnermarketinghub.withgoogle.com/brands/google-play/google-play/lockups-icons-badges/) |

The Google SVG was extracted from the official downloadable `Google Play Badge guidelines` archive, entry `Get it on Google Play Badges/Digital/svg/GetItOnGooglePlay_Badge_Web_color_English.svg`. The source assets were retrieved on 17 November 2026. Temporary signed archive URLs are not embedded in the website or stored as permanent source links.

`StoreBadges.astro` preserves the artwork, colors, and aspect ratios. It renders the badges at 40px high, with the App Store first, a 20px gap, native external-link semantics, accessible image labels, and keyboard focus. The badges keep their original appearance in both system themes. The component wraps at small widths without changing the artwork.

References: [Apple marketing guidelines](https://developer.apple.com/app-store/marketing/guidelines/) and [Google Play badge guidelines](https://partnermarketinghub.withgoogle.com/brands/google-play/google-play/lockups-icons-badges/).
