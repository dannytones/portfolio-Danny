import Hero from "@/components/Hero";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <div className="absolute top-5 right-5 z-20">
          <ThemeSwitcher /> {/* 👈 Компонент для тестування */}
        </div>
        <Hero />
      </div>
    </main>
  );
}
