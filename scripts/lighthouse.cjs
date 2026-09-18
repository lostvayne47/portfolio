const fs = require("fs"),
  path = require("path");
const { pathToFileURL } = require("url");
(async () => {
  const deps = path.join(process.env.TEMP, "portfolio-validation/node_modules");
  const { default: lighthouse } = await import(
    pathToFileURL(path.join(deps, "lighthouse/core/index.js"))
  );
  const chromeLauncher = await import(
    pathToFileURL(path.join(deps, "chrome-launcher/dist/index.js"))
  );
  const chrome = await chromeLauncher.launch({
    chromePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    chromeFlags: ["--headless", "--disable-gpu", "--no-sandbox"],
  });
  try {
    const result = await lighthouse("http://127.0.0.1:4173", {
      port: chrome.port,
      output: "json",
      onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
    });
    const summary = {
      mode: "Lighthouse simulated mobile, local production preview",
      scores: Object.fromEntries(
        Object.entries(result.lhr.categories).map(([k, v]) => [
          k,
          Math.round(v.score * 100),
        ]),
      ),
      metrics: Object.fromEntries(
        [
          "first-contentful-paint",
          "largest-contentful-paint",
          "cumulative-layout-shift",
          "total-blocking-time",
        ].map((k) => [k, result.lhr.audits[k].displayValue]),
      ),
      findings: Object.values(result.lhr.audits)
        .filter((a) => a.score !== null && a.score < 1)
        .map((a) => ({
          id: a.id,
          title: a.title,
          score: a.score,
          description: a.description,
          details: a.details,
        })),
    };
    fs.writeFileSync("docs/lighthouse.json", JSON.stringify(summary, null, 2));
    console.log(
      JSON.stringify(
        {
          scores: summary.scores,
          metrics: summary.metrics,
          findings: summary.findings.map((f) => ({ id: f.id, title: f.title })),
        },
        null,
        2,
      ),
    );
  } finally {
    await chrome.kill();
  }
})().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
