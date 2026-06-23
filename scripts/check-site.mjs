import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const htmlFiles = [
  "index.html",
  "about.html",
  "report.html",
  "privacy.html",
  "terms.html",
  "join.html",
  "manifesto.html",
  "resilience.html",
];
const sitemapFiles = [
  "index.html",
  "about.html",
  "report.html",
  "privacy.html",
  "terms.html",
  "join.html",
];
const legacyRedirectFiles = ["manifesto.html", "resilience.html"];
const navbarLinks = [
  "index.html",
  "about.html",
  "report.html",
  "join.html",
  "report.html#dashboard",
];
const footerLinks = ["privacy.html", "terms.html", "report.html#loop"];
const forbiddenWords = [
  "痛點",
  "生態",
  "賽道",
  "打造",
  "落地",
  "賦能",
  "閉環",
  "信息",
  "視頻",
  "質量",
  "渠道",
  "用戶",
  "場景",
  "數據",
];
const siteBaseUrl = "https://nvd20260611.github.io/NVD-Association/";
const ogImagePath = "assets/og-image-association-20260614.png";
const ogImageUrl = `${siteBaseUrl}${ogImagePath}`;
const requiredMeta = [
  { label: "description", pattern: /<meta\s+name="description"\s+content="[^"]+"\s*\/?>/i },
  { label: "robots", pattern: /<meta\s+name="robots"\s+content="[^"]+"\s*\/?>/i },
  { label: "theme-color", pattern: /<meta\s+name="theme-color"\s+content="#[0-9a-f]{6}"\s*\/?>/i },
  { label: "canonical", pattern: /<link\s+rel="canonical"\s+href="https:\/\/nvd20260611\.github\.io\/NVD-Association\/[^"]*"\s*\/?>/i },
  { label: "og:type", pattern: /<meta\s+property="og:type"\s+content="website"\s*\/?>/i },
  { label: "og:title", pattern: /<meta\s+property="og:title"\s+content="[^"]+"\s*\/?>/i },
  { label: "og:description", pattern: /<meta\s+property="og:description"\s+content="[^"]+"\s*\/?>/i },
  { label: "og:url", pattern: /<meta\s+property="og:url"\s+content="https:\/\/nvd20260611\.github\.io\/NVD-Association\/[^"]*"\s*\/?>/i },
  { label: "og:image", pattern: new RegExp(`<meta\\s+property="og:image"\\s+content="${ogImageUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"\\s*\\/?>`, "i") },
  { label: "og:image:secure_url", pattern: new RegExp(`<meta\\s+property="og:image:secure_url"\\s+content="${ogImageUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"\\s*\\/?>`, "i") },
  { label: "twitter:card", pattern: /<meta\s+name="twitter:card"\s+content="summary_large_image"\s*\/?>/i },
  { label: "twitter:title", pattern: /<meta\s+name="twitter:title"\s+content="[^"]+"\s*\/?>/i },
  { label: "twitter:description", pattern: /<meta\s+name="twitter:description"\s+content="[^"]+"\s*\/?>/i },
  { label: "twitter:image", pattern: new RegExp(`<meta\\s+name="twitter:image"\\s+content="${ogImageUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"\\s*\\/?>`, "i") },
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

function collectHrefs(html) {
  return new Set(
    [...html.matchAll(/<a\b[^>]*\shref=["']([^"']+)["'][^>]*>/gi)].map(
      (match) => match[1],
    ),
  );
}

function extractElement(html, tagName) {
  return (
    html.match(new RegExp(`<${tagName}\\b[\\s\\S]*?<\\/${tagName}>`, "i"))?.[0] || ""
  );
}

function extractRoleNote(html) {
  return html.match(/<([a-z][\w-]*)\b[^>]*\srole=["']note["'][^>]*>[\s\S]*?<\/\1>/i)?.[0] || "";
}

function visibleText(html) {
  return html
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function collectJavaScriptStrings(source) {
  const patterns = [
    /"(?:\\.|[^"\\\r\n])*"/g,
    /'(?:\\.|[^'\\\r\n])*'/g,
    /`(?:\\.|[^`\\])*`/g,
  ];

  return patterns
    .flatMap((pattern) => [...source.matchAll(pattern)].map((match) => match[0]))
    .map((value) => value.slice(1, -1))
    .join("\n");
}

function fail(file, message) {
  failures.push(`${file}: ${message}`);
}

const htmlByFile = Object.fromEntries(htmlFiles.map((file) => [file, read(file)]));
const script = read("script.js");
const anchorsByFile = Object.fromEntries(
  htmlFiles.map((file) => [file, collectAnchors(htmlByFile[file])]),
);

for (const file of htmlFiles) {
  const html = htmlByFile[file];
  const h1Count = (html.match(/<h1\b/gi) || []).length;

  if (h1Count !== 1) fail(file, `must contain exactly one H1; found ${h1Count}`);
  if (/href\s*=\s*["']#["']/i.test(html)) fail(file, 'contains forbidden href="#"');

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

  const header = extractElement(html, "header");
  const footer = extractElement(html, "footer");
  const headerHrefs = collectHrefs(header);
  const footerHrefs = collectHrefs(footer);

  for (const href of navbarLinks) {
    if (!headerHrefs.has(href)) fail(file, `Navbar missing ${href}`);
  }
  for (const href of footerLinks) {
    if (!footerHrefs.has(href)) fail(file, `Footer missing ${href}`);
  }

  for (const match of html.matchAll(/<a\b[^>]*\starget=["']_blank["'][^>]*>/gi)) {
    const tag = match[0];
    const rel = tag.match(/\srel=["']([^"']+)["']/i)?.[1] || "";
    const relValues = new Set(rel.toLowerCase().split(/\s+/).filter(Boolean));
    if (!relValues.has("noopener") || !relValues.has("noreferrer")) {
      fail(file, 'target="_blank" link must include rel="noopener noreferrer"');
    }
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

const legacyLegalTokens = ["#privacy-modal", "#terms-modal", "data-legal-modal"];
const publicWordingSources = Object.fromEntries(
  htmlFiles.map((file) => [file, htmlByFile[file].replace(/<!--[\s\S]*?-->/g, " ")]),
);
publicWordingSources["script.js"] = collectJavaScriptStrings(script);
for (const [file, source] of Object.entries({ ...htmlByFile, "script.js": script })) {
  for (const token of legacyLegalTokens) {
    if (source.includes(token)) fail(file, `contains removed legal Modal token ${token}`);
  }
}

const indexRoadSteps = ["拍下障礙照片", "標記地點或描述位置", "補充通行影響"];
if (indexRoadSteps.every((text) => htmlByFile["index.html"].includes(text))) {
  fail("index.html", "must not contain the complete three-step road report flow");
}

const reportRequiredText = [
  "回報前準備",
  "拍照、定位、補充說明",
  ...indexRoadSteps,
];
const reportText = visibleText(htmlByFile["report.html"]);
const reportNoticeText = visibleText(extractRoleNote(htmlByFile["report.html"]));
for (const text of reportRequiredText) {
  if (!reportText.includes(text)) fail("report.html", `road report action card missing: ${text}`);
}

const reportDisclaimerGroups = [
  ["流程示意"],
  ["不會傳送"],
  ["不會保存", "保存"],
  ["正式受理", "正式回報"],
];
for (const alternatives of reportDisclaimerGroups) {
  if (!alternatives.some((text) => reportNoticeText.includes(text))) {
    fail("report.html", `visible demo notice missing: ${alternatives.join(" or ")}`);
  }
}

for (const anchor of ["dashboard", "loop"]) {
  if (!anchorsByFile["report.html"].has(anchor)) {
    fail("report.html", `required anchor missing: id="${anchor}"`);
  }
}

const backendPatterns = [
  ["fetch(", /fetch\s*\(/],
  ["XMLHttpRequest", /XMLHttpRequest/],
  ["FormData", /FormData/],
  [".submit(", /\.submit\s*\(/],
];
for (const [label, pattern] of backendPatterns) {
  if (pattern.test(script)) fail("script.js", `formal submission code is forbidden: ${label}`);
}

const roadHubSources = {
  "report.html": reportText,
  "script.js": script,
};
const fakeResultPatterns = [
  ["92.21", /92\.21/],
  ["visible HASH", /\bHASH\b/],
  ["信心值", /信心值/],
  ["精準座標", /精準座標/],
  ["已受理", /已受理/],
  ["已轉交", /已轉交/],
  ["政府同步", /政府同步/],
  ["同步政府", /同步政府/],
  ["正式送出", /(?<!未)正式送出/],
  ["precise coordinate", /\d{2,3}\.\d{3,}/],
  ["technical confidence overlay", /\b(?:LAT|LNG|DEPTH|CONFIDENCE)\b/],
];
for (const [file, source] of Object.entries(roadHubSources)) {
  for (const [label, pattern] of fakeResultPatterns) {
    if (pattern.test(source)) fail(file, `ROAD HUB fake-result wording is forbidden: ${label}`);
  }
}

const founderPhotoPath = "assets/team/yian-chen.jpg";
const aboutHtml = htmlByFile["about.html"];
if (!aboutHtml.includes(founderPhotoPath)) {
  fail("about.html", `founder photo must use ${founderPhotoPath}`);
}
for (const [file, html] of Object.entries(htmlByFile)) {
  for (const match of html.matchAll(/["']([^"']*yian-chen[^"']*)["']/gi)) {
    if (match[1] !== founderPhotoPath) {
      fail(file, `unexpected founder photo path: ${match[1]}`);
    }
  }
}

for (const [file, source] of Object.entries(publicWordingSources)) {
  for (const word of forbiddenWords) {
    if (source.includes(word)) fail(file, `contains prohibited public wording: ${word}`);
  }
}

const robots = read("robots.txt");
if (!robots.includes(`Sitemap: ${siteBaseUrl}sitemap.xml`)) {
  fail("robots.txt", "missing sitemap location");
}

const sitemap = read("sitemap.xml");
if (!exists(ogImagePath)) fail(ogImagePath, "missing versioned social preview image");
for (const file of sitemapFiles) {
  const url = file === "index.html" ? siteBaseUrl : `${siteBaseUrl}${file}`;
  if (!sitemap.includes(`<loc>${url}</loc>`)) fail("sitemap.xml", `missing ${url}`);
}
for (const file of legacyRedirectFiles) {
  if (sitemap.includes(`/${file}</loc>`)) {
    fail("sitemap.xml", `legacy redirect page must not be listed: ${file}`);
  }
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

console.log(
  `Site check passed: ${htmlFiles.length} public pages; structure, navigation, public wording, ROAD HUB safeguards, local links, SEO meta, sitemap, robots, and JS syntax are valid.`,
);
