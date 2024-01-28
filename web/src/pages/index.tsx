import FrontPage from "@/components/FrontPage";
import NavBar from "@/components/NavBar";
import GameLife from "@/components/GameFile";
export default function Home() {
  return (
    <main className="dark:bg-[#3d3d3dd1]">
      <GameLife />
      <NavBar />
      <FrontPage />
    </main>
  );
}
