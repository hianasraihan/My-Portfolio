"use client";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center text-center lg:text-left gap-10 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-20 bg-slate-900 text-slate-300 overflow-hidden"
    >
      {/* Foto Profil dengan efek gradasi berputar dan aura */}
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  className="relative group overflow-visible
             w-40 h-40
             sm:w-52 sm:h-52
             md:w-60 md:h-60
             lg:w-[288px] lg:h-[350px] 
             rounded-full 
             lg:rounded-[120px/100px]"
>



        {/* Efek Gradasi Muter */}
        <div className="absolute inset-0 z-0 rounded-full animate-spin-slow">
          <div className="w-full h-full rounded-full bg-[conic-gradient(at_top_left,_#60a5fa,_#3b82f6,_#60a5fa,_#60a5fa)] blur-sm brightness-150 saturate-200 opacity-100 shadow-[0_0_50px_#60a5fa]" />
        </div>

        {/* Efek Aura Flicker */}
        <div className="absolute inset-0 z-0 rounded-full animate-flicker">
          <div className="w-full h-full rounded-full bg-blue-400/10 blur-[6px] shadow-[0_0_30px_#60a5fa] saturate-[2]" />
        </div>

        {/* Foto Profil */}
        <div className="relative z-10 w-full h-full rounded-full overflow-hidden bg-slate-900 border border-blue-400/40 shadow-[0_0_15px_#60a5fa]">
          <Image
            src="/pp.jpg"
            alt="Foto Profil"
            width={300}
            height={300}
            className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
          />
        </div>
      </motion.div>

      {/* Teks dan Tombol */}
      <div className="flex flex-col items-center lg:items-start">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6"
        >
          <span className="text-blue-400">Anas Raihan Aprianto</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-base sm:text-lg md:text-xl max-w-[680px] leading-relaxed"
        >
          <Typewriter
            words={["Frontend Developer"]}
            loop={Infinity}
            cursor
            cursorStyle="_"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </motion.p>

        {/* Tombol Aksi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="mt-8 flex gap-4 flex-col sm:flex-row"
        >
          <button
            onClick={() => scrollToSection("Projects")}
            className="bg-sky-500 hover:bg-sky-400 text-slate-900 px-6 py-3 rounded-full text-sm sm:text-base font-semibold transition"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection("Contact")}
            className="border border-sky-500 text-sky-500 px-6 py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-sky-400 hover:text-slate-900 transition"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Icon Sosial Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3 }}
          className="mt-6 flex gap-5 text-2xl text-slate-400"
        >
          <a
            href="https://github.com/hianasraihan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/anasraihan00/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
