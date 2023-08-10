import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav>
      <ol className={`flex flex-row justify-end mr-8 p-8 `}>
        <li
          className={`mr-10 ${
            pathname == "/" ? "text-slate-400" : "text-black"
          } hover:scale-125 transform transition-transform duration-200`}
        >
          <Link href={"/"}>Inicio</Link>
        </li>
        <li
          className={`${
            pathname == "/blog" ? "text-slate-400" : "text-black"
          } hover:scale-125 transform transition-transform duration-200`}
        >
          <Link href={"/blog"}>Blog</Link>
        </li>
      </ol>
    </nav>
  );
};

export default NavBar;
