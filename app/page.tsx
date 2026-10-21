import { Navbar } from "@/components/NavBar";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return(
    <main className="min-h-screen bg-[#0b0f19]">
      <Navbar/>
      <Hero />

      {/**Espacio para las procimas secciones (Proyectos, Sobre mi, etc.) */}
    </main>
  );
}