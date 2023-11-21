import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ultra-v1',
  description: `Embark on a coding journey! We empower students, foster development
  skills across diverse tech domains. Dive into real-world experience`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#090909] text-white">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
