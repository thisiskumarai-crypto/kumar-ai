"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50
                 bg-black/70 backdrop-blur
                 px-8 md:px-24 py-6"
    >
      <nav className="max-w-[1100px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <span className="text-sm font-medium tracking-tight">
          <span className="text-[color:var(--accent)]">kumaR</span>{" "}
          <span className="text-white/70">ai</span>
        </span>

        {/* Nav */}
        <a
          href="#"
          className="text-sm text-white/60 transition-all hover:text-white"
        >
          Contact
        </a>
      </nav>
    </motion.header>
  );
}

