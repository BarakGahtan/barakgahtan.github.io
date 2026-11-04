# HANDOFF — barakgahtan.github.io

Living session-handoff doc (global CLAUDE.md §10).

## CURRENT STATE (2026-10-13, end of session; read this first)

**Live site = `main` HEAD 49a6b6d at https://www.barakgahtan.com (GitHub Pages legacy branch build, verified).** Everything below is pushed; working tree clean except this file.

**Accomplished today (4 pushes):**
1. 67ee0ed: ACML 2026 acceptances (pubs 12, 14), Apple role marked as a completed contract, recruiter-style publications (authors, venue, two-sentence summaries, arXiv/Publisher/PDF links, grouped peer-reviewed vs under review).
2. d60215e: redesign in place (Barak rejected the artifact prototype, asked for "a mix between my current design and the design you showed me... best for industry"): `_layouts/home.html` + `_data/home.yml`, `_data/news.yml` + `_pages/news.md`, `_sass/_home.scss` tokens, Inter/Instrument Sans/JetBrains Mono, navy dark palette, nav = Publications · CV · Projects · News · Running · Contact, internal files excluded from the build.
3. 49d8c6e: designed thumbnail for pub 14 (`images/thumb-coupledqk.svg` -> `.jpg`).
4. 3fffbe8 + 49a6b6d: CV "Academic Service" section (reviewer for ACM ICMI, IEEE conferences and journals, other venues; MSc mentoring); Apple start month corrected to MAY 2026 (news 5/2026, CV "May 2026 - October 2026").

**Next steps (none started):**
- Confirm with Barak: the hero status line in `/Users/barak/Projects/barakgahtan.github.io/_data/home.yml` ("Open to research scientist and applied scientist roles..."); the Apple END month (October assumed); whether reviewing should also appear on the home page highlights.
- Thumbnail for pub 15 (cardio drift, no PDF locally); optional illustrations in the pub-14 style for pubs 12, 11, 9 (consistent 16:7).
- Dated CV PDF in `files/` for the hero "Curriculum vitae" button (currently links to /cv/); his newest docx `/Users/barak/Library/Mobile Documents/com~apple~CloudDocs/Barak Folder/CV/BarakGahtan_CV26-9-26.docx` still says Apple "June ... Present"; CV summary rewrite draft was given in chat (AI-researcher framing) but not applied anywhere.
- PMLR volume/pages for pubs 12 and 14 when the proceedings appear; optional filter chips on /publications/.
- Longer term: Astro rebuild if the Jekyll skeleton limits (report section 3).

**Key paths:** report `/Users/barak/research/academic-website-redesign-2026-10-13.md`; plan `/Users/barak/Projects/barakgahtan.github.io/tasks/todo.md`; lessons `tasks/lessons.md`; rejected prototype artifact https://claude.ai/artifact/3LPSKZzLrSwAXBPJwzs1ec (keep for reference only).

**Local build (works, 3 s):** `cd /Users/barak/Projects/barakgahtan.github.io && PATH=/opt/homebrew/opt/ruby@3.3/bin:$PATH GEM_HOME=$HOME/.gem/ruby33 BUNDLE_PATH=$PWD/vendor/bundle $HOME/.gem/ruby33/bin/bundle exec jekyll build -d /tmp/_site_prod`. For file:// previews add `--config _config.yml,<cfg>` where cfg sets `url: "file:///path/to/_site"`. Mobile screenshots: `~/Library/Caches/ms-playwright/chromium_headless_shell-1223/chrome-headless-shell-mac-arm64/chrome-headless-shell --headless --window-size=390,3400 --virtual-time-budget=8000 --screenshot=out.png file://...` (Chrome.app headless ignores widths under ~500 px). Verify live: `gh api repos/BarakGahtan/barakgahtan.github.io/pages/builds/latest` (gh at /Users/barak/.local/bin/gh) then curl with a cache-busting query.

**Gotchas:** never name a zsh variable `path` (clobbers PATH); kramdown turns ` | ` into tables; a bare `$` in an excerpt opens MathJax; `git add` with an explicitly named ignored path aborts the chain; the dark theme is `data-theme="dark"` on `<html>` set by `assets/js/dark-mode.js` (no CSS prefers-color-scheme fallback).

## 2026-09-04 — Full content refresh (bio, news, CV, publications)

Sources of truth used: CV docx `/Users/barak/Library/Mobile Documents/com~apple~CloudDocs/Barak Folder/CV/BarakGahtan1-9-26.docx` (Sept 1, 2026) and `/Users/barak/Desktop/my-papers/` (Presented vs "Under review " folders, note trailing space in dir name).

