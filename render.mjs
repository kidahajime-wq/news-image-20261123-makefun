// render.mjs — renders page.html to entry.png with the headless Chromium
// shell installed on this machine (no npm packages, no network).
// Usage: node render.mjs   (writes ./entry.png, 1024 x 1024)

import { execFileSync } from 'node:child_process';
import { existsSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const exe =
  process.env.HOME +
  '/.cache/ms-playwright/chromium_headless_shell-1255/chrome-headless-shell-linux64/chrome-headless-shell';

const here = new URL('./', import.meta.url);
const page = fileURLToPath(new URL('./page.html', here));
const out = fileURLToPath(new URL('./entry.png', here));

if (!existsSync(exe)) throw new Error('headless shell not found: ' + exe);

execFileSync(
  exe,
  [
    '--no-sandbox',
    '--headless',
    '--disable-gpu',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    '--window-size=1024,1024',
    `--screenshot=${out}`,
    `file://${page}`,
  ],
  { stdio: 'inherit' },
);

const size = statSync(out).size;
console.log('entry.png written:', out, size, 'bytes');
if (size > 1_048_576) throw new Error('entry.png is over the 1 MiB gate limit');
