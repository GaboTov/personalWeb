import logo from "../utilis/images/python-logo-only.png";
import Image from "next/image";
import Formacion from "./Formacion";
import logoFront from "../utilis/images/django-logo-positive.png"
const Formaciones = () => {
  return (
    <section >
      <h1>Formación</h1>
      <div className="timeline-wrapper overflow-x-scroll whitespace-nowrap flex">
        
    
        <Formacion
        ttl="Platzi"
        logo={logoFront}
        mt={0}
        >
          <div className="text-center">
          <h1>2020</h1>
          <p>Curso de Fronted Developer</p>
          <br/>
          </div>
          <p className="p-5">Tecnologías básicas para el frontend <br/> como HTML, CSS y JavaScript</p>
        </Formacion>
        <Formacion 
        ttl="MIT OPENCOURSEWARE"
        logo={logo}>
          <div className="text-center mb-2">
          <h1>2020</h1>
          <p>6.0001 Introduction to Computer Science <br/> 
          and Programming in Python</p>
          </div>
          <p className="p-5">Fundamentos y casos prácticos con Python esto hace mas grande todo <br/>solución de todos los problems sets</p>
          
        </Formacion>
        <div className="timeline-item flex flex-col items-center ">
          <div className="content">Contenido de tu evento</div>
          <div className="point bg-white p-2 w-[3em] h-[3em] rounded-full">
            <Image
              src={logo}
              alt="Logo de Python"
            />
          </div>
          <div className="content text-center">
            2021
            <div>
              descripción de habilidades y lugar
              <br />
              seguna lineas
              <br />
              tercera lineas
            </div>
          </div>
        </div>
        <div className="timeline-item flex flex-col items-center ">
          <div className="content">Contenido de tu evento</div>
          <div className="point bg-white p-2 w-[3em] h-[3em] rounded-full">
            <Image
              src={logo}
              alt="Logo de Pyhton"
            />
          </div>
          <div className="content text-center">
            2021
            <div>
              descripción de habilidades y lugar
              <br />
              seguna lineas
              <br />
              tercera lineas
            </div>
          </div>
        </div>
        <div className="timeline-item flex flex-col items-center ">
          <div className="content">Contenido de tu evento</div>
          <div className="point bg-white p-2 w-[3em] h-[3em] rounded-full">
            <Image
              src={logo}
              alt="Logo de Pyhton"
            />
          </div>
          <div className="content text-center">
            2021
            <div>
              descripción de habilidades y lugar
              <br />
              seguna lineas
              <br />
              tercera lineas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formaciones;
