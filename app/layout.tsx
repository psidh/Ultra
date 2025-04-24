import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });
import 'highlight.js/styles/github.css';


export const metadata: Metadata = {
  title: "Ultra | an ananta initiative",
  description: `Embark on a coding journey! We empower students, foster development
  skills across diverse tech domains. Dive into real-world experience`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body>
        <Navbar />
        <div className="h-[calc(5rem+10px)]" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
