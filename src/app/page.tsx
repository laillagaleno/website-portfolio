import { About } from "@/pages/about";
import { Cases } from "@/pages/cases";
import HomeSection from "@/pages/home"
import { Services } from "@/pages/services";

export default function Home() {
  return (
    <main className="w-full px-6">
      <HomeSection/>
      <Cases/>
      <About/>
      <Services/>
    </main>
  );
}
