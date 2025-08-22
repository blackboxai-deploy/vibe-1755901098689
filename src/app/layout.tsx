import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hello World - Next.js App",
  description: "A beautiful Hello World application built with Next.js, TypeScript, and Tailwind CSS",
  keywords: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Hello World"],
  authors: [{ name: "Developer" }],
  creator: "Next.js App",
  publisher: "Next.js App",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('http://localhost:3000'),
  openGraph: {
    title: "Hello World - Next.js App",
    description: "A beautiful Hello World application built with Next.js, TypeScript, and Tailwind CSS",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hello World - Next.js App",
    description: "A beautiful Hello World application built with Next.js, TypeScript, and Tailwind CSS",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className="antialiased min-h-screen">
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}