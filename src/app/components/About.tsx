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
      className="py-20 px-4 text-center bg-slate-900 text-slate-300"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl lg:text-4xl text-blue-400 font-semibold mb-6"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed mb-10"
      >
        Hey there! Im a <strong className="text-blue-400">Frontend Developer</strong> who loves building clean, modern websites that not only look good but are super easy to use. I usually work with{" "}
        <strong className="text-blue-400">React</strong>,{" "}
        <strong className="text-blue-400">Next.js</strong>,{" "}
        <strong className="text-blue-400">TypeScript</strong>, and{" "}
        <strong className="text-blue-400">Tailwind CSS</strong> — basically the stuff that helps me make fast and responsive sites that work great on any screen.
        <br /><br />
        Im really into adding little animations and smooth interactions to make things feel more fun and alive. Im all about good <strong className="text-blue-400">user experience</strong>, so I try to make everything simple, fast, and accessible for everyone.
        <br /><br />
        Whether its a cool landing page or a full web app, I just enjoy turning ideas into something people can actually click around and enjoy.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="flex justify-center gap-4 flex-wrap"
      >
        <a
          href="/Anas-Raihan-Aprianto-CV.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-400 text-slate-900 font-medium rounded-full shadow-lg transition-all text-sm sm:text-base"
        >
          <Download size={18} />
          Download CV
        </a>

        <button
          onClick={() => setShowCV(true)}
          className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-slate-900 font-medium rounded-full shadow-lg transition-all text-sm sm:text-base"
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
              className="relative bg-white p-4 rounded-lg shadow-xl w-full max-w-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowCV(false)}
                className="absolute top-2 right-2 z-10 text-slate-700 hover:text-red-500"
              >
                <X size={24} />
              </button>

              <div className="w-full aspect-[9/16] relative rounded-md overflow-hidden">
                <Image
                  src="/AnasRaihanApriantoCV.jpg"
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
