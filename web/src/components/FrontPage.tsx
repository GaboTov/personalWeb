import { Experience } from "./Expereincie";
import Experiences from "./Experiences";
import Formaciones from "./Formaciones";
import Logos from "./Logos";
const FrontPage = () => {
  return (
    <>
      <section className="flex justify-center flex-col">
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

      <Experiences/>
      <Formaciones/> 
      <footer className="mt-[500px]">
        Aca va el footer
      </footer>
    </>
  );
};

export default FrontPage;
