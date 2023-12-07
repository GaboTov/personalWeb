import { ExperienceType } from "@/types/types";
import ShowLogos from "./ShowLogos";
import Link from "next/link";

export const Experience = ({
  img,
  title,
  position,
  exp,
  tec,
  children,
  link,
}: ExperienceType) => {
  return (
    <div className="flex flex-col w-[290px] flex-wrap mb-20 mr-12">
      {link ? (
        <Link
          href={link}
          target="_blank"
          className="flex flex-row items-center hover:scale-[1.1] transform transition-transform duration-200"
        >
          <img
            className={"h-20 w-20 rounded-full py-1 px-1 object-contain"}
            src={img}
            alt="logo de compañía"
          />

          <div className="flex flex-row mb-0 y-0 text-lg font-bold px-1 ml-3 text-[20px]">
            {title}
          </div>
        </Link>
      ) : (
        <div className="flex flex-row items-center">
          <img
            className={"h-20 w-20 rounded-full py-1 px-1 object-contain"}
            src={img}
            alt="logo de compañía"
          />

          <div className="flex flex-row mb-0 y-0 text-lg font-bold px-1 ml-3 text-[20px]">
            {title}
          </div>
        </div>
      )}
      <div className="text-[13px] ml-2">
        {position}
        <p className="text-[11px] h-full">{exp}</p>
      </div>
      <div className=" text-[15px] bg-gray-100 rounded-md pt-4 pl-1 pr-1 pb-5 h-[400px] ">
        <p className="p-6 mb-5 text-[15px] h-[310px]">{children} </p>
        <ShowLogos tec={tec} />
      </div>
    </div>
  );
};
