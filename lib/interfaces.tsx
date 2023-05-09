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
  copy: string
  imageKey: string;
  indexImage: string;
  images: ProjectImage[];
  backgroundColor: string;
  fullscreen: boolean;
  skills: string[];
  siteUrl?: string;
  supplementalUrl?: Url;
}
export interface ProjectImage {
  imageFile: string;
  imageText: string;
  imageType: "iphone" | "desktop" | "screenshot";
}

interface Url {
  path: string;
  name: string;
}

export interface Service {
  title: string;
  description: string;
}

export interface Tool {
  title: string;
  description: string[];
}