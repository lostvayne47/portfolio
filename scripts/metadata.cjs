const fs = require("fs");
// Vercel supplies the production hostname; an explicit URL takes precedence for custom domains.
const configured =
  process.env.REACT_APP_SITE_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.VERCEL_URL;
if (configured) {
  const origin = new URL(
    configured.includes("://") ? configured : `https://${configured}`,
  ).origin;
  if (!origin.startsWith("https://"))
    throw new Error("Production site URL must use HTTPS.");
  const escape = (value) =>
    value
      .replaceAll("&", "&amp;")
      .replaceAll('"', "&quot;")
      .replaceAll("<", "&lt;");
  const url = escape(origin + "/");
  let html = fs.readFileSync("build/index.html", "utf8");
  html = html.replaceAll(
    'content="/social-preview.png"',
    `content="${escape(origin)}/social-preview.png"`,
  );
  html = html.replace(
    "</head>",
    `<link rel="canonical" href="${url}"/><meta property="og:url" content="${url}"/></head>`,
  );
  fs.writeFileSync("build/index.html", html);
  fs.writeFileSync(
    "build/sitemap.xml",
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${url}</loc></url></urlset>`,
  );
  fs.writeFileSync(
    "build/robots.txt",
    `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`,
  );
  console.log("Generated canonical metadata and sitemap for " + origin);
} else {
  console.log(
    "Local build: domain-specific metadata is generated when a deployment hostname is available.",
  );
}
