# Portfolio

Aayush Kamtikar’s portfolio, built with React 19, the existing Create React App pipeline, Lucide icons, and CSS. No browser-side API requests, access tokens, remote fonts, or UI framework styles are required.

## Development

- `npm ci`: install locked dependencies.
- `npm start`: development server.
- `npm run lint`: React ESLint checks, with zero warnings allowed.
- `npm run build`: production build plus deployment metadata generation.
- `npm run preview`: serve the production build at http://127.0.0.1:4173.

Use `npm.cmd` on Windows if PowerShell script execution is disabled.

## Content

See [the editing guide](docs/EDITING.md) for field-by-field instructions. All personal content lives in `src/data/*.json`: profile, site copy, projects, experience, skills, and certificates. No component changes are needed for routine updates. `npm run check-content` validates edits, and runs automatically before builds. Page titles and SEO descriptions sync from profile/site data.

Dark theme and typography tokens live at the top of `src/index.css`; decorative motion lives in `src/styles/motion.css`. The code mapper README describes LLM summaries as future work; Niagara MCP is a proof of concept. Preserve those distinctions when editing copy.

## Vercel

Keep the Create React App preset, `npm run build`, and `build` output directory. `vercel.json` preserves the four original deep links, which forward to their corresponding sections. The old Netlify homepage setting was removed so assets resolve on the current host. The existing Netlify fallback remains.

Vercel’s `VERCEL_PROJECT_PRODUCTION_URL` supplies the production hostname. For a custom domain, set `REACT_APP_SITE_URL` to its HTTPS origin. `scripts/metadata.cjs` writes absolute social image URLs, canonical/OpenGraph URLs, a sitemap, and the robots sitemap reference. Local builds omit domain-specific metadata rather than inventing a production URL.

The old GitHub environment variables are no longer read. Remove unused deployment secrets; if a prior client bundle contained a real PAT, revoke that old token in GitHub.

## Validation

See `docs/audit.md`, `docs/browser-check.json`, and `docs/link-check.json`. HTTP success confirms reachability, not every remote app’s backend behavior. Some third parties block automated requests.

Browser checks use Playwright and axe, installed outside the app. Install `playwright` and `@axe-core/playwright` in a tools directory and set `PORTFOLIO_QA_DEPS` to its node_modules. Run `node scripts/browser-check.cjs` while preview is running. The script defaults to the temporary validation directory and Windows Chrome; `CHROME_PATH` overrides the browser location. It checks five viewport sizes, accessibility, navigation, filters, disclosures, legacy routes, reduced motion, images, and console errors. Screenshots/results are saved under `docs/`.

`node scripts/check-links.cjs` rechecks all published external destinations.
