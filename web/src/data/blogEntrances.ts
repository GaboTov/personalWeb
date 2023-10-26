import { ExperienceType } from "@/types/types";
import logoTusesos from "../utilis/images/dockerLogo.webp";
import reactVsAngalarImg from "@/utilis/images/reactVsAngular.png";
import devorakImg from "@/utilis/images/devorak.png";
import testBlog from "@/utilis/images/testBlog.png";
import tsblog from "@/utilis/images/Tsblog.jpeg";
const blogEntances: ExperienceType[] = [
  {
    title: "Explorando la distribución DVORAK",
    img: devorakImg,
    position: "Productividad",
    exp: "17/10/2023",
    tec: [],
    content:
      "Comparto la experiencia al adoptar la distribución DVORAK para aliviar el dolor en las muñecas causado por el uso constante del teclado. Describiendo los desafíos enfrentados durante la transición, los beneficios inesperados y las reflexiones sobre la eficiencia en un entorno colaborativo.Si estás interesado en mejorar tu ergonomía mientras escribes y conocer cómo una simple decisión puede marcar la diferencia en tu salud y bienestar.",
    link: "https://www.linkedin.com/posts/gabo-tovar-37b405251_ergonomaeda-tecnologaeda-escrituraeficiente-activity-7119966147843649537-ML00?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Pruebas Unitarias con Vitest y Next.js",
    img: testBlog,
    position: "Desarrollo y tecnología",
    exp: "10/10/2023",
    tec: ["React", "Next.js"],
    content:
      "Una forma efectiva de garantizar la calidad del código es mediante pruebas unitarias sólidas. Recientemente, he explorado la integración de pruebas unitarias en proyectos Next.js utilizando Vitest, una herramienta poderosa que se integra perfectamente con Vite.",
    link: "https://www.linkedin.com/posts/gabo-tovar-37b405251_desarrollodesoftware-nextjs-vitest-activity-7117442124278603777-FXLg?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Gestión de Formularios en React con Typescript",
    img: tsblog,
    position: "Desarrollo y tecnología",
    exp: "26/09/2023",
    tec: ["React", "Typescript"],
    content:
      "En este caso práctico, hemos demostrado cómo el uso de genéricos puede simplificar la gestión de formularios y brindar una solución más eficiente y robusta.",
    link: "https://www.linkedin.com/posts/gabo-tovar-37b405251_react-typescript-programaciaejn-activity-7112341812605779970-eMDx?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Angular vs React",
    img: reactVsAngalarImg,
    position: "Desarrollo y tecnología",
    exp: "18/08/2023",
    tec: ["React"],
    content:
      "Hace unos días me llego un correo de LinkedIn de una propuesta de trabajo que mi perfil encajaba perfectamente, la mire y si era verdad cumplía todos los requisitos solo por pequeño detalle el framework que necesitaban era Angular. ",
    link: "https://magic-son-f25.notion.site/Hice-una-prueba-t-cnica-de-Angular-sin-saber-nada-5626d134c545450d955a839e600af5c0?pvs=4",
  },
];

export default blogEntances;
