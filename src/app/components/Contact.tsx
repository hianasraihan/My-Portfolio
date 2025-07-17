"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Github, Linkedin, Phone } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const icons = [
    {
      icon: <Github size={28} />,
      href: "https://github.com/hianasraihan",
      label: "GitHub",
      desc: "Explore my code & projects",
      color: "#181717",
    },
    {
      icon: <Linkedin size={28} />,
      href: "https://www.linkedin.com/in/anasraihan00/",
      label: "LinkedIn",
      desc: "Let's connect professionally",
      color: "#0077B5",
    },
    {
      icon: <Instagram size={28} />,
      href: "https://www.instagram.com/rrheanss/",
      label: "Instagram",
      desc: "My visual journal & life updates",
      color: "#E1306C",
    },
    {
      icon: <Phone size={28} />,
      href: "https://wa.me/6281282302245",
      label: "WhatsApp",
      desc: "Chat me directly on WhatsApp",
      color: "#25D366",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="Contact" className="py-20 px-4 bg-slate-900 text-slate-800">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-center text-blue-400 mb-10"
      >
        Contact Me 
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* KIRI: Sosial Media */}
        <div className="space-y-4">
          {icons.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.4,
                type: "spring",
                stiffness: 600,
                damping: 9,
              }}
              className="flex items-center p-4 bg-slate-800 text-sky-500 border rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white mr-4"
                style={{ backgroundColor: item.color }}
              >
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{item.label}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* KANAN: Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4,
            type: "spring",
            stiffness: 60,
            damping: 12,
          }}
          className="bg-slate-800 p-6 rounded-lg shadow-lg space-y-4 max-w-md"
        >
          <div>
            <label className="block text-sm text-slate-300 mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              className="w-full px-4 py-2 rounded bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Your Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Your Message</label>
            <textarea
              name="message"
              rows={4}
              required
              placeholder="Write your message here..."
              className="w-full px-4 py-2 rounded bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-sky-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Send ➤"}
          </button>

          {status === "success" && (
            <p className="text-green-600 text-sm pt-2">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-sm pt-2">Something went wrong. Try again.</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
