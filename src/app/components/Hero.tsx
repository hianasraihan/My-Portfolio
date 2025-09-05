"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Hero() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="Home"
      className={`relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-12 sm:py-16 md:py-20 bg-white text-[#222] overflow-hidden ${inter.className}`}
    >
      {/* Wrapper Teks */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-4">
          <span className="text-[#111]">
            Hello! I am <br /> Anas Raihan Aprianto
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 max-w-2xl leading-relaxed mb-8">
          Full Stack Developer based in Jakarta, Indonesia 
        </p>

        {/* Tombol Aksi */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => scrollToSection("Projects")}
            className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full shadow-lg text-base font-semibold transition shadow-md"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection("Contact")}
            className="border border-black text-gray-700 hover:bg-black hover:text-white shadow-lg px-8 py-3 rounded-full text-base font-semibold transition"
          >
            Contact Me
          </button>
        </div>

        {/* Icon Sosial Media */}
        <div className="mt-6 flex gap-6 text-3xl text-gray-700">
          <a
            href="https://github.com/hianasraihan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/anasraihan00/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0A66C2] transition transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
