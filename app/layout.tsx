import type {Metadata} from 'next';
import { Inter, JetBrains_Mono, Orbitron, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'rudra_x_bomb - Next-Gen Platform',
  description: 'A highly advanced, futuristic, and magical UI/UX redesign.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${orbitron.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased bg-black text-white overflow-x-hidden" suppressHydrationWarning>{children}</body>
    </html>
  );
}
