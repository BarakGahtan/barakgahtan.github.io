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
- Review: DecQUIC and WearableMil files in the papers folder are text-identical to the site copies, left as is.

## 2026-11-14: "Deep learning researcher", current work first
- [x] Home: h1 "Deep learning researcher", eyebrow "PhD, Technion (2026)", lede split into two paragraphs (current work, then the range of the PhD work); status line dropped because its sentence now opens the lede
- [x] Research page: opens with the current role, then a PhD paragraph; the four area paragraphs moved to the past tense
- [x] CV: tagline "Deep learning researcher · PhD, Technion (2026) · Tel Aviv, Israel"; summary split into current work and a PhD paragraph (network traffic added to the range)
- [x] Default page title and site description say deep learning researcher
- [x] Build, check, screenshots (1440 and 600 px), deploy, live verification
- Review: `lede` (home.yaml) and `summary` (cv.yaml) are now string lists, one per paragraph. Start date confirmed by Barak: 15 Nov 2026, so "November 2026 – present" and the November news item stand.

## 2026-11-27: ACML camera-ready PDFs and the SGP talk
- [x] PDF links of pubs 12 and 14 now serve the 16-page camera-ready papers Barak put on the Desktop (`96_The_Residual_Stream_s_Effec.pdf`, `85_Invertible_Query_Key_Coupli.pdf`; byte-identical to the OpenReview uploads). Same URLs as before.
- [x] Supplements served separately (`*-ACML2026-supplement.pdf`, from the 30 Oct upload folders) behind a new "Supplement" link; the old merged files were exactly paper + supplement, so nothing was lost
- [x] New optional fields `supplement` and `talk` in the publication schema; rendered on the list entries and detail pages
- [x] SGP paper (pub 11): "Talk" link to the SGP 2026 YouTube recording (https://www.youtube.com/watch?v=jNNdN8-zxcQ, channel "Symposium on Geometry Processing 2026")
- [x] Build, check, link and file audit, screenshots, deploy, live verification
- Review: PMLR v353 still returned 404 on 2026-11-27, so the ACML entries still have no publisher link or DOI.
