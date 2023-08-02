import { Experience } from "./Expereincie"
import logoTudesos from "../utilis/images/tudesosLogo.png";
import logoSostenibilidadMedida from "../utilis/images/sostenibilidadMedidaLogo.png";
import logoUni from "../utilis/images/uniLogo.png";

 

const Experiences = () => {


    return(
         <section className="flex-column w-auto">
        <div>

        <h1 className="text-2xl py-10 ">Experiencia</h1>
        </div>
        <div className="flex flex-row flex-wrap  w-auto justify-center">
          <Experience
            title="Tudestino Sostenible"
            img={logoTudesos}
            position="Full Stack Developer"
            exp={"2022 - 2023"}
            tec={["React", "post", "Django", "Py"]}
          >
            Contribución al desarrollo de una aplicación web que evalúa la
            sostenibilidad en el sector turístico. 
            Responsabilidades incluyeron la
            creación de la primera versión, diseño de algoritmo de calificación, desarrollo de
            APIs, implementación de API de Stripe y automatización de
            visualización de datos e informes
          </Experience>
          <Experience
            title="Sostenibilidad a medida"
            img={logoSostenibilidadMedida}
            position="Full Stack Developer"
            exp={"2022 - 2023"}
            tec={["React", "Ts", "Py"]}
          >
            Enfocado en el desarrollo de aplicaciones web para la conservación
            del medio ambiente. Automatización de la recopilación de datos de
            emisiones de gases de efecto invernadero en Andalucía con Selenium,
            Scrapy. Creación de la primera versión y diseño de algoritmos de una
            aplicación para medir la huella de carbono de eventos y generación
            de informes.
          </Experience>
          <Experience
            title="Universidad de Almería"
            img={logoUni}
            position="Análisis de datos"
            exp={"2021 - 2022"}
            tec={["Py"]}
          >
            Recopilación y análisis de datos climáticos (temperatura y
            precipitaciones) de varías ciudades de la peninsula en el periodo de
            1970 a 2010 para ver las tendencias por estaciones y ciudades entre
            calurosa o fría en el caso de la temperatura y seco húmedo para las
            precipitaciones.
          </Experience>
        </div>
        </section>
    )
}


export default Experiences