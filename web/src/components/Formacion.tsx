import { FormacionPropsType } from "@/types/types";
import ShowLogos from "./ShowLogos";


const Formacion = ({ logo, ttl, mt, year, explain }: FormacionPropsType) => {
  return (
    <>
      <div className="timeline-item flex flex-col items-center min-w-[300px] ">
        <div className="content whitespace-nowrap mb-5">
          <h1 className="text-2xl">{ttl}</h1>
        </div>
        <div
          className={` bg-transparent  rounded-full p-8 h-[140px]`}

        >
          <ShowLogos tec={logo} w={43} />
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
