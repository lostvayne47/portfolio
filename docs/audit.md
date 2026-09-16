# Repository audit and content decisions

## Existing application

React 19/react-scripts 5 with home, projects, experience, skills, and certifications routes. No tracked Vercel configuration; Netlify homepage and fallback were present. Styling combined Bootstrap CDN, CSS, Sass themes, and Framer Motion. Unused particle code rendered 500 particles; multiple components imported the entire asset directory.

Projects used the public GitHub account endpoint and per-repository language requests with a browser-side PAT. The context did not provide the loading state expected by the project screen. Contacts used icon click handlers; the LeetCode handler was incomplete.

## Preserved information

All three employment records and every recorded accomplishment remain. Leading Honeywell outcomes are the original 37% improvement, 200+ devices secured, and 1,000+ history/alarm events. Additional concurrency, $200/user licensing impact, ~20% efficiency, Docker, CI/CD, and protocol details are in expandable role descriptions.

All three education records remain, including CGPA, school percentages/ranking, and football participation. All 20 credentials and awards retain original verification URLs and optimized local certificate copies. GitHub, LinkedIn, LeetCode, email, phone, and the original resume export are retained, along with personal interests and Winter’s name.

Existing skills are reorganized into six categories; project technologies are grounded in project sources. Original images are retained; only the optimized portrait is imported into the app. Fresh project diagrams are labeled conceptual rather than passed off as screenshots.

## Project audit

Inspected every current public repository and README through the same GitHub endpoint the original application used. The checked-in test.json was an older 13-project response. Nineteen current software projects are now local data. The portfolio and profile README repository are excluded from project cards. The older News-Website entry is absent from the current public endpoint and was not republished as a potentially broken link.

Featured projects: AI Code Dependency Mapper, Family Expense Tracker, Niagara MCP, and Warranty Tracker. The archive preserves the other current projects including inventory, gestures, notes, Java/Android, C++, data analysis, animation, and web work.

AI accuracy: the mapper description claimed LLM APIs, but its README explicitly describes current deterministic local summaries and future OpenAI summaries. Copy follows that more specific implementation description. Niagara MCP is labeled a proof of concept. No production LLM or AI research claim was invented.

Cloud accuracy: AWS/Azure were existing skills; Docker/CI/CD are supported by employment details. No unsupported cloud architecture was attributed to projects.

## Implementation

A continuous page, ivory/forest palette, system diagram, production metrics, project visuals, and professional timeline replace the old presentation. Native links, buttons, disclosures, visible focus, skip navigation, responsive layout, and reduced-motion support replace animation dependencies.

The original CRA build contract remains intact. Removed unused packages and obsolete components, eliminated token usage, and repaired the malformed HTML head. Deployment metadata derives from hosting environment variables instead of a guessed domain.
