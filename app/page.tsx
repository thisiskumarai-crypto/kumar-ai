"use client";

import Header from "./components/Header";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-8 md:px-20 pt-40 pb-24">
      <Header />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-sm text-white/60 mb-6"
        >
          AI Automation Studio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-medium leading-tight tracking-tight"
        >
          We build AI systems that
          <br />
          generate clients on autopilot.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 text-lg text-white/70 max-w-xl"
        >
          KumaR AI helps service-based businesses automate calls, messages,
          and workflows using artificial intelligence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-12 flex gap-6"
        >
          <a
            href="#"
            className="text-lg underline underline-offset-8 hover:text-white/80 transition"
          >
            Book a demo
          </a>

          <a
            href="#"
            className="text-lg text-white/60 hover:text-white transition"
          >
            See how it works →
          </a>
        </motion.div>
      </motion.div>
    </main>
  );
}