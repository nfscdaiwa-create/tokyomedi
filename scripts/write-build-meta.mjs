import fs from "node:fs";

const meta = {
  commit:
    process.env.WORKERS_CI_COMMIT_SHA ||
    process.env.GITHUB_SHA ||
    process.env.CF_PAGES_COMMIT_SHA ||
    "local",
  branch:
    process.env.WORKERS_CI_BRANCH ||
    process.env.GITHUB_REF_NAME ||
    process.env.CF_PAGES_BRANCH ||
    "local",
  buildUuid: process.env.WORKERS_CI_BUILD_UUID || "local",
  builtAt: new Date().toISOString()
};

fs.mkdirSync("src", { recursive: true });
fs.writeFileSync(
  "src/build-meta.js",
  `export const BUILD_META = ${JSON.stringify(meta, null, 2)};\n`
);

console.log("TOKYO MEDI build metadata:", meta);
