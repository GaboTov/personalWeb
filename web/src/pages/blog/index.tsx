import NavBar from "@/components/NavBar";

const Blog = () => {
  return (
    <main>
      <NavBar />
      <article>
        <h1>Titulo</h1>
        <p>Acá comparto mis pensamiento o experiencias</p>
      </article>

      <article>
        <ol>
          <li>Entrada 1</li>
          <li>Entrada 2</li>
          <li>Entrada 3</li>
          <li>Entrada 4</li>
        </ol>
      </article>
    </main>
  );
};

export default Blog;
