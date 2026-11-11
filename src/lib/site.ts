export const SITE = {
  url: 'https://www.barakgahtan.com',
  name: 'Barak Gahtan',
  description:
    'Barak Gahtan, AI Researcher at a stealth company (PhD, Technion 2026), working on LLM inference and post-training. Diagnostics for language models, differentiable physics solvers, and physiological sensing from wearables and video.',
};

const ownSite = /^https?:\/\/(www\.)?barakgahtan\.com(\/|$)/;

export function isExternal(href: string): boolean {
  return /^https?:\/\//.test(href) && !ownSite.test(href);
}

/** Attributes that make links to other sites open in a new tab. Spread onto an <a>. */
export function linkAttrs(href: string): { target?: string; rel?: string } {
  return isExternal(href) ? { target: '_blank', rel: 'noopener' } : {};
}

export function monthYear(d: string | Date): string {
  const date = typeof d === 'string' ? new Date(d + 'T00:00:00Z') : d;
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });
}

const ME = 'Barak Gahtan';

/** Split an author string so the site owner's name can be emphasised. */
export function authorParts(authors: string): { text: string; me: boolean }[] {
  const chunks = authors.split(ME);
  const parts: { text: string; me: boolean }[] = [];
  chunks.forEach((chunk, i) => {
    if (chunk) parts.push({ text: chunk, me: false });
    if (i < chunks.length - 1) parts.push({ text: ME, me: true });
  });
  return parts;
}

/** Venue label with the year appended only when the short venue does not already carry it. */
export function venueLine(venueShort: string, year: number): string {
  return venueShort.includes(String(year)) ? venueShort : `${venueShort} · ${year}`;
}

/** Keep hyphenated words such as "hard-to-measure" on one line (word joiners around the hyphens). */
export function noHyphenBreaks(text: string): string {
  return text.replace(/(\S)-(\S)/g, '$1⁠-⁠$2');
}
