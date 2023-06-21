import { FormacionPropsType } from "@/types/types"
import Image from "next/image"


const Formacion = ({logo,ttl, children, mt}:FormacionPropsType) => {

    return(
        <>
        
        <div className="timeline-item flex flex-col items-center ">
          <div className="content">{ttl}</div>
          <div className={` point flex bg-white p-2 w-[3em] h-[3em] rounded-full mt-${mt}`}>
            <Image
              src={logo}
              alt="Logo de Python"
            />
          </div>
            {children}          
        </div>
        </>
    )
}

export default Formacion
