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
  images: ProjectImage[];
}
export interface ProjectImage {
  imagePath: string;
  imageText: string;
  imageType: "iphone" | "desktop" | "screenshot";
}

export interface Service {
  title: string;
  description: string;
}