# Darwin Engineering — Industrial & Manufacturing Landing

Plain static HTML/CSS/JS export of the landing page design. No build step — deploy as-is to Netlify (drag the folder into Netlify, or `netlify deploy`), or open `index.html` directly.

## Files
- `index.html` — full page markup
- `styles.css` — design tokens (colors, type, radii, shadows) + component styles
- `script.js` — job-search filter wiring (stub — logs selections, no live results yet)
- `assets/` — logo lockups (color + white)

## Design tokens
Colors, fonts (Poppins display / Barlow body / JetBrains Mono), spacing, radii and shadows are all CSS custom properties at the top of `styles.css` — edit there to restyle globally.

## Known gaps to build out in Claude Code
- Hero video, worker image, brand video, and client logos are placeholder blocks (`.media-placeholder` / grey boxes) — swap in real media.
- Job search form is static markup; `script.js` only logs the selected filters — wire to a real search/results view.
- Nav links and "Contact Us"/"Learn More" buttons have no destinations yet.
