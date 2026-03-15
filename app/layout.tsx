import "./globals.css";
import Script from "next/script";

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

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="beforeInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '4281485712125763');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{display:"none"}}
            src="https://www.facebook.com/tr?id=4281485712125763&ev=PageView&noscript=1"
          />
        </noscript>

      </head>
      <body className="relative bg-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}