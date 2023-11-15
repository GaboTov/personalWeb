import GameLife from "@/components/GameFile";
import NavBar from "@/components/NavBar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          property="og:image"
          content="https://i.imgur.com/2y7OgjG.png"
        />
        <meta
          property="og:title"
          content="Portafolio Gabo Tovar"
        />
        <meta
          property="og:description"
          content="En esta pagina hay un resumen de mi experiencia laboral y formación, con enlaces a mis publicaciones en la sección de blog."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
