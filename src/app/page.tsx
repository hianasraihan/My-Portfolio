// app/page.tsx
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Projects from "@/app/components/Projects";
import Skills from "@/app/components/Skills";
import Contact from "@/app/components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RunningText from "./components/RunningText";

export default function Home() {
  return (
    <main className="bg-white text-black dark:bg-black dark:text-white transition-all duration-300">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <RunningText />
      <Footer />
      <Navbar />
    </main>
  );
}
