import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Steven Asante-Poku Jnr | Cloud & AI Professional",
  description: "A hyper-modern, minimalist, and high-performance portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-black text-white selection:bg-white/20 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
