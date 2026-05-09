import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sohail Amr Anwar | Portfolio',
  description: 'AI Integration Specialist, Full-Stack Developer, and Growth Designer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-[#050505] text-white selection:bg-emerald-500/30`}>
        {children}
      </body>
    </html>
  );
}

