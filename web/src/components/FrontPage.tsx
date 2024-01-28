import Experiences from "./Experiences";
import Formaciones from "./Formaciones";
import Logos from "./Logos";
const FrontPage = () => {
  return (
    <article
      className={` flex min-h-screen  flex-col items-center justify-between p-3 pt-10 `}
    >
      <section className="flex justify-center flex-col my-[105px]">
        <img
          className={"h-auto w-64 rounded-full py-5 px-5 object-cover"}
          src="https://i.imgur.com/2y7OgjG.png"
          alt="Perfile pick"
        />
        <div className="px-4">
          <p className="text-3xl">Gabo Tovar</p>
          <p className="text-xs">FullStack Developer | Científico ambiental</p>
        </div>

        <Logos />
      </section>

      <Experiences />
      <Formaciones />
      <footer className="mt-[2em] ">Hecho por Gabo Tovar</footer>
    </article>
  );
};

export default FrontPage;
