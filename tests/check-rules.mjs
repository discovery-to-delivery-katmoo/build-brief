// Checks that BUILD-BRIEF.md still follows its own rules.
// Run: node tests/check-rules.mjs
import { readFileSync, readdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (rel) => readFileSync(join(root, rel), "utf8");
const src = read("BUILD-BRIEF.md");
const failures = [];
const check = (ok, message) => { if (!ok) failures.push(message); };

// Part A has exactly 12 numbered rules, 1 to 12 in order.
const partA = src.split("## Part A")[1]?.split("\n## Part B")[0] ?? "";
const rules = [...partA.matchAll(/^(\d+)\. /gm)].map((m) => Number(m[1]));
check(rules.length === 12 && rules.every((n, i) => n === i + 1),
  `Part A should have rules 1 to 12, found: ${rules.join(", ") || "none"}`);

// Section headings, each once.
const headings = [];
for (let i = 1; i <= 10; i++) headings.push(`B${i}`);
for (let i = 1; i <= 4; i++) headings.push(`C${i}`);
for (let i = 1; i <= 2; i++) headings.push(`D${i}`);
for (let i = 1; i <= 6; i++) headings.push(`E${i}`);
for (const h of headings) {
  const n = src.match(new RegExp(`^### ${h}\\. `, "gm"))?.length ?? 0;
  check(n === 1, `${h} should appear once as a heading, found ${n}`);
}

// Brief headings 1 to 9, in order.
const parts = ["At a glance", "How to read this", "The goal and the people", "How it runs",
  "Requirements, by part", "Look and feel", "Proposed priority", "Open questions and assumptions",
  "Guesses worth testing"];
let at = src.indexOf("### E2");
parts.forEach((h, i) => {
  const pos = src.indexOf(`**${i + 1}. ${h}`, at);
  check(pos > at, `Brief part ${i + 1} "${h}" missing or out of order`);
  if (pos > at) at = pos;
});

// The boundary line appears exactly once, as written.
const boundary = "Choosing what goes in your first version is a judgement call about your product: your goals, your users and what you're willing to trade off. It's often worth talking it through with someone who has made calls like this before.";
check((src.split(boundary).length - 1) === 1, "The boundary line should appear exactly once");

// Fixed sentences.
for (const s of [
  "I'll ask you about your idea one question at a time and turn your answers into a clear brief you can build from.",
  "To carry on later, paste the Build Brief instructions into a new chat, then paste this block.",
  "Which ones go in your first version?",
  "Is that right?",
  "Which tool will you build it with?",
  "Build only this step. Don't add features that aren't listed. When you're done, tell me how to check each item above.",
  "This may need checking with someone who knows the rules where you work.",
  "Carry on, or stop here for now?",
]) check(src.includes(s), `Fixed sentence missing: "${s}"`);

// Internal priority words only in Part F.
const beforeF = src.split("## Part F")[0];
check(!/\b(Must|Should|Could)\b/.test(beforeF.replace(/Never put|never/g, "")),
  "Must/Should/Could used outside Part F; use has to be in / important / nice to have");

// The four-message stop is spelled out.
check(/four separate messages/i.test(src), "The four-message stop is missing");

// No em or en dashes in anything people read.
const peopleRead = ["BUILD-BRIEF.md", "README.md"];
for (const f of readdirSync(join(root, "start"))) peopleRead.push(`start/${f}`);
for (const rel of peopleRead)
  read(rel).split("\n").forEach((line, i) => {
    if (/[–—]/.test(line)) failures.push(`Dash in ${rel}, line ${i + 1}`);
  });

const words = src.split(/\s+/).filter(Boolean).length;
check(words < 5000, `BUILD-BRIEF.md has ${words} words; the limit is 5,000`);

try {
  execFileSync("node", [join(root, "scripts/build-skill"), "--check"], { stdio: "pipe" });
} catch (err) {
  failures.push(`build-skill --check failed: ${String(err.stderr || err.message).trim()}`);
}

// Words a directory policy check may misread, anywhere in the shipped plugin folder.
{
  const { readdirSync: rd, statSync: st } = await import("node:fs");
  const walk = (dir) => rd(join(root, dir)).flatMap((f) => {
    const rel = `${dir}/${f}`;
    return st(join(root, rel)).isDirectory() ? walk(rel) : [rel];
  });
  for (const rel of walk("plugins/build-brief")) {
    if (!/\.(md|json)$/.test(rel)) continue;
    if (/dangerously|skip-permissions|bypassPermissions/i.test(read(rel))) failures.push(`Policy-sensitive word in ${rel}`);
  }
}

if (failures.length) {
  console.error(`${failures.length} problem(s):\n- ${failures.join("\n- ")}`);
  process.exit(1);
}
console.log(`All checks passed (${words} words).`);
