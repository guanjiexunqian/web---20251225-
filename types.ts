
export enum ProjectSection {
  Overview = 'overview',
  TechStack = 'tech_stack',
  Frontend = 'frontend',
  Backend = 'backend',
  DataScraper = 'data_scraper',
}

export interface Movie {
  id: string;
  title: string;
  rating: number;
  director: string;
  stars: string[];
  year: number;
  image: string;
  description: string;
}

export interface Topic {
  id: string;
  title: string;
  tag?: string;
  stats: string;
  image: string;
  content: string;
}

export interface TeamMember {
  role: string;
  name: string;
  tasks: string[];
  highlights: string[];
}

export interface Task {
  id: string;
  title: string;
  owner: string;
  status: 'todo' | 'doing' | 'done';
}
