import { JSX } from "react";

// types.ts
export interface Skill {
    name: string;
    level: number; // Level as a percentage (e.g., 90)
    icon?: JSX.Element; // Optional JSX element for the skill's icon
  }
  
  export interface SkillCategory {
    category: string;
    skills: Skill[];
  }
  