import { StaticImageData } from "next/image"


export interface ExperienceType {
    title:string
    img:StaticImageData
    position: string
    exp: string
    tec: string[]
    children?: ReactNode;
    }