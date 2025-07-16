"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

export default function RunningText() {
  const items = [
    "Frontend Developer",
    "Next.js Enthusiast",
    "Web Developer",
    "Mobile Friendly",
    "Always Learning",
  ];

  const combinedItems = [...items, ...items]; // 2x agar loop seamless

  return (
    <div className="overflow-hidden bg-sky-400 text-white py-2 w-full">
      <motion.div
        className={`flex gap-8 whitespace-nowrap text-xl font-semibold w-max ${poppins.variable} font-poppins`}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {combinedItems.map((item, index) => (
          <React.Fragment key={index}>
            <span>{item}</span>
            <Image
              src="/world.png"
              alt="icon"
              width={20}
              height={20}
              className="inline-block"
            />
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
