export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <span className="inline-block mb-4 px-4 py-1 rounded-full border border-white/20 text-sm text-white/70">
          AI Automation Agency
        </span>

        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          KumaR AI
        </h1>

        <p className="mt-6 text-lg text-white/70">
          We automate calls, messages, and business processes using artificial
          intelligence so you can get more clients without hiring more staff.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="px-8 py-4 rounded-xl bg-white text-black font-semibold hover:scale-105 transition"
          >
            Book a demo
          </a>

          <a
            href="#"
            className="px-8 py-4 rounded-xl border border-white/30 text-white hover:bg-white/10 transition"
          >
            See how it works
          </a>
        </div>
      </div>
    </main>
  );
}