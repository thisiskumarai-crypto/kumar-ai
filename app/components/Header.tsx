"use client";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50
                 bg-black/80 backdrop-blur
                 px-8 md:px-24 py-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="flex items-center justify-between">
        <span className="text-white font-bold text-xl">kumaR AI</span>
        <div className="flex gap-8 text-white/80 text-sm tracking-widest uppercase">
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>
    </motion.header>
  );
}
