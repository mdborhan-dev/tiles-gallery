import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserratFont = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tilora - Find all the tiles you need",
  description: "Tilora - Find all the tiles you need",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserratFont.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
