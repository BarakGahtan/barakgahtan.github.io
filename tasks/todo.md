# Site rebuild on Astro (2026-11-03)

Goal: replace the Jekyll/academicpages site with an Astro 7 site, new design, same domain and URLs.

- [x] Archive the Jekyll site (tag `jekyll-final`, branch `jekyll-archive`), work on branch `astro` in a worktree
- [x] Scaffold Astro 7 (sitemap, RSS, YAML data, rehype-external-links, fontsource fonts)
- [x] Port content: 13 publications and 7 posts as content collections, 6 markdown pages, home/news data
- [x] Write layouts, components, global stylesheet (light-dark tokens, Newsreader + Inter + IBM Plex Mono)
- [x] Pages: home, publications, publication detail, CV (from cv.yaml), news, running hub, posts, 404, feed.xml
- [x] Redirects for every retired Jekyll URL (Academic, teaching, contact, talks, award pages, sitemap)
- [x] Build locally, run `astro check`, fix errors
- [x] URL parity: every one of the 51 old sitemap URLs resolves (page, file or redirect)
- [x] Visual QA in headless Chrome at desktop and phone widths, light and dark
- [x] Rewrite README.md and CLAUDE.md for the Astro site, update tasks/HANDOFF.md
- [x] Merge to main, switch Pages to GitHub Actions, verify the live site, record the rollback recipe (live 2026-11-03 14:46, run 41638433956)

## Decisions
- Astro over al-folio/Hugo Blox: typed content, zero runtime JS, Node toolchain already present.
- Running material stays at its old URLs, grouped under /running/ and kept out of the main story.
- Web CV comes from `src/data/cv.yaml`; the Word document stays the PDF master. No phone number on the web.
- External links open in a new tab at build time (rehype plugin + `linkAttrs` helper), replacing the runtime script.

## 2026-11-11: new role (AI Researcher, stealth company)
- [x] Home: eyebrow, lede sentence, status line replaces "open to roles"
- [x] CV: tagline, summary, experience entry (November 2026 - present, start month assumed)
- [x] Research page sentence, news item (Nov 2026), site meta description, CLAUDE.md fact
- [x] Build, type check, screenshots, deploy, live verification
- Review: hero status line replaces the open-to-roles line; status gets noHyphenBreaks like the headline; default page title now 'Barak Gahtan, AI Researcher'. Start month November 2026 is assumed from "I'm starting" on 2026-11-11.

## 2026-11-11: publication links and PDFs refresh
- [x] Temporal ESS entry: AISTATS 2027 version "Evaluating Temporal Models at Matched Information" (title, abstract, excerpt, year, PDF from ~/Desktop/195_Evaluating_Temporal_Models.pdf; Betamixing.pdf removed)
- [x] Publisher links: ACM DOI for Lab to Wrist, IEEE Xplore for VisQUIC
- [x] PDFs replaced with published versions: Lab to Wrist (ACM), VisQUIC (MeditCom), ANS (NoF), mmWave (NoF), Eikonal (CGF typeset), ML-ENHANCE (newer draft)
- [x] PDFs added: Effective Depth and Coupled QK (ACML camera-ready main + supplement), Shuffle Gap, Cardiovascular Drift
- [x] Build, check, screenshots, link audit, deploy, live verification
- Review: DecQUIC and WearableMil files in the papers folder are text-identical to the site copies, left as is. "Adapt the Data, Not the Model" (third author) is in the folder but not on the site; not added without Barak's word.
