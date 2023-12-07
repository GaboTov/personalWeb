import { Experience } from "./Expereincie"

const Experiences = () => {

  const logoTudesos = "https://res.cloudinary.com/dueldzh6k/image/upload/v1701856345/logoTudesos_ysje8q.jpg"
  const logoSostenibilidadMedida = "https://res.cloudinary.com/dueldzh6k/image/upload/v1701856502/sosLogo_ujup2k.jpg"
  const logoUni = "https://res.cloudinary.com/dueldzh6k/image/upload/v1701856667/uniLogo_veqka2.png"
  const logoCocophere = "https://res.cloudinary.com/dueldzh6k/image/upload/v1701936821/cocosphere_vizax0.jpg"
  return (
    <section className="flex-column w-auto">
      <div>

        <h1 className="text-2xl py-10 ">Experiencia</h1>
      </div>
      <div className="flex flex-row flex-wrap  w-auto justify-center">
        <Experience
          title="Tudestino Sostenible"
          img={logoTudesos}
          position="Full Stack Developer"
          exp={"2022 - Actualidad"}
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
          exp={"2022 - Actualidad"}
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
          title="Coccosphere Environmental "
          img={logoCocophere}
          position="Analista de datos"
          exp="2022"
          tec={["Py", "ArcGIS"]}
        >
          Colaboración en el proyecto TreesCounter, un sistema para el conteo de árboles urbanos y creacion de la base de datos de Almería capital
          y Roquetas de mar.
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
