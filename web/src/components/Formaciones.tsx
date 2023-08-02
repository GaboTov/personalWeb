import Formacion from "./Formacion";

import React, { useRef, useEffect, useState } from "react";

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
      if (direction === 'right') {
        scrollContainer.scrollLeft += 350; 
      } else {
        scrollContainer.scrollLeft -= 350;
      }
    }
  };
  return (
    <section>
      <h1>Formación</h1>
      <div className="flex flex-row">
        <button className=" mt-[135px] ml-0 bg-slate-400 rounded-full h-8 w-8 text-white hover:scale-125 transition duration-300" onClick={() => moveScroll('left')}>
          {"<"}
        </button>
        <div
          ref={scrollContainerRef}
          className="timeline-wrapper overflow-x-scroll flex gap-10"
        >
          <Formacion
            ttl="Factoría de cohesión"
            logo={["BlueUp"]}
            year={2023}
            explain="Programa de creatividad e innovación BlueUp VI Edición"
          />

          <Formacion
            ttl="Platzi"
            logo={["Docker"]}
            year={2023}
            explain="Curso de Docker"
          />

          <Formacion
            ttl="Udemy"
            logo={["Django", "React"]}
            year={2022}
            explain="React & Django Full Stack: web app, backend API, mobile apps"
          />
          <Formacion
            ttl="Udemy"
            logo={["Py"]}
            year={2022}
            explain="100 Days of Code: The Complete Python Pro Bootcamp for 2022"
          />
          <Formacion
            ttl="Universidad de Almería"
            logo={["Py"]}
            year={2021}
            explain="TFG-Estudio del comportamiento conjunto de los días extremos de temperatura media y precipitación en cuatro estaciones representativas de la peninsula ibérica"
          />
          <Formacion
            ttl="HarvardX CS50W"
            logo={["Django", "React"]}
            year={2021}
            explain="CS50's Web Programming with Python and JavaScript"
          />
          <Formacion
            ttl="Platzi"
            logo={["Js", "Html", "CSS"]}
            year={2021}
            explain="Curso de Fronted Developer"
          />

          <Formacion
            ttl="Free Code Camp"
            logo={["Js", "Html", "CSS"]}
            year={2020}
            explain="Curso de JavaScript para para
         para diseño web y diseño responsive"
          />

          <Formacion
            ttl="MIT OPENCOURSEWARE"
            logo={["Py"]}
            year={2020}
            explain="6.0001 Introduction to Computer Science  
        and Programming in Python"
          />

          <Formacion
            ttl="Universidad de Almería"
            logo={["Ciencia"]}
            year={2018}
            explain="Grado en ciencias ambientales"
          />
        </div>
        <button className=" mr-2 mt-[135px] bg-slate-400 rounded-full h-8 w-8 text-white hover:scale-125 transition duration-300" onClick={() => moveScroll('right')}>
          {">"}
        </button>
      </div>
    </section>
  );
};

export default Formaciones;
