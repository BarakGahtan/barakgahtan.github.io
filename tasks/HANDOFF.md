# HANDOFF — barakgahtan.github.io

Living session-handoff doc (global CLAUDE.md §10).

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
