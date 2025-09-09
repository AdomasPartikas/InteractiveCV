export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  subtitle?: string;
  description: string;
  details?: string[];
  category: 'education' | 'work' | 'personal' | 'achievement';
  isExpanded?: boolean;
}

export interface NavigationItem {
  path: string;
  label: string;
  icon?: string;
}

export interface ContactInfo {
  email?: string;
  linkedin?: string;
  github?: string;
  location?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  images?: string[];
  featured?: boolean;
  status: 'completed' | 'in-progress' | 'archived';
  category: 'web' | 'desktop' | 'automation' | 'bot' | 'api' | 'videogame';
  year: string;
  highlights?: string[];
}
