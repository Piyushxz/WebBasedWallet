import type { Metadata } from "next";
import { Manrope} from "next/font/google";
import "./globals.css";




const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "xVault",
  description: "Web based wallet ",
  icons :"https://png.pngtree.com/png-vector/20210313/ourmid/pngtree-letter-x-logo-png-png-image_3045052.jpg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} `}
      >
        {children}
        
      </body>
    </html>
  );
}
