import type { Metadata } from 'next';
// next/font includes built-in automatic self-hosting for fonts. That can optimally load web fonts with the best performance.
import { Archivo } from 'next/font/google';

import './globals.css';

const archivo = Archivo({
  display: 'swap',
  weight: 'variable',
  subsets: ['latin'],
  variable: '--font-archivo',
});

export const metadata: Metadata = {
  title: 'ChihTeng Ma Portfolio',
  description:
    'Welcome to my portfolio website! This modern, minimalist single-page portfolio was created following the Frontend Tribe YouTube channel tutorial. It showcases my work and skills in a clean, elegant design.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 
      Antialiased:  Smooths out the edges of text and images, making them look sharper.
      */}
      <body className={`bg-stone-200 text-stone-900 antialiased ${archivo.variable} font-archivo`}>
        {children}
      </body>
    </html>
  );
}
