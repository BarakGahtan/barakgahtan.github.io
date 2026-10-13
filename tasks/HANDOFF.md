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
