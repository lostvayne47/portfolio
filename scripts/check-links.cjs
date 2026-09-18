const fs = require("fs");
const projects = require("../src/data/projects.json");
const certificates = require("../src/data/certificates.json");
const profile = require("../src/data/profile.json");
const profileUrls = Object.values(profile).filter(
  (value) => typeof value === "string" && value.startsWith("https://"),
);
const urls = [
  ...new Set([
    ...projects.map((r) => r.url),
    ...projects.map((r) => r.demo).filter(Boolean),
    ...certificates.map((c) => c.link).filter(Boolean),
    ...profileUrls,
  ]),
];
(async () => {
  const results = [];
  for (let i = 0; i < urls.length; i += 8) {
    results.push(
      ...(await Promise.all(
        urls.slice(i, i + 8).map(async (url) => {
          try {
            const r = await fetch(url, { signal: AbortSignal.timeout(20000) });
            await r.body?.cancel();
            return { url, status: r.status };
          } catch (e) {
            return { url, error: e.message };
          }
        }),
      )),
    );
  }
  fs.writeFileSync("docs/link-check.json", JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results, null, 2));
})();
