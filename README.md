# TOKYO MEDI

Rebuilt from a clean repository tree on 2026-09-22.

TOKYO MEDI is a 20-language Japanese medicine reference, medical guide and medical-travel navigation site. Core navigation and safety copy are AI-translated and committed in the repository; no browser/system auto-translation layer is used. Prescription medicine content is reference-only and intentionally separated from ecommerce purchase flows.

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

## Quality check
`npm test`

## Local preview
`npm run dev` (uses a local origin so HTTPS redirects do not loop in Wrangler)

## Deploy
`npm run deploy`
