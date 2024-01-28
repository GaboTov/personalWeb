import { Experience } from "@/components/Expereincie";
import GameLife from "@/components/GameFile";
import NavBar from "@/components/NavBar";
import { ExperienceType } from "@/types/types";
import { FC } from "react";
import { useState } from "react";

type DataBlog = {
  results: ExperienceType[];
  next_cursor: string
}

type PropsBlog = {
  data: DataBlog
}

const Blog: FC<PropsBlog> = ({ data }) => {

  const [entrances, setEntrances] = useState<ExperienceType[]>(data.results)
  const [nextCursor, setNextCursor] = useState<string>(data.next_cursor)
  const [loading, setLoading] = useState<boolean>(false)
  const loadMore = async () => {
    setLoading(true)
    if (nextCursor) {
      try {
        const url = `api/notion${nextCursor ? `?startCursor=${nextCursor}` : ''}`;
        const res = await fetch(url);
        const data = await res.json();
        if (!!data) {

          setEntrances([...entrances, ...data.results]);
          setNextCursor(data.next_cursor);
          setLoading(false)
        }
      } catch (error) {
        console.error("Bad request", error);
      }
    }
  };

  return (
    <>
      <GameLife />
      <NavBar />
      <main className="flex flex-col items-center dark:bg-[#3d3d3dd1]">
        <div className="flex flex-col items-center max-w-[1100px] mt-[100px]">
          <div className="bdBlogImage w-[100%] mb-16 text-white px-20 py-10 rounded-[10px] bg-cover bg-center align-center mt-10">
            <h1 className="text-4xl mb-5 ">
              Pensamientos mas o menos desarrollados
            </h1>
            <p>
              Un lugar para compartir mis inquietudes, aprendizajes,
              experiencias y opiniones.
            </p>
          </div>

          <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10 items-start mt-[50px]">
            {entrances?.map((entrance: ExperienceType) => (
              <div key={entrance.title}>
                <Experience
                  img={entrance.img}
                  title={entrance.title}
                  position={entrance.position}
                  exp={entrance.exp}
                  tec={entrance.tec}
                  link={entrance?.link}
                >
                  {entrance.content}
                </Experience>
              </div>
            ))}
          </article>
          {!!nextCursor && (
            <button onClick={() => loadMore()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-5 rounded">
              {!loading ? "Mas.." : "Cargando ..."}
            </button>
          )}
        </div>
      </main>
    </>
  );
};

export default Blog;

export async function getServerSideProps() {
  const res = await fetch('https://personal-web-tawny-alpha.vercel.app/api/notion')
  const data = await res.json()
  return { props: { data } }
}
