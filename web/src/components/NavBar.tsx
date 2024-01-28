import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {

  const pathname = usePathname();

  return (
    <nav className="fixed w-[100%] h-[60px] mb-8 bg-[#9cacc9ed] align-middle rounded" >
      <ol className={`flex flex-row justify-end mr-8 p-4 `}>
        <li>

          <button onClick={() => {
            const htmlElement = document.querySelector("html");

            if (htmlElement) {
              if (htmlElement.classList.contains("dark")) {
                htmlElement.classList.remove("dark");
                htmlElement.classList.add("light");
              } else {
                htmlElement.classList.remove("dark");
                htmlElement.classList.add("dark");
              }
            }
          }}>
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 mr-6">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z" className="fill-transparent"></path>
              <path d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5
                5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 
                6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 
                7.622-5.537l-1.897-.632Z" className="fill-blue-400 dark:fill-blue-900"></path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1
                1 0 0 1 1-1Z" className="fill-blue-400 dark:fill-blue-800"></path>
            </svg>
          </button>

        </li>
        <li
          className={`mr-10 ${pathname == "/" ? "text-blue-500 dark:text-blue-900" : "text-black dark:text-slate-200"
            } flex flex-row mb-0 y-0 text-lg font-bold px-1 ml-3 text-[20px] hover:scale-125 transform transition-transform duration-200 `}
        >
          <Link href={"/"}>Inicio</Link>
        </li>
        <li
          className={`${pathname == "/blog" ? "text-blue-500 dark:text-blue-900" : "text-black dark:text-slate-200"
            } 
          flex flex-row mb-0 y-0 text-lg font-bold px-1 ml-3 text-[20px] hover:scale-125 transform transition-transform duration-200`}
        >
          <Link href={"/blog"}>Blog</Link>
        </li>
      </ol>
    </nav >
  );
};

export default NavBar;
