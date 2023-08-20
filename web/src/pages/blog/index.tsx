import { Experience } from "@/components/Expereincie";
import NavBar from "@/components/NavBar";
import blogEntances from "@/data/blogEntrances";
const Blog = () => {
  return (
    <>
      <NavBar />
      <main className="flex flex-col items-center">
        <div className="flex flex-col items-center max-w-[1100px]">
          <div className="bdBlogImage w-[100%] mb-10 text-white px-20 py-10 rounded-[10px] bg-cover bg-center align-center mt-10">
            <h1 className="text-4xl mb-5 ">
              Pensamientos mas o menos desarrollados
            </h1>
            <p>
              Un lugar para compartir mis inquietudes, aprendizajes,
              experiencias y opiniones.
            </p>
          </div>

          <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10 items-start mt-[50px]">
            {blogEntances.map((entrance) => (
              <div key={entrance.title}>
                <Experience
                  title={entrance.title}
                  img={entrance.img}
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
        </div>
      </main>
    </>
  );
};

export default Blog;