**Changed:**
- `_pages/about.md` — bio: PhD (2026) + Apple Video Engineering role; 5 new news items (9/2026 cardio-drift paper, 7/2026 SGP presentation + CGF publication, 6/2026 Coupled-QK under review, 6/2026 joined Apple, 6/2026 thesis submitted).
- `_pages/about-page.md` — first paragraph updated to PhD (2026) + Apple.
- `_pages/cv.md` — rewritten from the Sept 1 CV docx: Apple (June 2026-Present) + Technion researcher/TA roles added, Education, Awards & Grants (incl. MAFAT 2026, Sports Excellence), Service & Personal. Talmor entry dropped (dropped from CV too).
- `_publications/11-eikonal.md` — venue now "Computer Graphics Forum (Proceedings of SGP 2026)", presented + published wording.
- NEW `_publications/14-invertible-qk-coupling.md` (Coupled-QK, under review at ACML — venue NOT named on site, double-blind).
- NEW `_publications/15-cardio-drift-pose.md` (Yuval David lead author, under review).
- Venue field set to "Preprint (under review)" on 8-ML-ENHANCE, 10-beta-mixing, 12-effective-depth, 13-shuffle-gap.

**Conventions:** publication cards sort by `order` desc; `thumbnail` optional; news feed = raw HTML `<ul>` blocks in about.md, newest first, "M/YYYY" dates. No em-dashes in site text (user rule).

**2026-09-04 later:** CGF publication confirmed via Wiley/Crossref: official title "Differentiable Randers-Finsler Eikonal Solvers", doi 10.1111/cgf.70489, online 2026-08-13. Site updated (pub 11 title/paperurl, 8/2026 news item, kramdown pipe fix in cv.md, see lessons.md). New CV docx created: `BarakGahtan4-9-26.docx` in iCloud CV folder (title + DOI fixed; PDF export still manual, no LibreOffice). Wiki pages Personal Website + Gahtan2026-Wildfire refreshed.

**Open / judgment calls to confirm with Barak:**
- "Completed my PhD (2026)" phrasing mirrors his CV; thesis submitted ~June 2026, degree possibly not yet conferred.
- News dates 7/2026 (SGP presentation) and 9/2026 (cardio-drift announcement) are best guesses.
- Nothing committed/pushed yet — repo also has untracked CLAUDE.md + tasks/ from the 2026-07-10 standardization pass.
- Under-review venues (NeurIPS/ACML) intentionally omitted; ACML decision due Sep 15, 2026 — update site on notification.
- Wiki page `wiki/projects/Personal Website.md` is stale (last_updated 2026-04-11, says "PhD candidate", 11 pubs) — optional follow-up.

## 2026-10-13: ACML acceptances, Apple contract ended, recruiter-friendly publications

**Changed:**
- `_publications/*` (all 13): new front-matter fields `authors` (plain comma string; template bolds "Barak Gahtan"), `status` (`published` | `preprint`), `arxiv`, `pdf` (URL-encoded `/files/...`), and a two-sentence `excerpt` (problem + result). Pub 12 retitled to the accepted "The Residual Stream's Effective Depth" (arXiv 2609.31098); pub 12 and pub 14 (arXiv 2604.01683) set to venue "Asian Conference on Machine Learning (ACML 2026), PMLR"; their bodies are the camera-ready abstracts from `~/Desktop/my-papers/Presented/`.
- `_includes/archive-single.html` publications card: title, authors, venue (+ year from `date`), excerpt, links row (arXiv / Publisher / PDF). Robusta special case removed.
- `_layouts/single.html`: same authors/venue/links block at the top of every `/publication/N` page.
- `_pages/publications.md`: two groups, "Peer-reviewed publications" (`where: status == published`) then "Preprints and papers under review" (`where_exp: status != published`), each sorted by `order` desc; intro sentence updated.
- `_sass/_cards.scss` + `_sass/_dark-mode.scss`: `.publication__authors`, `.publication__venue`, `.publication__links`, `.publications__group`.
- `_pages/about.md`: bio now says "recently completed a research contract with Apple"; 3 new news items (10/2026 Apple contract completed; 9/2026 ACML acceptance x2, linking /publication/14 and /publication/12).
- `_pages/about-page.md`: same Apple wording. `_pages/cv.md`: Apple role now "Deep Learning Researcher (Contract) ... (June 2026 - October 2026)", past tense.

**Assumptions to confirm with Barak:** Apple end month = October 2026 (CV docx `BarakGahtan_CV26-9-26.docx` still says "Present"); cardio-drift author order Yuval David, Barak Gahtan, Alex M. Bronstein; Shuffle Gap (pub 13) kept as under review (no ACML outcome recorded); PMLR volume/pages for pubs 12 and 14 still unknown.

