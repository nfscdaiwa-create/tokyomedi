# TOKYO MEDI

Rebuilt from a clean repository tree on 2026-09-22.

TOKYO MEDI publishes complete reference bodies in English, Japanese and Simplified Chinese. It retains 20 localized navigation entrances; the other 17 clearly disclose English reference bodies, use noindex and canonicalize to the English equivalent. Only the three complete language versions appear in hreflang and sitemap. Core navigation and safety copy use automated translation committed in the repository; no browser/system auto-translation layer is used. Prescription medicine content is reference-only and intentionally separated from ecommerce purchase flows.

## Routes
- Locales: `en`, `zh-hans`, `hi`, `es`, `ar`, `fr`, `bn`, `pt`, `id`, `ur`, `ru`, `de`, `ja`, `pcm`, `mr`, `vi`, `te`, `sw`, `ha`, `tr`
- `/:locale/medicines`
- `/:locale/medicines/:slug`
- `/:locale/guides`
- `/:locale/guides/:slug`
- `/:locale/travel`
- `/:locale/sources`
- `/:locale/about`
- `/:locale/inquiry`
- `/:locale/privacy`
- `/:locale/terms`

The www host permanently redirects to the apex host, preserving paths and queries. Pages publish Open Graph/Twitter metadata backed by the local 1200×630 branded PNG. Registered operator identity and named professional reviewer credentials must be supplied and verified before publication; the site does not invent these fields.

## Quality check
`npm test`

## Local preview
`npm run dev` (uses a local origin so HTTPS redirects do not loop in Wrangler)

## Deploy
`npm run deploy`
