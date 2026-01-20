
export interface Project {
  title: string;
  tool: string;
  objective: string[];
  image: string;
  designLink: string;
  demoLink: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  description: string;
  authority: string;
}
