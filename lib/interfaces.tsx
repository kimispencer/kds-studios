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
  images: ProjectImage[];
  backgroundColor: string;
  fullscreen: boolean;
  skills: string[];
  siteUrl?: string;
}
export interface ProjectImage {
  imageFile: string;
  imageText: string;
  imageType: "iphone" | "desktop" | "screenshot";
}

export interface Service {
  title: string;
  description: string;
}