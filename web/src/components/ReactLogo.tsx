import pyLogo from "../utilis/images/python-logo-only.png";
import Image from "next/image";
import djangoLogo from "../utilis/images/django-logo-positive.png";
import tsLogo from "../utilis/images/ts-logo-256.png";
import postLogo from "../utilis/images/Postgresql_elephant.svg.png";
import HTMLLogoSrc from "../utilis/images/html5Logo.png";
import CSSLogoSrc from "../utilis/images/CSSLogo.png";
import JsLogoSrc from "../utilis/images/JavaScript-logo.png";
import cienciaLogoSrc from "../utilis/images/logoCiencia.png";
import DockerLogoSrc from "../utilis/images/dockerLogo.webp";
import emprenderLogoSrc from "../utilis/images/empredimientoLogo.png";
import LogoLinux from "../utilis/images/logo-linux.webp";
import { LogoPropType } from "@/types/types";

export function LinuxLogo(props: LogoPropType) {
  return (
    <div className={`max-w-[${props.w}px] max-h-[${props.h}px]`}>
      <Image
        width={props.w}
        height={props.h}
        src={LogoLinux}
        alt="logo de Linux"
      />
    </div>
  )
}
export function ReactLogo(props: LogoPropType) {
  return (
    <div className={`w-[${props.w}px] h-[${props.h}px]`}>
      <svg
        width={`${props.w}px`}
        height={`${props.w}px`}
        viewBox="-10.5 -9.45 21 18.9"
        fill="#149ECA"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="0"
          cy="0"
          r="2"
        ></circle>
        <g
          stroke="#149ECA"
          strokeWidth="1"
          fill="none"
        >
          <ellipse
            rx="10"
            ry="4.5"
          ></ellipse>
          <ellipse
            rx="10"
            ry="4.5"
            transform="rotate(60)"
          ></ellipse>
          <ellipse
            rx="10"
            ry="4.5"
            transform="rotate(120)"
          ></ellipse>
        </g>
      </svg>
    </div >
  );
}

export function PyLogo(props: LogoPropType) {
  return (
    <div className={`max-w-[${props.w}px] max-h-[${props.h}px]`}>
      <Image
        width={props.w}
        height={props.h}
        src={pyLogo}
        alt="logo de Python"
      />
    </div>
  );
}

export function DjangoLogo(props: LogoPropType) {
  return (
    <div className={`max-w-[${props.w}px] max-h-[${props.h}px] mt-3`}>
      <Image
        width={props.w}
        height={props.h}
        src={djangoLogo}
        alt="logo de Django"
      />
    </div>
  );
}

export function TsLogo(props: LogoPropType) {
  return (
    <div>
      <Image
        width={props.w}
        height={props.h}
        src={tsLogo}
        alt={"Logo de TypeScript"}
      />
    </div>
  );
}

export function PostSQLLogo(props: LogoPropType) {
  return (
    <div>
      <Image
        width={props.w}
        height={props.h}
        src={postLogo}
        alt={"PostgreSQL Logo"}
      />
    </div>
  );
}

export function HTMLLogo(props: LogoPropType) {
  return (
    <div>
      <Image
        width={props.w}
        height={props.h}
        src={HTMLLogoSrc}
        alt={"HTML Logo"}
      />
    </div>
  );
}

export function CSSLogo(props: LogoPropType) {
  return (
    <div>
      <Image
        width={props.w}
        height={props.h}
        src={CSSLogoSrc}
        alt={"CSS Logo"}
      />
    </div>
  );
}
export function JsLogo(props: LogoPropType) {
  return (
    <div>
      <Image
        width={props.w}
        height={props.h}
        src={JsLogoSrc}
        alt={"JavaScript Logo"}
      />
    </div>
  );
}
export function CienciaLogo(props: LogoPropType) {
  return (
    <div>
      <Image
        width={props.w}
        height={props.h}
        src={cienciaLogoSrc}
        alt={"Logo de ciencia"}
      />
    </div>
  );
}

export function DockerLogo(props: LogoPropType) {
  return (
    <div>
      <Image
        width={props.w}
        height={props.h}
        src={DockerLogoSrc}
        alt={"Logo de Docker"}
      />
    </div>
  );
}
export function EmprenderLogo(props: LogoPropType) {
  return (
    <div>
      <Image
        width={props.w}
        height={props.h}
        src={emprenderLogoSrc}
        alt={"Logo de emprendimiento"}
      />
    </div>
  );
}
export const LogoGithub = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="false"
      className="h-[38px] w-auto fill-slate-900"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
      ></path>
    </svg>
  );
};
