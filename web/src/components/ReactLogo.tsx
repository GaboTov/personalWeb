import pyLogo from "../utilis/images/python-logo-only.png"
import Image from "next/image";
import djangoLogo from "../utilis/images/django-logo-positive.png"
import tsLogo from "../utilis/images/ts-logo-256.png"
import postLogo from "../utilis/images/Postgresql_elephant.svg.png"
interface LogoPropType  {
    h:number;
    w:number;
}
export function ReactLogo (props:LogoPropType) {
    return(

       <div className={`w-[${props.w}px] h-[${props.h}px]`}>

       
        <svg width={`${props.w}px`} height={`${props.w}px`} viewBox="-10.5 -9.45 21 18.9" fill="#149ECA" xmlns="http://www.w3.org/2000/svg">
    <circle cx="0" cy="0" r="2"></circle>
    <g stroke="#149ECA" stroke-width="1" fill="none">
        <ellipse rx="10" ry="4.5"></ellipse>
        <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
        <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
    </g>
</svg>
</div>
    )

} 




export function PyLogo(props:LogoPropType) {
  return (
    <div className={`max-w-[${props.w}px] max-h-[${props.h}px]`}>
      <Image
        width={props.w}
        height={props.h}
        src={pyLogo}
        alt='logo de Python'
      /> 
    </div>
  );
}


export function DjangoLogo ( props:LogoPropType){

    return(
        <div className={`max-w-[${props.w}px] max-h-[${props.h}px] mt-3`}>
      <Image
        width={props.w}
        height={props.h}
        src={djangoLogo}
        alt='logo de Django'
      /> 
    </div>
    )
}

export function TsLogo ( props:LogoPropType){

    return(
        <div>
            <Image
            width={props.w}
            height={props.h}
            src={tsLogo}
            alt = {"Logo de TypeScript"}
            /> 
        </div>
    )
}

export function PostSQLLogo (props: LogoPropType){

    return(
        <div>
            <Image
            width={props.w}
            height={props.h}
            src = {postLogo}
            alt={'PostgreSQL Logo'}
            />

        </div>
    )
}