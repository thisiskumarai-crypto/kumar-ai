import "./globals.css";

export const metadata = {
  title: "quazieR — AI Automation Studio",
  description: "AI automation systems that answer calls, respond to messages, and follow up with leads automatically.",
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "facebook-domain-verification": "0dhltpo21kykz6096pqobw2cvzm30e",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="relative bg-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}