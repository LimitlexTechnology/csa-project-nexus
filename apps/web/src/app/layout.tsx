import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CSA ONE - Climate Intelligence for Sustainable Agriculture',
  description: 'Future-Proof Your Farm with Climate Intelligence',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
