# Sai Krishna Vaddeboina — Portfolio (ARCHIVED)

> **⚠️ This portfolio has been superseded by the v2 build at https://saikrishnavaddeboina.vercel.app**
>
> All HTML pages in this repo now redirect to their equivalents on the new site.
> The canonical portfolio for Sai Krishna Vaddeboina is hosted on Vercel.

## What happened

This was the first version of the portfolio — vanilla HTML/CSS/JS, served from GitHub Pages.
A second version was built with Astro + Tailwind and deployed to Vercel with a more refined
bento-grid design. To consolidate the brand under a single canonical URL (better SEO, easier
to maintain), every page in this repo now serves an HTML redirect to the new site:

| Old URL | Redirects to |
|---|---|
| `saikrishnavaddeboina.github.io/` | `saikrishnavaddeboina.vercel.app/` |
| `saikrishnavaddeboina.github.io/mbta-fraud-detection.html` | `saikrishnavaddeboina.vercel.app/mbta-fraud-detection` |
| `saikrishnavaddeboina.github.io/blockchain-property.html` | `saikrishnavaddeboina.vercel.app/#work` |
| `saikrishnavaddeboina.github.io/depression-risk-ml.html` | `saikrishnavaddeboina.vercel.app/#work` |

Static assets (resume PDF, profile photos) remain accessible at their original URLs in case
external sites have linked to them.

## Resurrecting this version

If you ever want to bring this design back, the git history holds the original HTML/CSS/JS.
Run `git log --oneline` and check out an earlier commit, or open the source files (still in
this repo before the redirect commit).
