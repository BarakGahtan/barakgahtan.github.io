import homeRaw from '../data/home.yaml';
import newsRaw from '../data/news.yaml';
import navRaw from '../data/nav.yaml';
import profileRaw from '../data/profile.yaml';
import cvRaw from '../data/cv.yaml';

export interface Link { label: string; url: string; primary?: boolean }
export interface Home {
  eyebrow: string; headline: string; lede: string; status?: string;
  buttons: Link[]; links: Link[];
  highlights: { label: string; caption: string; url: string }[];
  themes: { title: string; text: string; papers: { title: string; url: string }[] }[];
}
export interface NewsItem { date: string; text: string; url?: string }
export interface NavItem { label: string; url: string; match?: string[] }
export interface Profile { name: string; email: string; photo: string; links: Link[] }
export interface CvJob { role: string; org: string; dates: string; bullets?: string[] }
export interface CvDegree { degree: string; org: string; dates: string; note?: string }
export interface Cv {
  name: string; tagline: string; summary: string; methods: string; tools: string;
  experience: CvJob[]; education: CvDegree[]; awards: string[]; service: string[]; personal: string[];
}

export const home = homeRaw as Home;
export const news = newsRaw as NewsItem[];
export const nav = navRaw as { main: NavItem[] };
export const profile = profileRaw as Profile;
export const cv = cvRaw as Cv;
