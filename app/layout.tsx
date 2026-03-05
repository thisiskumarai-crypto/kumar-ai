import "./globals.css";
export const metadata = {
  title: "quazieR — AI Automation Studio",
  description: "AI automation systems that answer calls, respond to messages, and follow up with leads automatically.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative bg-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}