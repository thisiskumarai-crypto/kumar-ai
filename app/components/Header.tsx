"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-black px-8 md:px-24 py-6"
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <span className="text-sm font-medium tracking-tight">
          KumaR AI
        </span>

        <a
          href="#"
          className="text-sm text-white/60 hover:text-white transition"
        >
          Contact
        </a>
      </div>
    </motion.header>
  );
}
