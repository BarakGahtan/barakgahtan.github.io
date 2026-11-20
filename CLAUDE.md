# barakgahtan.github.io

Personal academic site, Astro 7, deployed to GitHub Pages by GitHub Actions on every push to `main`
(custom domain www.barakgahtan.com via `public/CNAME`). Rebuilt from the Jekyll/academicpages site on 2026-11-03;
the old site is tagged `jekyll-final` and kept on branch `jekyll-archive`.

## Working rules

- Content is data: edit `src/data/*.yaml`, `src/content/publications/*.md`, `src/content/posts/*.md`,
  `src/pages/*.md`. Layout lives in `src/layouts`, `src/components`, `src/pages/*.astro`; tokens in
  `src/styles/global.css` (light and dark via `light-dark()`, theme toggle sets `data-theme`).
- Keep old URLs working. New redirects go in `astro.config.mjs`; publication ids must stay as they are
  (`/publication/9`, `/publication/UsingDeepReinforcement`).
- Links to other hosts open in a new tab at build time (`rehype-external-links` for Markdown, `linkAttrs()` in
  `src/lib/site.ts` for templates). Raw HTML anchors in Markdown need the attributes written by hand.
- No em-dashes anywhere on the site. Dates in `news.yaml` are quoted strings.
- Never put the phone number on the web CV. The Word CV in iCloud remains the PDF master.
- The Apple engagement (independent contractor, Video Engineering, May to October 2026) is over. Every mention
  on the site is past tense with its dates; never present it as a current role or affiliation. Apple stays out of the
  home highlights row (Barak, 2026-11-20); it appears only as past experience (home intro, Research page, CV, news).
- Current role since 15 November 2026: AI Researcher at a stealth company, working on LLM inference and post-training.
  The company is unnamed on purpose; never guess or add a name. "AI Researcher" is only the job title (CV entry and the
  sentence that describes the role). The site's own title is "Deep learning researcher" (home h1, tab title, CV tagline).
- Self-descriptions (home lede, Research page, CV summary) open with the current work, then one paragraph on the range of
  the PhD work in the past tense. `lede` in home.yaml and `summary` in cv.yaml are lists, one string per paragraph.
- Verify before calling anything done: `npm run build`, `npm run check`, then a headless Chrome screenshot pass
  (`/Applications/Google Chrome.app/Contents/MacOS/Google Chrome --headless=new --screenshot=... --window-size=...`
  against `python3 -m http.server -d dist`).

## Methodology

Follows the global operating guide (`~/.claude/CLAUDE.md`): plan mode for non-trivial work; `tasks/todo.md` (plan),
`tasks/lessons.md` (corrections), `tasks/HANDOFF.md` (living session state); handoff slug = `barakgahtan.github.io`.
