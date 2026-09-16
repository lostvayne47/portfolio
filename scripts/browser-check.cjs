const path = require("path"),
  fs = require("fs"),
  assert = require("assert");
const deps =
  process.env.PORTFOLIO_QA_DEPS ||
  path.join(process.env.TEMP, "portfolio-validation/node_modules");
const { chromium } = require(path.join(deps, "playwright"));
const { default: AxeBuilder } = require(
  path.join(deps, "@axe-core/playwright"),
);
let browser;
(async () => {
  browser = await chromium.launch({
    executablePath:
      process.env.CHROME_PATH ||
      "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: true,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text());
  });
  const results = [];
  const projects = require("../src/data/projects.json");
  const certificates = require("../src/data/certificates.json");
  for (const width of [1440, 1024, 768, 390, 320]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto("http://127.0.0.1:4173", { waitUntil: "networkidle" });
    await page.locator("h1").waitFor();
    assert.equal(await page.locator("h1").count(), 1);
    assert(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      "Horizontal overflow at " + width,
    );
    const axe = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    results.push({
      width,
      violations: axe.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        nodes: v.nodes.map((n) => ({
          target: n.target,
          summary: n.failureSummary,
        })),
      })),
    });
    if (width === 1440 || width === 390) {
      await page.locator(".about-intro img").scrollIntoViewIfNeeded();
      await page.waitForFunction(
        () => document.querySelector(".about-intro img").naturalWidth > 0,
      );
      await page.evaluate(() =>
        window.scrollTo({ top: 0, behavior: "instant" }),
      );
      await page.screenshot({
        path: `docs/portfolio-${width}.png`,
        fullPage: true,
      });
    }
  }
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Projects", exact: true })
    .click();
  assert.equal(
    await page
      .getByRole("button", { name: "Open navigation" })
      .getAttribute("aria-expanded"),
    "false",
  );
  await page.getByRole("button", { name: "Full stack", exact: true }).click();
  assert.equal(await page.locator(".project-card").count(), projects.filter(p=>p.featured && p.groups.includes("full-stack")).length);
  await page
    .getByRole("button", { name: "IoT & AI exploration", exact: true })
    .click();
  assert.equal(await page.locator(".project-card").count(), 2);
  await page.getByRole("button", { name: "All work", exact: true }).click();
  assert.equal(await page.locator(".project-card").count(), projects.filter(p=>p.featured).length);
  await page.locator(".project-archive summary").click();
  assert.equal(await page.locator(".archive-grid article").count(), projects.filter(p=>!p.featured).length);
  await page.locator(".credentials>details>summary").click();
  assert.equal(await page.locator(".credential").count(), certificates.length);
  for (const route of ["projects", "experience", "skills", "certifications"]) {
    await page.goto("http://127.0.0.1:4173/" + route);
    await page.waitForURL("**/#" + route);
    assert(await page.locator("#" + route).isVisible());
  }
  await page.goto("http://127.0.0.1:4173");
  await page.keyboard.press("Tab");
  assert.equal(await page.locator(":focus").innerText(), "Skip to content");
  await page.emulateMedia({ reducedMotion: "reduce" });
  assert.equal(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
    "auto",
  );
  for (const cert of require("../src/data/certificates.json")) {
    const response = await page.request.get(
      "http://127.0.0.1:4173" + cert.image,
    );
    assert.equal(response.status(), 200);
    assert(response.headers()["content-type"].startsWith("image/"));
  }
  const broken = await page
    .locator("img")
    .evaluateAll((imgs) =>
      imgs.filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.src),
    );
  assert.deepEqual(broken, []);
  assert.deepEqual(errors, []);
  fs.writeFileSync(
    "docs/browser-check.json",
    JSON.stringify(
      {
        results,
        errors,
        checks: [
          "responsive overflow",
          "mobile navigation",
          "project filters",
          "project archive",
          "all credentials",
          "legacy routes",
          "keyboard skip link",
          "reduced motion",
          "rendered images",
        ],
      },
      null,
      2,
    ),
  );
  console.log(JSON.stringify(results, null, 2));
  await browser.close();
  if (results.some((r) => r.violations.length)) process.exitCode = 1;
})().catch(async (e) => {
  await browser?.close();
  console.error(e);
  process.exitCode = 1;
});