**Gotcha:** a bare `$` inside an `excerpt` can open MathJax inline math on the list page; write "40 billion dollars", never "$40 billion". Pubs 14 and 15 have no thumbnail (cards render without the image column).

## 2026-10-13 (later): redesign research + prototype (no site changes yet)

Barak wants the whole layout redone ("less of that tight template"). Done so far, nothing committed or pushed for this:
- Audit + research report: `/Users/barak/research/academic-website-redesign-2026-10-13.md` (section 1 audit, 2 design findings, 3 template options, 4 proposed layout, 5 plan).
- Prototype artifact (home + publications page, directions A editorial serif / B modern sans, light + dark, real content and headshot): https://claude.ai/artifact/3LPSKZzLrSwAXBPJwzs1ec . Source: scratchpad `barakgahtan-prototype.html` built by `build_proto.py` (images embedded as data URIs; headshot = `images/email-picture.jpeg`, NOT `profile.png`, which is a placeholder).
- Plan with checkboxes: `tasks/todo.md`. Waiting on Barak: direction A/B, rebuild path, which personal pages stay.
- Gotchas: macOS Chrome.app headless ignores window widths under ~500 px (use the Playwright headless shell for mobile shots); zsh variable named `path` clobbers PATH.

## 2026-10-13 (evening): redesign SHIPPED as a restyle in place

Barak rejected the artifact prototype ("something different... a mix between my current design and the design you showed me. do what you think is best for industry"). Implemented in the Jekyll site itself:
- `_layouts/home.html` + `_data/home.yml` (all home copy lives in the data file: eyebrow, headline, lede, status line, buttons, links, highlights, themes). `_pages/about.md` is now just front matter (`layout: home`).
- `_data/news.yml` holds every news item (newest first); home shows 8, `_pages/news.md` (/news/) shows all. The old raw-HTML news list in about.md is gone.
- Featured papers = `_publications` entries with `featured: true` (+ `venue_short`, `takeaway`, optional `tile` for a card with no thumbnail): pubs 12, 14, 11, 9.
- `_sass/_home.scss`: CSS tokens (`--c-*`, `--f-*`) for light and `[data-theme="dark"]`, masthead tweaks, search button hidden, `.page` wider at large, sidebar Follow button hidden with links always visible, all home components. Imported last in `assets/css/main.scss`.
- Fonts: Inter (body), Instrument Sans (headings/nav), JetBrains Mono (eyebrow, badges, dates) via the Google Fonts import in `main.scss`; `_variables.scss` text #1F2937 on white; `_dark-mode.scss` palette moved to the navy set #0F1424 / #121833 / #262D47 / #8AB4FF.
- `_config.yml`: new description; `exclude` now hides CLAUDE.md, tasks/, markdown_generator, talkmap.py/ipynb, CONTRIBUTING.md, package.json (they WERE being published before).
- Nav: Publications · CV · Projects · News · Running · Contact. The long-form About page stays at /about-page/ (linked from the hero as "More about my research").

**Local toolchain (new):** Homebrew `ruby@3.3`, gems in `vendor/bundle` (gitignored), bundler in `~/.gem/ruby33`. Build: `PATH=/opt/homebrew/opt/ruby@3.3/bin:$PATH GEM_HOME=~/.gem/ruby33 BUNDLE_PATH=$PWD/vendor/bundle ~/.gem/ruby33/bin/bundle exec jekyll build -d <out>`; for file:// previews add a second config with `url: "file://<out>"`. Mobile screenshots: Playwright headless shell (see memory lessons).

**Open:** confirm the "Open to research scientist..." status line wording; thumbnails for pubs 14/15; PMLR volume numbers; optional filter chips on /publications/; the Astro rebuild recommended by the template-evaluation pass remains a future option (report section 3).

**2026-10-13 (late):** pub 14 now has a thumbnail, a designed illustration of the mechanism (q,k -> invertible coupling -> q',k' -> causal softmax map) rendered from `images/thumb-coupledqk.svg` to `thumb-coupledqk.jpg` (1120x490, 16:7, site palette). Recipe: edit the SVG, render with the Playwright headless shell at `--force-device-scale-factor=2`, `sips -Z 1120` to JPEG. Pub 15 (cardio drift) still has no image; no PDF is available locally for it. Commit 49d8c6e, verified live.

**2026-10-13 (correction from Barak):** Apple start month is MAY 2026, not June (news item now 5/2026; CV says May 2026 - October 2026). His CV docx still says June; the end month (October) remains his to confirm.

