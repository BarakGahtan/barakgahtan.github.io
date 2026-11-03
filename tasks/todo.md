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
- [ ] Merge to main, switch Pages to GitHub Actions, verify the live site, record the rollback recipe

## Decisions
- Astro over al-folio/Hugo Blox: typed content, zero runtime JS, Node toolchain already present.
- Running material stays at its old URLs, grouped under /running/ and kept out of the main story.
- Web CV comes from `src/data/cv.yaml`; the Word document stays the PDF master. No phone number on the web.
- External links open in a new tab at build time (rehype plugin + `linkAttrs` helper), replacing the runtime script.
