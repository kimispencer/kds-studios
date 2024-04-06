export interface Tab {
  path: string;
  name: string;
  active?: boolean;
}
export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  summary: string
  imageKey: string;
  indexImage: string;
  images: ProjectImage[];
  // sections: ProjectSection[];
  backgroundColor?: string;
  fullscreen: boolean;
  skills: string[];
  siteUrl?: string;
  supplementalUrl?: Url;
}

export interface ProjectImage {
  imageHeader: string;
  imageFile: string;
  imageText: string;
  imageType: "iphone" | "screenshot" | "none";
}

// export interface ProjectSection {
//   sectionType: "vertical" | "horizontal";
//   sectionImage?: ProjectImage | "none";
//   sectionHeader: string;
//   sectionText: string;
// }

interface Url {
  path: string;
  name: string;
}

export interface Skill {
  title: string;
  description: string;
}

export interface Tool {
  title: string;
  description: string[];
}