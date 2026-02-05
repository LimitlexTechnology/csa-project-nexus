import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';

export const metadata: Metadata = {
  title: "CSA Hub | Climate Smart Agriculture",
  description: "A climate-smart agriculture nexus empowering farmers with real-time intelligence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body><Providers>{children}</Providers></body>
    </html>
  );
}
