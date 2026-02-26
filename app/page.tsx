"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-8 md:px-24 pt-44 pb-32">
      <Header />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-[1100px]"
      >
        <motion.p
          variants={item}
          className="text-sm text-white/60 mb-6"
        >
          AI Automation Studio
        </motion.p>

        <motion.h1
          variants={item}
          className="text-[42px] md:text-[72px] font-medium leading-[1.05] tracking-tight"
        >
          We build AI systems that
          <br />
          generate clients on autopilot.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-10 text-[17px] md:text-[18px] text-white/70 max-w-[520px]"
        >
          kumaR ai helps service-based businesses automate calls, messages,
          and workflows using artificial intelligence.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-14 flex gap-10"
        >
          <a
            href="#"
            className="relative text-lg underline underline-offset-8 transition-all
                       after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0
                       after:bg-white after:transition-all hover:after:w-full"
          >
            Book a demo
          </a>

          <a
            href="#"
            className="text-lg text-white/60 transition-all hover:text-white hover:translate-x-0.5"
          >
            See how it works →
          </a>
        </motion.div>
      </motion.div>

      <Footer />
    </main>
  );
}
