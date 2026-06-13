import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const htmlFiles = ["index.html", "resilience.html", "manifesto.html", "join.html"];
const siteBaseUrl = "https://nvd20260611.github.io/NVD-Association/";
const requiredMeta = [
  { label: "description", pattern: /<meta\s+name="description"\s+content="[^"]+"\s*\/?>/i },
  { label: "robots", pattern: /<meta\s+name="robots"\s+content="[^"]+"\s*\/?>/i },
  { label: "theme-color", pattern: /<meta\s+name="theme-color"\s+content="#[0-9a-f]{6}"\s*\/?>/i },
  { label: "canonical", pattern: /<link\s+rel="canonical"\s+href="https:\/\/nvd20260611\.github\.io\/NVD-Association\/[^"]*"\s*\/?>/i },
  { label: "og:type", pattern: /<meta\s+property="og:type"\s+content="website"\s*\/?>/i },
  { label: "og:title", pattern: /<meta\s+property="og:title"\s+content="[^"]+"\s*\/?>/i },
  { label: "og:description", pattern: /<meta\s+property="og:description"\s+content="[^"]+"\s*\/?>/i },
  { label: "og:url", pattern: /<meta\s+property="og:url"\s+content="https:\/\/nvd20260611\.github\.io\/NVD-Association\/[^"]*"\s*\/?>/i },
  { label: "og:image", pattern: /<meta\s+property="og:image"\s+content="https:\/\/nvd20260611\.github\.io\/NVD-Association\/assets\/og-image-association\.png"\s*\/?>/i },
  { label: "twitter:card", pattern: /<meta\s+name="twitter:card"\s+content="summary_large_image"\s*\/?>/i },
  { label: "twitter:title", pattern: /<meta\s+name="twitter:title"\s+content="[^"]+"\s*\/?>/i },
  { label: "twitter:description", pattern: /<meta\s+name="twitter:description"\s+content="[^"]+"\s*\/?>/i },
  { label: "twitter:image", pattern: /<meta\s+name="twitter:image"\s+content="https:\/\/nvd20260611\.github\.io\/NVD-Association\/assets\/og-image-association\.png"\s*\/?>/i },
];

const failures = [];

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function exists(localPath) {
  return fs.existsSync(path.join(root, localPath));
}

function collectAnchors(html) {
  const anchors = new Set();
  for (const match of html.matchAll(/\sid=["']([^"']+)["']/g)) {
    anchors.add(match[1]);
  }
  return anchors;
}

function fail(file, message) {
  failures.push(`${file}: ${message}`);
}

const htmlByFile = Object.fromEntries(htmlFiles.map((file) => [file, read(file)]));
const anchorsByFile = Object.fromEntries(
  htmlFiles.map((file) => [file, collectAnchors(htmlByFile[file])]),
);

for (const file of htmlFiles) {
  const html = htmlByFile[file];

  if (!/^<!doctype html>/i.test(html.trim())) fail(file, "missing <!doctype html>");
  if (!/<html\s+lang="zh-Hant"/i.test(html)) fail(file, "missing html lang zh-Hant");
  if (!/<meta\s+charset="UTF-8"\s*\/?>/i.test(html)) fail(file, "missing UTF-8 charset");
  if (!/<meta\s+name="viewport"\s+content="width=device-width, initial-scale=1\.0"\s*\/?>/i.test(html)) {
    fail(file, "missing responsive viewport");
  }
  if (!/<title>[^<]+<\/title>/i.test(html)) fail(file, "missing title");
  if (!/Content-Security-Policy/i.test(html)) fail(file, "missing Content-Security-Policy");

  for (const meta of requiredMeta) {
    if (!meta.pattern.test(html)) fail(file, `missing ${meta.label}`);
  }

  for (const match of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    const rawUrl = match[1];
    if (/^(https?:|mailto:|tel:|data:)/i.test(rawUrl)) continue;

    if (rawUrl.startsWith("#")) {
      const hash = rawUrl.slice(1);
      if (hash && !anchorsByFile[file].has(hash)) fail(file, `missing same-page anchor ${rawUrl}`);
      continue;
    }

    const [targetWithQuery, hash] = rawUrl.split("#");
    const target = targetWithQuery.split("?")[0];
    if (!target) continue;
    if (!exists(target)) {
      fail(file, `missing local resource ${rawUrl}`);
      continue;
    }
    if (hash && htmlFiles.includes(target) && !anchorsByFile[target].has(hash)) {
      fail(file, `missing cross-page anchor ${rawUrl}`);
    }
  }
}

const robots = read("robots.txt");
if (!robots.includes(`Sitemap: ${siteBaseUrl}sitemap.xml`)) {
  fail("robots.txt", "missing sitemap location");
}

const sitemap = read("sitemap.xml");
for (const file of htmlFiles) {
  const url = file === "index.html" ? siteBaseUrl : `${siteBaseUrl}${file}`;
  if (!sitemap.includes(`<loc>${url}</loc>`)) fail("sitemap.xml", `missing ${url}`);
}

const jsCheck = spawnSync(process.execPath, ["--check", "script.js"], {
  cwd: root,
  encoding: "utf8",
});
if (jsCheck.status !== 0) {
  fail("script.js", `node --check failed\n${jsCheck.stderr.trim()}`);
}

if (failures.length > 0) {
  console.error("Site check failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Site check passed: ${htmlFiles.length} pages, local links, SEO meta, sitemap, robots, and JS syntax.`);
