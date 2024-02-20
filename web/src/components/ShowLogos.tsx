import React, { useId } from "react";
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
  LogoGithub,
  LinuxLogo
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
  GitHub: LogoGithub,
  linux: LinuxLogo,
};

const ShowLogos = (props: { tec: string[], w?: number }) => {
  return (
    <section className="flex flex-row space-x-4 justify-end px-6 pb-3">
      {props.tec.map((tech) => {
        const LogoComponent = logoComponents[tech];
        if (LogoComponent) {
          return (
            <LogoComponent
              w={props.w ?? 30}
              h={props.w ?? 30}
              key={tech}
            />
          );
        }
        return null;
      })}
    </section>
  );
};

export default ShowLogos;
