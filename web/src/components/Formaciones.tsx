import logo from "../utilis/images/python-logo-only.png";
import Image from "next/image";
const Formaciones = () => {
  return (
    <section >
      <h1>Formación</h1>
      <div className="timeline-wrapper overflow-x-scroll whitespace-nowrap flex">
        
    
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
