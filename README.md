# barakgahtan.com

Personal academic site of Barak Gahtan, built with [Astro](https://astro.build) and served by GitHub Pages at
https://www.barakgahtan.com. No runtime JavaScript beyond the theme toggle and the CV print button.

## Editing content

| What | Where |
|---|---|
| Home page text, highlights, research themes | `src/data/home.yaml` |
| News items (newest first, `date` = first of the month) | `src/data/news.yaml` |
| CV (summary, experience, education, awards, service) | `src/data/cv.yaml` |
| Navigation, profile links | `src/data/nav.yaml`, `src/data/profile.yaml` |
| Publications (one Markdown file per paper, body = abstract) | `src/content/publications/<id>.md` → `/publication/<id>/` |
| Running posts | `src/content/posts/<id>.md` → `/blog/<id>/` |
| Long-form pages (research statement, projects, running guides) | `src/pages/*.md` |
| PDFs and images | `public/files/`, `public/images/` |

Publication front matter: `title`, `authors`, `venue`, `venue_short`, `year`, `status` (`published` or `preprint`),
`featured` (shown on the home page and CV), `order` (higher = newer), `takeaway` (one-sentence summary), `excerpt`,
`arxiv`, `paperurl`, `pdf`, `thumbnail` (file in `public/images/`), `tile` (text shown when there is no thumbnail).
The schema lives in `src/content.config.ts`; the build fails on a missing or malformed field.

Links to other sites open in a new tab automatically: Markdown links through `rehype-external-links`, template links
through `linkAttrs()` in `src/lib/site.ts`.

## Development

```
npm install
npm run dev      # http://localhost:4321
npm run build    # writes dist/
npm run check    # type-check .astro and .ts files
```

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages
(repository setting: Pages source = GitHub Actions). `public/CNAME` keeps the custom domain.

Old Jekyll URLs that no longer exist are redirected in `astro.config.mjs`. `/sitemap.xml` is served by
`src/pages/sitemap.xml.ts` and points at the generated `sitemap-index.xml`.

## Rollback to the Jekyll site

The last Jekyll version is tagged `jekyll-final` and kept on the `jekyll-archive` branch. To serve it again:

```
gh api -X PUT repos/BarakGahtan/barakgahtan.github.io/pages -f build_type=legacy -f source[branch]=jekyll-archive -f source[path]=/
```
