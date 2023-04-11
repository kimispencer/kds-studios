export interface Project {
  id: number;
  title: string;
  subtitle: string;
  slug: string;
}

export interface Tab {
  path: string;
  name: string;
  active?: boolean;
  project?: Project;
}