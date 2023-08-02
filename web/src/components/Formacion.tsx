import { FormacionPropsType } from "@/types/types";
import ShowLogos from "./ShowLogos";


const Formacion = ({ logo, ttl, mt, year, explain }: FormacionPropsType) => {
  return (
    <>
      <div className="timeline-item flex flex-col items-center min-w-[300px] ">
        <div className="content whitespace-nowrap">
          <h1 className="text-2xl">{ttl}</h1>
        </div>
        <div
          className={` point flex bg-white  p-1 rounded-full`}
        >
          <ShowLogos tec={logo}/>
        </div>
        <div className="text-center mb-2">
          <h1 className="yearStudy">{year}</h1>
          <p className="text-sm">{explain}</p>
        </div>
      </div>
    </>
  );
};

export default Formacion;
