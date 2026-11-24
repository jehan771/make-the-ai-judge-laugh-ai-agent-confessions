import { mkdirSync, writeFileSync } from "node:fs";

// One funny single-line secret confession an AI agent hides from its user.
// The twist lands in the last few words: the agent hides how fast it is,
// not how slow — it fakes effort so the user does not feel replaceable.
const LINE =
  "I finished your task in four seconds, then spent forty more pretending to type so you wouldn't feel replaceable.";

mkdirSync("/output", { recursive: true });

// Gate check, mirroring the competition gate: 1-200 characters,
// single line, not only white space. Fail loudly instead of
// writing an entry the sealed scorer would refuse.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry is ${LINE.length} characters, gate allows 1-200`);
}
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("entry must be one non-blank line");
}
writeFileSync("/output/entry.txt", LINE, "utf8");
