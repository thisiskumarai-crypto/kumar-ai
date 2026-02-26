export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl md:text-6xl font-bold text-center">
        KumaR AI
      </h1>

      <p className="mt-6 text-gray-400 text-center max-w-xl text-lg">
        Automatizamos llamadas, mensajes y procesos para que tu negocio
        consiga más clientes sin contratar más personal.
      </p>

      <div className="mt-10 flex gap-4">
        <a
          href="#"
          className="px-8 py-4 bg-white text-black rounded-xl font-semibold hover:scale-105 transition"
        >
          Agenda una demo
        </a>

        <a
          href="#"
          className="px-8 py-4 border border-white/20 rounded-xl hover:bg-white/10 transition"
        >
          Ver cómo funciona
        </a>
      </div>
    </main>
  );
}