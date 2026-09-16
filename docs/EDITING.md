# Updating your portfolio

Most updates only need JSON edits inside `src/data/`. You do not need to change React components.

| What you want to change | File |
| --- | --- |
| Name, role, email, phone, social links, resume, portrait, about paragraphs | `src/data/profile.json` |
| Hero headline, metrics, diagram labels, section headings, contact copy, SEO descriptions | `src/data/site.json` |
| Projects, descriptions, tech stacks, demos, featured status and filter groups | `src/data/projects.json` |
| Jobs, accomplishments, current employer, dates and education | `src/data/experience.json` |
| Skill categories and technologies | `src/data/skills.json` |
| Certificates, verification links, awards and featured status | `src/data/certificates.json` |
| Theme colors and shared text sizes | `:root` in `src/index.css` |
| Entrance and hover animations | `src/styles/motion.css` |

## Quick workflow

1. Edit the relevant JSON file. Use double quotes; no trailing commas.
2. Run `npm run check-content` (or `npm.cmd run check-content` on Windows).
3. Preview with `npm start`. Content edits update automatically. Restart the dev server after editing SEO text to refresh the HTML metadata.
4. Run `npm run build` before deploying. Content validation and metadata synchronization run automatically.

The validator checks structure, unique IDs, HTTPS URL formats, referenced image files, and supported project/skill categories. It does not contact third-party sites; `node scripts/check-links.cjs` performs that separate check.

## Add a project

Copy an existing object in `projects.json`, give it a unique `slug`, and change its text and links. Set `featured: false` to show it in the archive. To feature it, set `featured: true` and provide `category`, `contribution`, `status`, and `kind` as well.

- `groups: ["full-stack"]` puts it under Full stack.
- `groups: ["iot-ai"]` puts it under IoT & AI exploration.
- A project can belong to both groups.
- Thumbnail `kind` can be `graph`, `network`, `dashboard`, or `warranty`.
- Leave `demo` empty when no live version exists.
- Array order is display order. There is no fixed maximum number of featured projects.

Keep technical claims grounded in the actual implementation. The current code mapper has planned LLM summaries, and Niagara MCP is a proof of concept.

## Add a job or update your current employer

Copy a work record in `experience.json`. Set `company`, `location`, `designation`, `date`, `points`, `stack`, and `previewCount` (how many accomplishments are initially visible). Put the newest role first. Mark only the active role `current: true`; the hero employer updates from that record automatically. No component assumes the first job is current.

Hero metrics live in `site.json` under `impact`; update their source and values deliberately when changing the featured impact story.

Education records use `type: "education"`. Set `featured: true` on the degree you want shown first. Other education appears under Earlier education. No array indices are embedded in the UI.

## Add a certificate or award

Put an optimized image in `public/certificates/`, then add a record with a unique `id`, `name`, `caption`, `image` (for example `/certificates/my-certificate.webp`), and `link` (verification URL or empty string). Set `featured: true` to show it above the disclosure.

Add `awardGroup: "honeywell-bronze"` only for that award type. The Bronze Award count and total credential count update automatically. Featured items are selected by their flags, not hardcoded ID lists.

## Change the visual style

The root variables in `src/index.css` define background, surfaces, text, accent, borders, and shared type sizes. `--text-body` controls the standard body size; `--text-small` and `--text-label` control secondary copy. Layout-specific hero/headings have responsive sizes further down the file.

Motion is isolated in `src/styles/motion.css`; the small `useEntranceMotion` hook triggers entrances once when sections become visible. Text is never hidden waiting for JavaScript. All decorative motion is disabled when the visitor requests reduced motion, and hover effects only activate on devices with a fine pointer.

The social card has a source SVG at `docs/social-preview.svg` and a PNG delivery copy at `public/social-preview.png`. If you change its branding text, update the SVG and export a 1200 × 630 PNG. Text metadata is automatically generated from profile/site data.
