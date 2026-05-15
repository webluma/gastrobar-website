import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();

const affectedVersions = new Map([
  ["@tanstack/react-router", new Set(["1.169.5", "1.169.8"])],
  ["@tanstack/history", new Set(["1.161.9", "1.161.12"])],
  ["@tanstack/router-core", new Set(["1.169.5", "1.169.8"])],
  ["@tanstack/router-generator", new Set(["1.166.45", "1.166.48"])],
]);

const watchedScopes = [
  "@tanstack/",
  "@uipath/",
  "@mistralai/",
  "@opensearch-project/",
  "@cap-js/",
];

const watchedPackages = new Set(["guardrails-ai"]);

const suspiciousPatterns = [
  /@tanstack\/setup/iu,
  /github:tanstack\/router#79ac49eedf774dd4b0cfa308722bc463cfe5885c/iu,
  /router_init\.js/iu,
  /router_runtime\.js/iu,
  /tanstack_runner\.js/iu,
  /gh-token-monitor/iu,
  /filev2\.getsession\.org/iu,
  /seed[123]\.getsession\.org/iu,
  /setup bun\.js/iu,
];

const filesToScan = ["package.json", "pnpm-lock.yaml", "package-lock.json", "yarn.lock"]
  .map((file) => join(root, file))
  .filter((file) => existsSync(file));

const findings = [];
const watchedHits = new Set();

function addFinding(message) {
  findings.push(message);
}

function scanTextForIocs(file, text) {
  for (const pattern of suspiciousPatterns) {
    if (pattern.test(text)) {
      addFinding(`${file} contains suspicious IOC matching ${pattern}`);
    }
  }
}

function checkPackage(name, version, source) {
  if (!name || !version) {
    return;
  }

  const affected = affectedVersions.get(name);
  if (affected?.has(version)) {
    addFinding(`${source} contains known compromised ${name}@${version}`);
  }

  if (watchedScopes.some((scope) => name.startsWith(scope)) || watchedPackages.has(name)) {
    watchedHits.add(`${name}@${version}`);
  }
}

function readJson(file) {
  return JSON.parse(readFileSync(file, "utf8"));
}

function scanPackageJson(file) {
  const manifest = readJson(file);
  const sections = [
    "dependencies",
    "devDependencies",
    "optionalDependencies",
    "peerDependencies",
  ];

  for (const section of sections) {
    for (const [name, range] of Object.entries(manifest[section] ?? {})) {
      checkPackage(name, String(range).replace(/^[~^=v]/u, ""), `${section} in package.json`);
    }
  }

  for (const [name, command] of Object.entries(manifest.scripts ?? {})) {
    if (/^(preinstall|install|postinstall|prepare)$/u.test(name)) {
      addFinding(`package.json defines install lifecycle script "${name}": ${command}`);
    }
  }
}

function scanPackageLock(file) {
  const lock = readJson(file);
  for (const [path, meta] of Object.entries(lock.packages ?? {})) {
    const name = meta.name ?? path.replace(/^node_modules\//u, "");
    checkPackage(name, meta.version, path || "root package-lock importer");

    for (const scriptName of Object.keys(meta.scripts ?? {})) {
      if (/^(preinstall|install|postinstall|prepare)$/u.test(scriptName)) {
        addFinding(`${path} defines lifecycle script "${scriptName}" in package-lock.json`);
      }
    }
  }
}

function scanPnpmLock(file) {
  const text = readFileSync(file, "utf8");
  const packageKey = /^ {2}'?((?:@[^/\s]+\/)?[^'@\s:]+)@([^':\s]+)'?:/gmu;
  let match;

  while ((match = packageKey.exec(text)) !== null) {
    checkPackage(match[1], match[2], "pnpm-lock.yaml");
  }
}

for (const file of filesToScan) {
  const relative = file.slice(root.length + 1);
  const text = readFileSync(file, "utf8");

  scanTextForIocs(relative, text);

  if (relative === "package.json") {
    scanPackageJson(file);
  } else if (relative === "package-lock.json") {
    scanPackageLock(file);
  } else if (relative === "pnpm-lock.yaml") {
    scanPnpmLock(file);
  }
}

if (findings.length > 0) {
  console.error("Install safety check failed:");
  for (const finding of findings) {
    console.error(`- ${finding}`);
  }
  process.exit(1);
}

console.log("Install safety check passed.");
if (watchedHits.size > 0) {
  console.log(`Watched high-risk packages present: ${[...watchedHits].sort().join(", ")}`);
}
