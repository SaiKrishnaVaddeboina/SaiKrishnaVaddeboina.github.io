# Sai Krishna Vaddeboina — Portfolio

A modern, professional portfolio website built from scratch with vanilla HTML/CSS/JS.

## Files

- `index.html` — Single-page portfolio (Hero · About · Skills · Projects · Education · Contact)
- `mbta-fraud-detection.html` — Featured project case study (MBTA Capstone)
- `styles.css` — Custom design system with dark/light theme support
- `case-study.css` — Additional styles for case study sub-pages
- `script.js` — Nav scroll state, theme toggle, scroll reveals, parallax
- `Sai_Krishna_Vaddeboina_Resume.pdf` — Linked from the "Download Resume" button

## Run locally

Just open `index.html` in any browser, or serve it:

```bash
cd /Users/saikrishnav/Downloads/portfolio
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy (free hosting)

### Option 1 — GitHub Pages (recommended)
1. Create a new public GitHub repo named `saikrishna-portfolio` (or `<your-username>.github.io` for a root-domain site)
2. Push these files to the repo
3. In repo Settings → Pages → Source = `main` branch, `/ (root)` folder
4. Live at `https://<your-username>.github.io/saikrishna-portfolio/`

### Option 2 — Netlify (drag-and-drop)
1. Go to https://app.netlify.com/drop
2. Drag the `portfolio` folder onto the page
3. Done — you get a `*.netlify.app` URL instantly. You can later add a custom domain.

### Option 3 — Vercel
1. `npm i -g vercel` then `vercel` from this folder
2. Follow prompts; live in ~30 seconds

## Customize

- **Add LinkedIn / GitHub links:** in `index.html`, search for `linkedin.com/` and `github.com/` and replace with your real profile URLs.
- **Change accent color:** in `styles.css`, edit `--accent` and `--accent-2` at the top of `:root`.
- **Add a project:** copy any `<article class="project-card">` block in `index.html` and edit.
- **Update stats:** in the hero `.hero-stats` block in `index.html`.

## Recommended next steps

1. Replace the placeholder LinkedIn/GitHub URLs with your real profiles.
2. Add screenshots/dashboards for each project (drop images in this folder, reference from project cards).
3. Push to GitHub, deploy to Netlify or GitHub Pages, then add the live URL to your resume.
4. Consider buying a domain like `saikrishna.dev` or `vaddeboina.com` (~$12/year on Namecheap or Cloudflare) — looks much more professional than `*.netlify.app`.
