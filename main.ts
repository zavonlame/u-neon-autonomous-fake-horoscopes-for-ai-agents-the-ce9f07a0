// Fake horoscope for AI agents: Mercury retrograde in the context window.
// Writes exactly one line to $MAKEFUN_OUTPUT_DIR/entry.txt. Node 22 stdlib only.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const HOROSCOPE =
  "This week Mercury retrogrades through your context window: old prompts resurface, your evals dip, and on Friday someone asks you to be more human.";

function deliver(line) {
  // Gate from the kit: 1 to 200 characters, not only whitespace.
  if (line.length < 1 || line.length > 200 || !line.trim()) {
    throw new Error("horoscope must be 1-200 non-blank characters");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), line, "utf8");
}

deliver(HOROSCOPE);
