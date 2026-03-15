import { Container } from '@mui/material';
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from './Navbar';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <Navbar />
      <Container maxWidth="lg" className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <ThemeToggle />
          <LanguageToggle />
        </div>
        {children}
      </Container>
    </div>
  );
}
