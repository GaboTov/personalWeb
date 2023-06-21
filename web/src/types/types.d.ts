import { StaticImageData } from "next/image"


export interface ExperienceType {
    title:string
    img:StaticImageData
    position: string
    exp: string
    tec: string[]
    children?: ReactNode;
    }

export interface FormacionPropsType{
    logo: StaticImageData
    ttl:string
    children:ReactNode
    mt?:number
}