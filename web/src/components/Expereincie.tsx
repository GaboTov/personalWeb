import { ExperienceType } from "@/types/types";
import Image from "next/image";
import { DjangoLogo, PostSQLLogo, PyLogo, ReactLogo, TsLogo } from "./ReactLogo";


export const Experience = ({ img, title, position, exp, tec, children }: ExperienceType) => {
  return (
    <div className="flex flex-col w-[290px] flex-wrap mb-20 mr-12">
      <div className="flex flex-row items-center ">
        <div className="text-xs h-[55px] w-[55px] bg-cover ">
          <Image
            src={img}
            alt="logo de Tudestino Sostenible"
          />
        </div>
        <div className="flex flex-row mb-0 y-0 text-lg font-bold px-1 ml-3 text-[20px]">
          {title}
        </div>
      </div>
      <div className="text-[13px] ml-2">{position}
        <p className="text-[11px]">{exp}</p>
      </div>
      <div className=" text-[15px] bg-gray-100 rounded-md ">
        <p className="p-6 ">{children} </p>
        <section className="flex flex-row space-x-4 justify-end px-6 pb-5 ">
          {tec.includes('React') && <ReactLogo w={30} h={30}/>  }
          {tec.includes('Py') && <PyLogo w={30} h={30}/>  }
          {tec.includes('Django') && <DjangoLogo w={30} h={15}/>}
          {tec.includes('Ts') && <TsLogo w={30} h={30}/>}
          {tec.includes('post') &&<PostSQLLogo w={30} h={30}/>  }
        </section>
      </div>
    </div>
  );
};
