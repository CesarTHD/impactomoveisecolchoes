import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Impacto Móveis",
  description: "Loja de móveis que atende a região de Brasília e seu entorno.",
  icons: {
    icon: "/ic-logo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Playwrite+HU:wght@100..400&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&family=Varela+Round&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

        {/* <!-- Google Tag Manager --> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
                    (function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-PH6XL662');
                `,
          }}
        />
        {/* <!-- End Google Tag Manager --> */}
      </head>

      <body
        className={``}
      >
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PH6XL662"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `,
          }}
        />

        {children}
      </body>
    </html>
  );
}
