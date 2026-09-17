const fs = require("fs");
const path = require("path");
const dataRoot = path.resolve(__dirname, "../src/data");
const publicRoot = path.resolve(__dirname, "../public");
const load = (name) =>
  JSON.parse(fs.readFileSync(path.join(dataRoot, name + ".json"), "utf8"));
const errors = [];
const check = (condition, message) => {
  if (!condition) errors.push(message);
};
const text = (value) => typeof value === "string" && value.trim().length > 0;
const url = (value) => {
  try {
    return new URL(value).protocol === "https:";
  } catch {
    return false;
  }
};
const asset = (value) =>
  typeof value === "string" &&
  value.startsWith("/") &&
  fs.existsSync(path.join(publicRoot, value));
const list = (value) => Array.isArray(value) && value.every(text);
const unique = (items, key, label) =>
  check(
    new Set(items.map((item) => item[key])).size === items.length,
    label + ": each " + key + " must be unique.",
  );
try {
  const profile = load("profile"),
    site = load("site"),
    projects = load("projects"),
    experience = load("experience"),
    certificates = load("certificates"),
    skills = load("skills");
  for (const key of [
    "name",
    "shortName",
    "initials",
    "role",
    "tagline",
    "phone",
    "personalNote",
  ])
    check(text(profile[key]), "profile.json: missing " + key);
  check(
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email),
    "profile.json: email must be valid.",
  );
  for (const key of ["github", "linkedin", "leetcode", "resume"])
    check(url(profile[key]), "profile.json: " + key + " must be an HTTPS URL.");
  check(
    asset(profile.portrait),
    "profile.json: portrait must point to a file in public/.",
  );
  check(
    list(profile.about),
    "profile.json: about must be an array of paragraphs.",
  );
  unique(projects, "slug", "projects.json");
  unique(experience, "id", "experience.json");
  unique(certificates, "id", "certificates.json");
  unique(site.projectFilters, "id", "site.json projectFilters");
  const filterIds = site.projectFilters.map((filter) => filter.id);
  check(
    filterIds.includes("all"),
    "site.json: projectFilters must include all.",
  );
  for (const p of projects) {
    const label = "projects.json [" + p.slug + "]: ";
    for (const field of ["slug", "title", "description"])
      check(text(p[field]), label + "missing " + field);
    check(url(p.url), label + "url must use HTTPS.");
    check(!p.demo || url(p.demo), label + "demo must be empty or HTTPS.");
    check(list(p.stack), label + "stack must be an array of technology names.");
    check(
      Array.isArray(p.groups) && p.groups.every((g) => filterIds.includes(g)),
      label + "groups must match projectFilters IDs.",
    );
    if (p.featured) {
      for (const field of ["category", "contribution", "status"])
        check(text(p[field]), label + "featured projects require " + field);
      check(
        ["graph", "network", "dashboard", "warranty"].includes(p.kind),
        label + "kind must be graph, network, dashboard or warranty.",
      );
    }
  }
  check(
    experience.filter((e) => e.current).length <= 1,
    "experience.json: only one role may be current.",
  );
  for (const e of experience) {
    const label = "experience.json [" + e.id + "]: ";
    check(
      ["work", "education"].includes(e.type),
      label + "type must be work or education.",
    );
    check(
      list(e.points) && e.points.length > 0,
      label + "points must contain text.",
    );
    for (const key of ["designation", "location", "date"])
      check(text(e[key]), label + "missing " + key);
    if (e.type === "work") {
      check(text(e.company), label + "missing company.");
      check(
        Number.isInteger(e.previewCount) && e.previewCount > 0,
        label + "previewCount must be a positive integer.",
      );
      check(list(e.stack), label + "stack must be an array.");
    }
  }
  for (const c of certificates) {
    check(
      text(c.name) && text(c.caption),
      "certificates.json [" + c.id + "]: name and caption are required.",
    );
    check(
      asset(c.image),
      "certificates.json [" + c.id + "]: image file not found in public/.",
    );
    check(
      !c.link || url(c.link),
      "certificates.json [" + c.id + "]: link must be empty or HTTPS.",
    );
  }
  const skillIcons = [
    "server",
    "code",
    "database",
    "cloud",
    "network",
    "terminal",
  ];
  for (const group of skills) {
    check(
      text(group.title) && text(group.note) && list(group.items),
      "skills.json: groups require title, note, and items.",
    );
    check(
      skillIcons.includes(group.icon),
      "skills.json: unknown icon " + group.icon,
    );
  }
  for (const nav of site.navigation)
    check(
      [
        "projects",
        "experience",
        "skills",
        "about",
        "contact",
        "certifications",
      ].includes(nav.id),
      "site.json: unknown navigation section " + nav.id,
    );
  for (const key of ["projects", "experience", "skills", "about"])
    check(
      text(site.sections[key]?.title),
      "site.json: missing section title " + key,
    );
  check(
    list(site.hero.headline) && text(site.hero.highlight),
    "site.json: hero headline and highlight are required.",
  );
  check(
    text(site.seo?.titleSuffix) && text(site.seo?.description),
    "site.json: SEO titleSuffix and description are required.",
  );
  for (const step of site.diagram.steps)
    check(
      ["radio", "braces", "database", "cloud", "cpu"].includes(step.icon),
      "site.json: unknown diagram icon " + step.icon,
    );
  unique(site.diagram.steps, "id", "site.json diagram");
  for (const metric of site.impact.items)
    check(
      text(metric.value) && text(metric.label),
      "site.json: metrics require value and label.",
    );
} catch (error) {
  errors.push(error.message);
}
if (errors.length) {
  console.error(
    "Content needs attention:\n" + errors.map((e) => " - " + e).join("\n"),
  );
  process.exitCode = 1;
} else
  console.log(
    "Portfolio content is valid: links, assets, featured items, IDs, and section references checked.",
  );
