"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Blue Line AutoCare",
    description: "Made an easy-to-use website for a car and bike detailing service — all the info in one place.",
    image: "/projects1.png",
    url: "https://blue-line-pearl.vercel.app/",
  },
  {
    title: "Agency Ancak Studios",
    description: "A clean, modern site that shows what the agency does and the cool stuff they've worked on.",
    image: "/projects2.png",
    url: "https://ancak-studios.vercel.app/",
  },
  {
    title: "Retro Clean",
    description: "Built a cool site for a sneaker cleaning service that brings your shoes back to life.",
    image: "/projects3.png",
    url: "https://retroclean.vercel.app/",
  },
  {
    title: "Food Shop",
    description: "A modern food website with a clean, responsive design and easy online ordering.",
    image: "/projects4.png",
    url: "https://omah-jamu.vercel.app/",
  },
  {
    title: "Still Travel Bali",
    description: "Built a stylish Bali travel hub — all tours and rides in one click.",
    image: "/projects5.png",
    url: "https://www.still-travel.com/",
  },
];

export default function Projects() {
  return (
    <section
      id="Projects"
      className="py-20 px-4 text-center bg-gray-100 text-slate-300"
    >
      {/* Judul */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-semibold text-black mb-4"
      >
        Projects
      </motion.h2>

      {/* Deskripsi */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-10 text-gray-700"
      >
       Here are some cool projects Ive worked on.
      </motion.p>

      {/* Grid Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-black rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:ring-2 hover:ring-black flex flex-col"
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
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-white mb-4">{project.description}</p>
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto bg-white hover:bg-green-600 text-black hover:text-white px-4 py-2 rounded-full text-sm font-semibold transition self-start"
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
