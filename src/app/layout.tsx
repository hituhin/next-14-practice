import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next App',
  description: 'Generated by create next app',
};

type ObjectType = {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: ObjectType) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}
