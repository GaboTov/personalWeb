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
    logo: string[]
    ttl:string
    mt?:number //modify logo
    year:number
    explain:string
}