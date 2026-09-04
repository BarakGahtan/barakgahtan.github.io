# Lessons — barakgahtan.github.io

Seeded 2026-07-10. Append a dated lesson after any correction (global CLAUDE.md §1.3) so the mistake never repeats.

## 2026-09-04 — kramdown turns pipe characters into tables
A markdown line containing ` | ` (e.g. `**Role | Company (dates)**`) is parsed by kramdown as a table row, which breaks all inline formatting on that line (literal `**` shows on the live site). Use ` · ` or a comma as the separator in headings/list items, never a bare pipe. Verify rendering on the live page after deploy (`curl | grep '<table'`), since there is no local Jekyll install.
