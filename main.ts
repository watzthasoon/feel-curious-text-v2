import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "Every Sunday a jar of jam waits on the step, a different flavour, no note. " +
  "I never see who leaves it. " +
  "This morning the jar was empty, washed clean, and set back down, " +
  "as if it were mine to fill.";

// Count Unicode code points, not UTF-16 units, as the gate does.
const codePoints = [...text].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`entry must be 1-280 code points, got ${codePoints}`);
}
if (!text.trim()) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
console.log(`wrote ${codePoints} code points to /output/entry.txt`);
