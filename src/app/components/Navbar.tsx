"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaCode,
  FaEnvelope,
} from "react-icons/fa";

const navItems = [
  { label: "Home", id: "Home", icon: <FaHome /> },
  { label: "About", id: "About", icon: <FaUser /> },
  { label: "Projects", id: "Projects", icon: <FaProjectDiagram /> },
  { label: "Skills", id: "Skills", icon: <FaCode /> },
  { label: "Contact", id: "Contact", icon: <FaEnvelope /> },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false); // Tutup menu dulu
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 250); // Delay agar tidak tabrakan dengan animasi menu tutup
  };

  // Cegah scroll body saat menu mobile terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-800 shadow-md backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-blue-400 font-semibold text-lg flex items-center gap-2">
          <span className="text-xl">&lt;/&gt;</span>
          <span className="whitespace-nowrap text-base italic sm:text-lg md:text-xl">
            My Portfolio
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="flex items-center gap-1 px-3 py-1 rounded-md text-blue-400 hover:text-sky-500 transition-colors font-medium"
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        {/* Hamburger Button (Mobile Only) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-slate-800 px-6 pt-4 pb-6 space-y-4 text-center overflow-hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex justify-center items-center gap-2 w-full text-blue-400 hover:text-sky-500 font-medium transition-colors"
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
