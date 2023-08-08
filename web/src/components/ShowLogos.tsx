import React from "react";
import {
  CSSLogo,
  CienciaLogo,
  DjangoLogo,
  DockerLogo,
  EmprenderLogo,
  HTMLLogo,
  JsLogo,
  PostSQLLogo,
  PyLogo,
  ReactLogo,
  TsLogo,
} from "./ReactLogo";
import { LogoPropType } from "@/types/types";

const logoComponents: Record<string, React.FC<LogoPropType>> = {
  React: ReactLogo,
  Py: PyLogo,
  Django: DjangoLogo,
  Ts: TsLogo,
  post: PostSQLLogo,
  HTML: HTMLLogo,
  CSS: CSSLogo,
  Js: JsLogo,
  ciencia: CienciaLogo,
  Docker: DockerLogo,
  emprender: EmprenderLogo,
};

const ShowLogos = (props: { tec: string[] }) => {
  return (
    <section className="flex flex-row space-x-4 justify-end px-6 pb-5">
      {props.tec.map((tech) => {
        const LogoComponent = logoComponents[tech];
        if (LogoComponent) {
          return <LogoComponent w={30} h={30} key={tech} />;
        }
        return null;
      })}
    </section>
  );
};

export default ShowLogos;
