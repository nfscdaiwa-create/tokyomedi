# Visual redesign decision record — 2026-09-23

## Brief

The previous site had verified product photos and useful content, but the visual presentation still felt sparse. The owner asked to inspect every page and improve the exterior. The selected direction is a warm Japanese medical editorial style: restrained colors, product photography, clear information hierarchy, and no invented clinical authority.

## Findings and decisions

| Page type | Earlier friction | Change |
|---|---|---|
| Home | A generic laboratory photo dominated the first screen; medicine records were far below it. | Put three real medicine photos and their record links in the hero. Keep search and the five primary routes visible. |
| Medicine catalogue | Large pale banner and narrow product photos made browsing slow. | Compact the trust summary, enlarge photos, use clear treatment labels and plain-language uses, and make selected filters visible. |
| Medicine record | The product photo was too small beside a large title. | Show a larger product image with source credit and make the primary use and official records easy to scan. |
| Health catalogue / record | Cards and details used small type and product imagery. | Use larger photos, stronger titles and a distinct food-category presentation. |
| Guides | The index resembled a list of thin rules. | Use readable editorial cards; widen article type and emphasize the official-source panel. |
| Medical travel | Hospitals were divided by hairlines and had small text. | Use separate hospital cards with prominent intake routes and clear active filters. |
| Sources / about | Policy text and organization scope appeared as sparse rows. | Use a source hierarchy and compact explanatory cards. |
| Institutional inquiry | Form labels and fields were small. | Increase field and notice readability while keeping the existing email workflow. |

## Constraints and evidence

- Product images remain the previously verified assets and continue to show attribution where required. No fabricated medicine packaging or clinical credential was introduced.
- The site remains information-oriented. Prescription medicines do not gain a purchase action.
- The first mobile review exposed a clipped horizontal navigation pattern and a travel filter with invisible active text. Navigation now shows all six routes; the active filter has an explicit dark background and white text.
- Mobile layout was rendered in Chromium at 320 and 390 CSS pixels; tablet at 768 and desktop at 1280. The root document width equaled the viewport on the sampled page types. The medicine filter row intentionally scrolls within its own container at narrow widths.
- `npm test` passes across localized routes and content checks; `wrangler deploy --dry-run` bundles successfully.

## Remaining design debt

The base stylesheet predates this redesign. `src/styles-v2.js` carries page-specific overrides while existing components are reused. A later refactor can consolidate selectors, with screenshots and viewport checks as acceptance evidence. That refactor is separate from this visual release.
