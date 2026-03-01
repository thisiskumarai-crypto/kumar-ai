import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "kumaR aI",
  description: "AI Automation Studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative bg-black text-white overflow-x-hidden">

        {/* ===== MORADO GLOBAL (TODAS LAS PÁGINAS) ===== */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="absolute inset-0 bg-black" />

          <div
            className="
              absolute -top-[40%] -left-[30%] w-[900px] h-[900px]
              bg-purple-500/40 rounded-full blur-[200px]
            "
          />

          <div
            className="
              absolute top-[10%] right-[-30%] w-[800px] h-[800px]
              bg-purple-600/30 rounded-full blur-[220px]
            "
          />

          <div
            className="
              absolute bottom-[-40%] left-[20%] w-[1000px] h-[1000px]
              bg-indigo-500/30 rounded-full blur-[240px]
            "
          />
        </div>

        <Header />
        {children}

      </body>
    </html>
  );
}