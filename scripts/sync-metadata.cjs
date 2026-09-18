const fs = require("fs");
const path = require("path");
const profile = require("../src/data/profile.json");
const site = require("../src/data/site.json");
const escape = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
const file = path.resolve(__dirname, "../public/index.html");
let html = fs.readFileSync(file, "utf8");
const title = escape(profile.name + " | " + site.seo.titleSuffix);
const description = escape(profile.name + " — " + site.seo.description);
html = html.replace(
  /<title>[\s\S]*?<\/title>/,
  () => "<title>" + title + "</title>",
);
for (const key of ["description", "og:description", "twitter:description"])
  html = html.replace(
    new RegExp(
      '(<meta\\s+(?:name|property)="' + key + '"\\s+content=")[^"]*',
      "g",
    ),
    () =>
      "<meta " +
      (key.startsWith("og:") ? "property" : "name") +
      '="' +
      key +
      '" content="' +
      description,
  );
for (const key of ["og:title", "twitter:title"])
  html = html.replace(
    new RegExp(
      '(<meta\\s+(?:name|property)="' + key + '"\\s+content=")[^"]*',
      "g",
    ),
    () =>
      "<meta " +
      (key.startsWith("og:") ? "property" : "name") +
      '="' +
      key +
      '" content="' +
      title,
  );
html = html.replace(
  /(<meta\s+property="og:image:alt"\s+content=")[^"]*/,
  (_, prefix) =>
    prefix +
    escape(
      profile.name +
        " — " +
        site.hero.headline.join(" ") +
        " " +
        site.hero.highlight,
    ),
);
html = html.replace(/(<meta name="theme-color" content=")[^"]*/, "$1#0b1018");
html = html.replace(
  /<noscript\b[^>]*>[\s\S]*?<\/noscript\s*>/,
  () =>
    "<noscript>" +
    description +
    " Contact: " +
    escape(profile.email) +
    ". Enable JavaScript to explore projects and experience.</noscript>",
);
fs.writeFileSync(file, html);
console.log("Page title and social descriptions synchronized from src/data/.");
