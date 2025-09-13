import type { ReactNode } from "react";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  icon: ReactNode;
  github: string;
  live: string;
  company: string;
}
