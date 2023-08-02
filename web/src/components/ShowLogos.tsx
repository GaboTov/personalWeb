import {
  DjangoLogo,
  PostSQLLogo,
  PyLogo,
  ReactLogo,
  TsLogo,
} from "./ReactLogo";

const ShowLogos = (props: {tec: string[]}) => {
  return (
    <section className="flex flex-row space-x-4 justify-end px-6 pb-5 ">
      {props.tec.includes("React") && (
        <ReactLogo
          w={30}
          h={30}
        />
      )}
      {props.tec.includes("Py") && (
        <PyLogo
          w={30}
          h={30}
        />
      )}
      {props.tec.includes("Django") && (
        <DjangoLogo
          w={30}
          h={15}
        />
      )}
      {props.tec.includes("Ts") && (
        <TsLogo
          w={30}
          h={30}
        />
      )}
      {props.tec.includes("post") && (
        <PostSQLLogo
          w={30}
          h={30}
        />
      )}
    </section>
  );
};

export default ShowLogos;