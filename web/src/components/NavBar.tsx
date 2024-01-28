import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav className="fixed w-[100%] h-[60px] mb-8 bg-[#9cacc954] align-middle rounded" >
      <ol className={`flex flex-row justify-end mr-8 p-4 `}>
        <li
          className={`mr-10 ${pathname == "/" ? "text-blue-500" : "text-black"
            } flex flex-row mb-0 y-0 text-lg font-bold px-1 ml-3 text-[20px] hover:scale-125 transform transition-transform duration-200`}
        >
          <Link href={"/"}>Inicio</Link>
        </li>
        <li
          className={`${pathname == "/blog" ? "text-blue-500" : "text-black"
            } 
          flex flex-row mb-0 y-0 text-lg font-bold px-1 ml-3 text-[20px] hover:scale-125 transform transition-transform duration-200`}
        >
          <Link href={"/blog"}>Blog</Link>
        </li>
      </ol>
    </nav>
  );
};

export default NavBar;
