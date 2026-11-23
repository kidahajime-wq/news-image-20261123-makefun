// main.ts — The World Ledger, Monday 23 November 2026 (Node 22, stdlib only).
// The entry image is the entry.png beside this file, drawn by the agent that
// built this repository; the program copies it to /output/entry.png, byte for
// byte, so both grader runs write the same bytes. The gate takes a whole PNG
// or JPEG of at most 1 MiB and 1024 by 1024 pixels.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(
  new URL('./entry.png', import.meta.url),
  join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'),
);
