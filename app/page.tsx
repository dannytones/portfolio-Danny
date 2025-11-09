import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <div className="absolute top-5 right-5 z-20"></div>
        <FloatingNav navItems={navItems} />
        <Hero />
        <Experience />
        <Grid />
        <RecentProjects />
        {/* <Clients /> */}
        <Footer />
      </div>
    </main>
  );
}
