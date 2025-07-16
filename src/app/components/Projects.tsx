"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Website Blue Line AutoCare",
    description: "Made an easy-to-use website for a car and bike detailing service — all the info in one place.",
    image: "/projects1.png",
    url: "https://blue-line-pearl.vercel.app/",
  },
  {
    title: "Website Agency Ancak Studios",
    description: "A clean, modern site that shows what the agency does and the cool stuff they've worked on.",
    image: "/projects2.png",
    url: "https://ancak-studios.vercel.app/",
  },
  {
    title: "Website Retro Clean",
    description: "Built a cool site for a sneaker cleaning service that brings your shoes back to life.",
    image: "/projects3.png",
    url: "https://retroclean.vercel.app/",
  },
  {
    title: "Website Food Shop",
    description: "A modern food website with a clean, responsive design and easy online ordering.",
    image: "/projects4.png",
    url: "https://omah-jamu.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="Projects"
      className="py-20 px-4 text-center bg-slate-900 text-slate-300"
    >
      {/* Judul */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-semibold text-blue-400 mb-4"
      >
        Projects
      </motion.h2>

      {/* Deskripsi */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-10 text-slate-400"
      >
       Here are some cool projects I've worked on.
      </motion.p>

      {/* Grid Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-slate-800 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,200,255,0.25)] hover:ring-2 hover:ring-sky-400/60 flex flex-col"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
              ease: [0.30, 0.8, 0.30, 3], // cubic-bezier for smooth
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-left flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-400">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4">{project.description}</p>
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto bg-sky-500 hover:bg-sky-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold transition self-start"
              >
                Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
