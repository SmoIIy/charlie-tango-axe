import { Inter, Poppins, Libre_Baskerville } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"],
weight: ['400', '700'] });
const libre_baskervile = Libre_Baskerville({ subsets: ["latin"],
weight: ['400', '700'] });

export const metadata = {
  title: "Diversa - Accessibility made easy",
  description: "Diversa is a website that easy and quickly scans your target webpage, and analyses how accesible it is ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={poppins.className}>
        <nav className="m-auto flex gap-4 py-8">
        
        </nav>
        {children}
        </body>
    </html>
  );
}
