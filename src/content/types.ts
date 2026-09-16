export interface ContentImage {
  src: string;
  alt: string;
  caption: string;
}

export interface Source {
  label: string;
  href: string;
  note?: string;
}

export interface Section {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  image?: ContentImage;
  table?: { headers: string[]; rows: string[][] };
  code?: { language: string; value: string };
  diagram?: { title: string; nodes: string[]; caption: string };
  quote?: { text: string; attribution: string };
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  problem: string;
  role: string;
  team: string;
  date: string;
  duration: string;
  category: string;
  tags: string[];
  techStack: string[];
  status: string;
  featured: boolean;
  coverImage: ContentImage;
  outcome: string;
  sections: Section[];
  relatedArticles: string[];
  sources: Source[];
}

export interface Article {
  slug: string;
  title: string;
  summary: string;
  category: string;
  tags: string[];
  date: string;
  readingTime: string;
  featured: boolean;
  relatedProjects: string[];
  editorialNote: string;
  sections: Section[];
  sources: Source[];
}

export interface Experience {
  role: string;
  organization: string;
  date: string;
  summary: string;
  details: string[];
}

export interface Capability {
  title: string;
  description: string;
  projectSlugs: string[];
}
