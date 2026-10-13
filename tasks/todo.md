# TODO: site redesign (started 2026-10-13)

Goal: replace the tight academicpages layout with a spacious, well-typeset researcher site that a recruiter can scan in ten seconds.

Research + proposal
- [x] Audit current site (desktop 1440, true 390 mobile, theme variables): `/Users/barak/research/academic-website-redesign-2026-10-13.md` section 1
- [x] Design-research pass (principles, exemplars, what recruiters scan for)
- [x] Template evaluation pass (restyle in place vs al-folio vs Hugo Blox vs Astro/Tailwind)
- [x] Prototype home + publications layout with two visual directions: https://claude.ai/artifact/3LPSKZzLrSwAXBPJwzs1ec
- [x] Barak rejected both prototype directions; asked for a mix of the current site and the new design, tuned for industry (2026-10-13)
- [x] Rebuild path: restyle in place (keeps masthead, profile sidebar on inner pages, all personal pages)

Implementation (after approval)
- [x] Built and verified locally (Jekyll via Homebrew ruby@3.3, vendor/bundle) before pushing to main
- [x] Tokens + type scale + both themes in `_sass/_home.scss`; fonts in `_variables.scss`; dark palette in `_dark-mode.scss`
- [x] Home: hero, highlights, selected work (4 featured cards), themes + news (`_layouts/home.html`, `_data/home.yml`)
- [x] Publications page: grouped rows kept, intro fixed, wider column (filter chips deferred)
- [x] Inner pages: wider column, sidebar without the Follow button
- [ ] Consistent 16:9 teaser images for the selected papers; thumbnails for pubs 14 and 15 (pub 14 uses a typographic tile for now)
- [x] Navigation: Publications · CV · Projects · News · Running · Contact; old URLs untouched (`/about-page/`, `/Academic/` still exist)
- [ ] Verify live at 1440 and 390, light and dark after the push

Review
- [ ] Record what changed, open items, and lessons in `tasks/HANDOFF.md` and `tasks/lessons.md`