- 2026-10-14: home headline changed to "Models for hard-to-measure signals, with the physics and physiology built in." (commit 8368e6a, Barak picked it from four options). CV docx was rebuilt the same day; see memory user_apple_contractor.md.

- 2026-11-02: external links open in a new tab. `assets/js/external-links.js` (loaded from `_includes/scripts.html`) adds target=_blank and rel=noopener to any anchor whose host, www stripped, differs from the page host; same-site, in-page and mailto links are untouched. Verified in headless Chrome on the local build (52 external anchors marked across /, /publications/, /cv/, /about-page/; 0 internal anchors touched).

## 2026-11-03: site rebuilt on Astro 7 (branch `astro`, worktree /Users/barak/Projects/barakgahtan.github.io-astro)

Barak asked for a complete redo ("theme wise, the engine behind it, everything") and delegated the decisions ("I trust you").
- Engine: Astro 7.4 with `@astrojs/sitemap`, `@astrojs/rss`, `@rollup/plugin-yaml`, `rehype-external-links` (needs the
  `@astrojs/markdown-remark` bridge because Astro 7 defaults to the Sätteri Markdown processor), fontsource fonts
  (Newsreader variable for headings, Inter variable for body, IBM Plex Mono for labels). No Tailwind, one `global.css`.
- Content ported by a one-off script (scratchpad `port/port.mjs`): 13 publications → `src/content/publications/<id>.md`
  (ids = old permalink tails), 7 posts → `src/content/posts/blog-N.md` (URLs `/blog/blog-N/` unchanged), 6 markdown pages
  in `src/pages`, `home.yaml` and `news.yaml` copied. LaTeX in three abstracts converted to HTML/Unicode; em-dashes removed.
- New pages: home, publications (two groups, year shown once), publication detail with abstract, CV from `src/data/cv.yaml`
  (content of the 14 Oct 2026 Word CV, no phone number, print button), news, `/running/` hub (old `/posts/` redirects to it),
  404, `/feed.xml`, `/sitemap.xml` endpoint pointing at `sitemap-index.xml`.
- Redirects in `astro.config.mjs` for every retired URL (Academic, teaching, resume, contact, talks, talkmap, sitemap page,
  the three award pages → `/cv/#awards`). URL parity: all 51 URLs of the old sitemap resolve (checked locally with curl).
- Deployment: `.github/workflows/deploy.yml` (actions/checkout@v7, withastro/action@v6, actions/deploy-pages@v5). Pages source
  must be set to GitHub Actions (`gh api -X PUT repos/BarakGahtan/barakgahtan.github.io/pages -f build_type=workflow`).
  Rollback: tag `jekyll-final`, branch `jekyll-archive`; see README.
- Verification done: `npm run build` (32 pages), `npm run check` (0 errors), headless Chrome screenshots desktop/phone/dark.
- Open items for Barak: whether to add a CV PDF download (the Word CV carries his phone number), BibTeX per paper, and
  whether the running section should stay in the main navigation.

**2026-11-03 14:46, live.** Pages source switched to GitHub Actions (`build_type=workflow`), `astro` pushed to `main` as 9129f73,
deploy run 41638433956 succeeded. Live checks: home, publications, CV, running, posts, feed, sitemap.xml, robots, PDFs all 200;
old URLs redirect (meta refresh) and `/publication/9` 301s to the trailing-slash form; 404 page served; headless Chrome audit on the
live home and books pages found every external link marked `target=_blank rel=noopener` and no internal link touched. The main checkout
now holds the Astro tree (`npm install` done, `vendor/` removed); the `astro` worktree and branch were deleted after the merge.

## 2026-11-04: Apple contract is a past role everywhere
Barak asked that the site no longer present him as an Apple independent contractor. The CV entry already had the May to
October 2026 dates, but the home lede ("spent 2026 as an independent contractor...") and the home highlight ("independent
contractor, Apple Video Engineering") read as current. Commit 812e3da: lede now "worked as an independent contractor with
Apple's Video Engineering group from May to October 2026", highlight caption "former independent contractor, Apple Video
Engineering", research page "from May to October 2026 I worked as an independent contractor...". Rule added to CLAUDE.md,
lesson to tasks/lessons.md. Deploy run 41770879660 succeeded; live home, research, CV and news pages checked.
Noticed but not fixed (out of scope): `src/pages/race-guide.md` still carries 15 kramdown `{: #id}` heading markers that
render as literal text on the live race guide; fixing them needs a check that Astro's auto heading ids match the old anchors.
