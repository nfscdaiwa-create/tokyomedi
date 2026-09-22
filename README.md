# TOKYO MEDI

Rebuilt from a clean repository tree on 2026-09-22.

TOKYO MEDI is a multilingual Japanese medicine reference, medical guide and medical-travel navigation site. Prescription medicine content is reference-only and intentionally separated from ecommerce purchase flows.

## Routes
- `/zh-hans`, `/en`, `/ja`
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
