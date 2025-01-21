import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import {WalletProvider} from './context/WalletContext'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PeerRamp - Your Ramp to Financial Freedom',
  description: 'A Web3-enabled peer-to-peer lending platform connecting student borrowers and lenders.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <WalletProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        </WalletProvider>
      </body>
    </html>
  );
}