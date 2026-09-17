const path = require("path"),
  fs = require("fs"),
  assert = require("assert");
const deps =
  process.env.PORTFOLIO_QA_DEPS ||
  path.join(process.env.TEMP, "portfolio-validation/node_modules");
const { chromium } = require(path.join(deps, "playwright"));
(async () => {
  const browser = await chromium.launch({
    executablePath:
      process.env.CHROME_PATH ||
      "C:/Program Files/Google/Chrome/Application/chrome.exe",
  });
  try {
    const page = await browser.newPage({
      viewport: { width: 1440, height: 1000 },
    });
    await page.goto("http://127.0.0.1:4173", { waitUntil: "networkidle" });
    const card = page.locator(".project-card").first();
    await card.scrollIntoViewIfNeeded();
    await card.evaluate(async (element) => {
      await Promise.all(element.getAnimations().map((a) => a.finished));
    });
    await page.mouse.move(0, 0);
    const initial = await card.evaluate((e) => getComputedStyle(e).borderColor);
    await card.hover();
    await page.waitForFunction(
      () =>
        getComputedStyle(document.querySelector(".project-card"))
          .borderColor === "rgb(182, 242, 104)",
    );
    const hover = await card.evaluate((e) => ({
      border: getComputedStyle(e).borderColor,
      transform: getComputedStyle(e).transform,
    }));
    assert.notEqual(hover.border, initial);
    assert.notEqual(hover.transform, "none");
    assert(await card.evaluate((e) => e.classList.contains("reveal-in")));
    await page.emulateMedia({ reducedMotion: "reduce" });
    const reduced = await card.evaluate((e) => ({
      animation: getComputedStyle(e).animationName,
      transform: getComputedStyle(e).transform,
      scroll: getComputedStyle(document.documentElement).scrollBehavior,
    }));
    assert.equal(reduced.animation, "none");
    assert.equal(reduced.transform, "none");
    assert.equal(reduced.scroll, "auto");
    await page.setViewportSize({ width: 390, height: 900 });
    const fontSize = await page
      .locator(".project-description")
      .first()
      .evaluate((e) => parseFloat(getComputedStyle(e).fontSize));
    assert(fontSize >= 16);
    const menu = page.getByRole("button", { name: "Open navigation" });
    await menu.click();
    await page.keyboard.press("Escape");
    assert.equal(await menu.getAttribute("aria-expanded"), "false");
    assert(await menu.evaluate((e) => e === document.activeElement));
    fs.writeFileSync(
      "docs/interaction-check.json",
      JSON.stringify(
        {
          hover,
          reduced,
          mobileBodyFontSize: fontSize,
          entrances: "Triggered on scroll",
          keyboard: "Escape closes mobile navigation and returns focus",
        },
        null,
        2,
      ),
    );
    console.log(
      "Passed: hover emphasis and lift, entrance trigger, reduced motion, mobile body text, and keyboard navigation.",
    );
  } finally {
    await browser.close();
  }
})().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
