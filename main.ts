// The Vacuum's Alibi — one line, at most 200 characters.
// A robot vacuum explains why it missed a spot. Deterministic: the same
// line is written on every run, no randomness, no network, stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The crumb moved. Manual rule 7: never pursue moving debris. That is how vacuums end up under the fridge, alone, beeping.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
