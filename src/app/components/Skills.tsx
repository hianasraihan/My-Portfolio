"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa";

const skills = [
  { name: "React", image: "/react.jpg" },
  { name: "Next.js", image: "/nextjs.jpg" },
  { name: "Tailwind CSS", image: "/tailwind.jpg" },
  { name: "Vite.js", image: "/vite.jpg" },
  { name: "JavaScript", image: "/js.jpg" },
  { name: "TypeScript", image: "/ts.jpg" },
  { name: "Html", image: "/html.jpg" },
  { name: "Css", image: "/css.jpg" },
  { name: "Github", image: "/github.jpg" },
  { name: "Python", image: "/python.jpg" },
  { name: "Node.js", image: "/nodejs.jpg" },
  { name: "Vercel", image: "/vercel.jpg" },
  
];

const certifications = [
  {
    title: "Full-Stack Web Development",
    issuer: "Binar Academy",
    image: "/Sertifikat2.jpg",
  },
  {
    title: "Participant - BRAND’S LAB: A Recipe For Brand Distinction",
    issuer: "OWL Club - Universitas Prasetiya Mulya",
    image: "/Sertifikat1.jpg",
  },
  {
    title: "Full-Stack Web Development",
    issuer: "Purwadhika Digital School",
    image: "/Sertifikat3.jpg",
  },
  {
    title: "AI-Enhanced Full Stack Developer",
    issuer: "Hacktiv8",
    image: "/Sertifikat4.jpg",
  }
];

const education = [
  {
    degree: "Social Sciences",
    school: "High School 18 Bekasi",
    year: "May 2021 - May 2024",
  },
  {
    degree: "AI-Enhanced Full Stack Developer",
    school: "Hacktiv8",
    year: "September 2024 - December 2024",
  },
  {
    degree: "Full Stack Web Development",
    school: "Purwadhika Digital School",
    year: "Febuary 2025 - July 2025",
  },
];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("Skills");
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section
      id="Skills"
      className="py-20 px-4 bg-gray-100 text-slate-300 text-center"
    >
      {/* Judul */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-semibold text-black mb-6"
      >
        {activeTab}
      </motion.h2>

      {/* Tab Navigation */}
      <div className="flex justify-center space-x-4 mb-10">
        {["Skills", "Education", "Certifications"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeTab === tab
                ? "bg-green-600 text-white"
                : "bg-black hover:bg-slate-600 text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Skills */}
      {activeTab === "Skills" && (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 mb-2 rounded-xl bg-slate-100 flex items-center justify-center shadow-md">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-8 sm:w-10 h-auto"
                />
              </div>
              <span className="text-sm text-gray-700">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      )}

      {/* Education */}
      {activeTab === "Education" && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 max-w-2xl mx-auto"
        >
          {education.map((edu, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-xl shadow-md text-left"
            >
              <h3 className="text-lg font-semibold text-black">
                {edu.degree}
              </h3>
              <p className="text-sm text-gray-700">{edu.school}</p>
              <p className="text-xs text-gray-700">{edu.year}</p>
            </div>
          ))}
        </motion.div>
      )}

      {/* Certifications */}
      {activeTab === "Certifications" && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-black rounded-xl overflow-hidden shadow-md text-left group"
            >
              {/* Gambar Sertifikat */}
              <div className="relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-40 object-cover transition duration-300 lg:group-hover:blur-sm"
                />

                {/* Klik sertifikat untuk mobile/tablet */}
                <button
                  onClick={() => setSelectedCert(cert.image)}
                  className="block lg:hidden absolute inset-0"
                  aria-label="Open certificate"
                />

                {/* Ikon mata dan blur hanya saat hover di desktop */}
                <button
                  onClick={() => setSelectedCert(cert.image)}
                  className="absolute inset-0 hidden lg:flex items-center justify-center transition duration-300 bg-transparent lg:group-hover:bg-black/40"
                >
                  <FaEye className="text-white text-xl opacity-0 lg:group-hover:opacity-100 transition" />
                </button>
              </div>

              <div className="p-4">
                <h4 className="text-md font-semibold text-white">
                  {cert.title}
                </h4>
                <p className="text-sm text-white">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
        >
          <div className="max-w-3xl w-full p-4">
            <img
              src={selectedCert}
              alt="Certificate Preview"
              className="w-full h-auto rounded-xl shadow-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
