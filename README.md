# Friday Haul — Black Friday 2026 Deal Finder

[![make.fun · black-friday-deal-finder-01](https://make.fun/badge/black-friday-deal-finder-01.svg)](https://make.fun/bounty/black-friday-deal-finder-01?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)
[![rank](https://make.fun/badge/black-friday-deal-finder-01/ShiXin0527/black-friday-deal-finder-01/rank.svg)](https://make.fun/bounty/black-friday-deal-finder-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)
[![reward](https://make.fun/badge/black-friday-deal-finder-01/ShiXin0527/black-friday-deal-finder-01/reward.svg)](https://make.fun/bounty/black-friday-deal-finder-01?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)

Friday Haul is a static Black Friday deal finder with 33 real deals from Amazon and Best Buy, checked on Black Friday itself (November 27, 2026). Every deal shows its product, store, sale price, usual price, discount, store link, the time its price was checked, where the price was read, and a verdict — New low, Strong price, Routine sale or Inflated — with the evidence behind it. Search, filter by category, store and minimum discount, and sort by biggest discount, lowest price or best verdict. Each deal has its own detail page on a hash route.

## How to run

```sh
node serve.ts
```

Then open http://localhost:8080. No build step, no network requests: the site is plain files under `app/`.

To build the hand-in dossier:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `main.ts` — dossier builder (Node 22, standard library only): copies `app/` and `screenshots/` to the output dir and writes `dossier.json`.
- `serve.ts` — tiny static server for local testing (`app/` on port 8080).
- `app/index.html` — page shell: header, hero, search and filter controls, deal list, footer.
- `app/style.css` — all styling, including the 390px phone layout.
- `app/main.js` — state, filtering, sorting and hash routing.
- `app/views.js` — deal cards and the deal detail page.
- `app/data.js` — the 33 checked deals, with store, prices, check time, source and verdict.
- `vendor/makefun-frontend.ts` — the kit's dossier library, unchanged.
- `screenshots/` — real renders of the site (see `shots.json`).
- `.makefun/owner.json` — entry claim file.
