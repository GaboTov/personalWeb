import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="dark" lang="es">
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
      <body className="dark:text-gray-200 dark:bg-red-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
