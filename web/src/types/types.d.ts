import { StaticImageData } from "next/image";

export interface ExperienceType {
  title: string;
  img: string;
  position: string;
  exp: string;
  tec: string[];
  children?: ReactNode;
  link?: string;
  content?: string;
}

export interface FormacionPropsType {
  logo: string[];
  ttl: string;
  mt?: number; //modify logo
  year: number;
  explain: string;
}

export interface LogoPropType {
  h: number;
  w: number;
}
