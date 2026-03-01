"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-8 px-8 py-3 rounded-full
        bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_80px_rgba(124,124,255,0.25)]">

        <span className="font-medium">brammaL</span>

        <Link href="#home" className="text-white/70 hover:text-white">
          Home
        </Link>
        <Link href="#pricing" className="text-white/70 hover:text-white">
          Pricing
        </Link>
        <Link href="#contact" className="text-white/70 hover:text-white">
          Contact
        </Link>
      </nav>
    </header>
  );
}