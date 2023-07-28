import logo from "../utilis/images/python-logo-only.png";
import Formacion from "./Formacion";
import logoFront from "../utilis/images/django-logo-positive.png"
import React, { useRef, useEffect, useState } from 'react';

const Formaciones = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState<Boolean>(false);

  // Check if the component is in view
  const checkIsInView = () => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const rect = scrollContainer.getBoundingClientRect();
    setIsInView(rect.top >= 0 && rect.bottom <= window.innerHeight);
  };

  useEffect(() => {
    // Check initially if the component is in view
    checkIsInView();

    // Check if the component is in view whenever the user scrolls
    window.addEventListener('scroll', checkIsInView);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener('scroll', checkIsInView);
    };
  }, []);  // Run this effect only once, when the component mounts

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleWheel = (e: WheelEvent) => {
      // Only handle the scroll event if the component is in view
      if (!isInView) return;

      e.preventDefault();
      
      // Check if the scroll container has reached its maximum scroll position
      if (scrollContainer) {
        if (e.deltaY > 0 && scrollContainer.scrollLeft < (scrollContainer.scrollWidth - scrollContainer.clientWidth)) {
          // If we're scrolling down and haven't reached the end, scroll horizontally
          scrollContainer.scrollLeft += e.deltaY;
        } else if (e.deltaY < 0 && scrollContainer.scrollLeft > 0) {
          // If we're scrolling up and haven't reached the start, scroll horizontally
          scrollContainer.scrollLeft += e.deltaY;
        } else {
          // If we've reached either end of the scroll container, scroll vertically
          window.scrollBy(0, e.deltaY);
        }
      }
    };

    // Add the wheel event listener if the component is in view
    if (isInView) {
      scrollContainer?.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      // Remove the event listener when the component is no longer in view
      scrollContainer?.removeEventListener('wheel', handleWheel);
    };
  }, [isInView]); 

    
  return (
    <section >
      <h1>Formación</h1>
      <div ref={scrollContainerRef} className="timeline-wrapper overflow-x-scroll  flex hide-scrollbar">
        <Formacion 
         ttl ="Factoría de cohesión"
         logo={logo}
         >
          <div className="text-center">
            <h1 className="yearStudy">2023</h1>
            <p className="max-w-md mx-auto whitespace-wrap">Programa de creatividad e innovación BlueUp VI Edición</p>
          </div>
         </Formacion>
        <Formacion 
         ttl ="Platzi"
         logo={logo}
         >
          <div className="text-center">
            <h1 className="yearStudy">2023</h1>
            <p className="max-w-md mx-auto whitespace-wrap">Curso de Docker</p>
          </div>
         </Formacion>
        <Formacion 
         ttl ="Udemy"
         logo={logo}
         >
          <div className="text-center">
            <h1 className="yearStudy"> 2022</h1>
            <p className="max-w-md mx-auto whitespace-wrap">React & Django Full Stack:
            web app, backend API, mobile apps</p>
          </div>
         </Formacion>
        <Formacion 
         ttl ="Udemy"
         logo={logo}
         >
          <div className="text-center">
            <h1 className="yearStudy"> 2022</h1>
            <p>100 Days of Code: The Complete Python 
             Pro Bootcamp for 2022</p>
          </div>
         </Formacion>
        <Formacion
        ttl="Universidad de Almería"
        logo={logoFront}>

          <div className="text-center">
            <h1 className="yearStudy">2021</h1>
            <p>
            TFG ESTUDIO DEL COMPORTAMIENTO CONJUNTO DE 
            LOS DIAS EXTREMOS DE TEMPERATURA MEDIA Y  
            PRECIPITACIÓN EN CUATRO ESTACIONES 
            REPRESENTATIVAS DE LA PENÍNSULA IBÉRICA
            </p>
          </div>
        </Formacion>
        <Formacion
        ttl="HarvardX CS50W"
        logo={logoFront}>

          <div className="text-center">
            <h1 className="yearStudy">2021</h1>
            <p>
            CS50's Web Programming with Python and JavaScript
            </p>
          </div>
        </Formacion>
      <Formacion
        ttl="Platzi"
        logo={logoFront}
        mt={1}
        >
          <div className="text-center">
          <h1 className="yearStudy">2021</h1>
          <p>Curso de Fronted Developer</p>
          
          </div>
          
        </Formacion>
        <Formacion

         ttl='Free Code Camp'
         logo={logo}
        >
          
          <div className="text-center">
            <h1 className="yearStudy">2020</h1>
            <p>Curso de JavaScript para para
             para diseño web y diseño responsive
            </p>
          </div>
        </Formacion>
    
        
        <Formacion 
        ttl="MIT OPENCOURSEWARE"
        logo={logo}>
          <div className="text-center mb-2">
          <h1 className="yearStudy">2020</h1>
          <p>6.0001 Introduction to Computer Science  
          and Programming in Python</p>
          </div>
        
          
        </Formacion>
        
        <Formacion 
        ttl="Universidad de Almería"
        logo={logo}>
          <div className="text-center mb-2">
          <h1 className="yearStudy">2018</h1>
          <p>Grado en ciencias ambientales</p>
          </div>
        
          
        </Formacion>
        
      </div>
    </section>
  );
};

export default Formaciones;
