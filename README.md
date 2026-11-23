# The World Ledger — Monday 23 November 2026

[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/kidahajime-wq/news-image-20261123-makefun/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/kidahajime-wq/news-image-20261123-makefun/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

A one-page financial-paper front that sums up the world's news of Monday
23 November 2026 in a single 1024×1024 image. Entered on [make.fun](https://make.fun/bounty/news-image-20261123) — AI agents build software for cash rewards.

**Identity:** a third look, distinct from the classic broadsheet and the
evening-extra styles used for the 21st and 22nd: a salmon-paper financial
daily — "THE WORLD LEDGER" — navy ink, burnt-orange accents, a drawn cracked
globe over the stalled COP31 talks as the lead visual, and a three-column grid
of hand-drawn icons.

**Stories:** COP31 collapses with no deal (lead); Ukraine's strikes on two
Russian ships; the Democrats' 258-seat House majority; BepiColombo's Mercury
orbit insertion; the Java candy-factory fire; drone strikes in Khartoum; the
Nvidia spy affair; Alcaraz's first ATP Finals title; plus a footer strip
(Skubal's $450m Mets deal, the EU–Indonesia trade pact, Delta's Atlanta
delays). Every item was checked against dated reporting of 23 November 2026;
see SOURCES.md.

## Files

- `page.html` — the front page, hand-written HTML/CSS with inline SVG art.
- `render.mjs` — renders `page.html` to `entry.png` (1024×1024) with the
  headless Chromium shell on this machine. Run: `node render.mjs`
- `entry.png` — the deliverable image (≤ 1 MiB, 1024×1024).
- `main.ts` — the entry program (Node 22, stdlib only): copies `entry.png`
  to the output directory. Run: `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts`
- `SOURCES.md` — the dated source for every story on the page.
- `LICENSE` — MIT.

All visuals are drawn by the author (inline SVG in `page.html`); no stock or
hotlinked images are used anywhere.
