# Lessons — barakgahtan.github.io

Seeded 2026-07-10. Append a dated lesson after any correction (global CLAUDE.md §1.3) so the mistake never repeats.

## 2026-09-04 — kramdown turns pipe characters into tables
A markdown line containing ` | ` (e.g. `**Role | Company (dates)**`) is parsed by kramdown as a table row, which breaks all inline formatting on that line (literal `**` shows on the live site). Use ` · ` or a comma as the separator in headings/list items, never a bare pipe. Verify rendering on the live page after deploy (`curl | grep '<table'`), since there is no local Jekyll install.

## 2026-11-03: Astro rebuild
- Astro 7 uses the Sätteri Markdown processor; `markdown.rehypePlugins`/`remarkPlugins` only work after `npm install @astrojs/markdown-remark`.
- Raw HTML anchors inside Markdown are not touched by rehype-external-links; write `target`/`rel` into them by hand (or a perl pass).
- `perl -pi` substitutions that insert non-ASCII characters must run with `-CSD -Mutf8`, otherwise the rest of the file gets mojibake; check with `grep -E 'Ã|â€'`.
- zsh aborts the whole command when a glob in a `for` list has no match, and `git rm` with one bad pathspec removes nothing; use explicit paths and check the status counts.
- Chrome headless cannot force `prefers-color-scheme`; copy `dist/`, inject `data-theme="dark"` into `<html>` and screenshot that copy.

## 2026-11-04: a finished role still read as current
- The CV entry had an end date, but the home highlight ("independent contractor, Apple Video Engineering") and the lede ("spent 2026 as...") still read as a current affiliation. When a role ends, grep the whole site for the employer and make every mention past tense with explicit dates, not only the CV entry.

## 2026-11-11: no statistic headlines
- Barak rejected the "13 papers, 12 as first author" h1 on /publications/ ("i dont think such a title is necessary"). Page headings are plain nouns that match the eyebrow (Publications, News, Research); counts and other stats belong in section meta labels or the CV summary, never in a page title or the meta description.

## 2026-11-14: a job title is not the site's title
- The 11 Nov update put the new job title ("AI Researcher") in the home eyebrow, tab title and CV tagline. Barak wants the site titled "Deep learning researcher", each summary to open with what he does now, and the PhD work in its own paragraph that shows its range. Keep an employer's job title inside the sentence that describes the role.

## 2026-11-20: past roles do not belong in the highlights row
- The fourth home highlight still read "Technion · Apple ... former independent contractor, Apple Video Engineering". Barak: "why do we need Apple there?" The card is now "Technion / PhD in Computer Science, 2026". When a role ends, take it out of the highlight cards entirely; past experience lives in the intro, the Research page and the CV.
