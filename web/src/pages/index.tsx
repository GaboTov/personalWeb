import FrontPage from "@/components/FrontPage";
import NavBar from "@/components/NavBar";
import GameLife from "@/components/GameFile";
export default function Home() {
  return (
    <main>
      <GameLife />
      <NavBar />
      <FrontPage />
    </main>
  );
}
