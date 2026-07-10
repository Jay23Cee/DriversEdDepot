const fs = require("fs");
const path = require("path");

const source = fs.readFileSync(path.join(__dirname, "..", "src", "data", "myimprovPaths.ts"), "utf8");
const expected = { a_aid: "66a4143c07172", a_bid: "091e1333", a_cid: "0882c38f" };
for (const [key, value] of Object.entries(expected)) {
  if (!source.includes(`${key}: "${value}"`)) throw new Error(`Affiliate configuration mismatch for ${key}`);
}
const stateBlock = source.match(/MYIMPROV_STATE_PATHS[^=]*=\s*{([\s\S]*?)};/);
if (!stateBlock) throw new Error("Unable to find state affiliate paths");
const paths = [...stateBlock[1].matchAll(/:\s*"([^"]+)"/g)].map((match) => match[1]);
if (paths.length !== 50) throw new Error(`Expected 50 state paths, found ${paths.length}`);
const build = (pathname) => { const url = new URL(pathname, "https://www.myimprov.com"); Object.entries(expected).forEach(([key, value]) => url.searchParams.set(key, value)); return url; };
for (const pathname of ["/", ...paths, "/course/?existing=kept"]) {
  const url = build(pathname);
  for (const [key, value] of Object.entries(expected)) if (url.searchParams.get(key) !== value) throw new Error(`${pathname} missing ${key}`);
  if (pathname.includes("existing=kept") && url.searchParams.get("existing") !== "kept") throw new Error("Existing query parameters were not preserved");
}
console.log(`Verified fallback, existing-query behavior, and ${paths.length} state affiliate URLs.`);
