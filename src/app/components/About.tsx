"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Eye, X } from "lucide-react";
import Image from "next/image";

export default function About() {
  const [showCV, setShowCV] = useState(false);

  return (
    <section
      id="About"
      className="py-20 px-4 text-center bg-gray-100 text-gray-700"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl lg:text-4xl text-black font-semibold mb-6"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl leading-loose tracking-wide mb-10"
      >
        Im a <strong className="text-black">Video Editor</strong> and{" "}
        <strong className="text-black">Junior Full-Stack Developer</strong> who loves creating things that connect —
        whether its a story told through video or an experience built for the web.{" "}
        As a <strong className="text-black">CapCut expert</strong>, I focus on smooth transitions,
        clean pacing, and storytelling that keeps viewers engaged.{" "}
        On the tech side, I build responsive and dynamic web apps using{" "}
        <strong className="text-black">Next.js</strong>,{" "}
        <strong className="text-black">Tailwind CSS</strong>,{" "}
        <strong className="text-black">Node.js</strong>, and{" "}
        <strong className="text-black">Supabase</strong>, powered by{" "}
        <strong className="text-black">TypeScript</strong> for clean and reliable code.
        <br /><br />
        Im driven by the process of learning, creating, and making each project better —
        visually, technically, and for the people who use it.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="flex justify-center gap-4 flex-wrap"
      >
        <a
          href="/Anas Raihan Aprianto - Resume1.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 bg-black hover:bg-gray-800 text-white font-semibold rounded-full shadow-lg transition-all text-sm sm:text-base"
        >
          <Download size={18} />
          Download CV
        </a>

        <button
          onClick={() => setShowCV(true)}
          className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-black text-gray-700 hover:bg-black hover:text-white font-semibold rounded-full shadow-lg transition-all text-sm sm:text-base"
        >
          <Eye size={18} />
          Preview CV
        </button>
      </motion.div>

      <AnimatePresence>
        {showCV && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
            onClick={() => setShowCV(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-black p-4 rounded-lg shadow-xl w-full max-w-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowCV(false)}
                className="absolute top-2 right-2 z-10 text-white hover:text-red-500"
              >
                <X size={24} />
              </button>

              <div className="w-full aspect-[9/16] relative rounded-md overflow-hidden">
                <Image
                  src="/resume.png"
                  alt="CV Preview"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
