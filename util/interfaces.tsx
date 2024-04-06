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
  fullscreen: boolean;
  skills: string[];
  siteUrl?: string;
  supplementalUrl?: Url;
}

export interface ProjectSection {
  projectSectionHeader: string;
  projectSectionText: ProjectSectionText; //string;
  imageFile: string;
  imageType: "iphone" | "screenshot" | "none";
}

export interface ProjectSectionText {
  textType: "paragraph" | "columns";
  textCopy: string;
  columnCopy: string[];
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