export interface Tab {
  path: string;
  name: string;
  active?: boolean;
}
export interface Project {
  id: number;
  slug: string;
  active?: boolean;
  title: string;
  subtitle: string;
  description: string;
}