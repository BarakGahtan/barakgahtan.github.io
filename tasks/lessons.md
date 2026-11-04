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
