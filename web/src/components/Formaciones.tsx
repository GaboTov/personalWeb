import { formacionObjeto } from "@/data/formacionesMock";
import Formacion from "./Formacion";

import React, { useRef, useEffect } from "react";
import { FormacionPropsType } from "@/types/types";

const Formaciones = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (scrollContainer) {
        if (
          e.deltaY > 0 &&
          scrollContainer.scrollLeft <
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollContainer.scrollLeft += e.deltaY;
        } else if (e.deltaY < 0 && scrollContainer.scrollLeft > 0) {
          scrollContainer.scrollLeft += e.deltaY;
        } else {
          window.scrollBy(0, e.deltaY);
        }
      }
    };

    return () => {
      scrollContainer?.removeEventListener("wheel", handleWheel);
    };
  }, []);
  const moveScroll = (direction: string) => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      if (direction === "right") {
        scrollContainer.scrollLeft += 350;
      } else {
        scrollContainer.scrollLeft -= 350;
      }
    }
  };
  return (
    <section>
      <h1 className="text-2xl py-10">Formación</h1>
      <div className="flex flex-row">
        <button
          className=" mt-[230px] ml-0 bg-slate-400 rounded-full h-8 w-8 text-white hover:scale-125 transition duration-300"
          onClick={() => moveScroll("left")}
        >
          {"<"}
        </button>
        <div
          ref={scrollContainerRef}
          className="timeline-wrapper overflow-x-scroll flex gap-10"
        >
          {formacionObjeto.map((edu: FormacionPropsType, index) => {
            return (
              <div key={index}>
                <Formacion
                  ttl={edu.ttl}
                  logo={edu.logo}
                  year={edu.year}
                  explain={edu.explain}
                />
              </div>
            );
          })}
        </div>
        <button
          className=" mr-2 mt-[230px] bg-slate-400 rounded-full h-8 w-8 text-white hover:scale-125 transition duration-300"
          onClick={() => moveScroll("right")}
        >
          {">"}
        </button>
      </div>
    </section>
  );
};

export default Formaciones;
