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
  sections: ProjectSection[];
  backgroundColor?: string;
  skills: string[];
  industry: string[];
  productType: string[];
  siteUrl?: string;
  supplementalUrl?: Url;
}

export interface ProjectSection {
  projectSectionHeader: string;
  projectSectionText: ProjectSectionText;
  imageFile: string;
  imageType: "iphone" | "screenshot" | "none";
  fullscreen: boolean;
}

export interface ProjectSectionText {
  textType: "paragraph" | "columns" | "none";
  textCopy?: string;
  columnCopy?: string[];
  rowCopy?: string[];
}

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