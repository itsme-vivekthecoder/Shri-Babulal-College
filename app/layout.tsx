import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shri Babulal College | Top College for Academics & Excellence",
  description: "Shri Babulal College is a premier educational institution offering quality undergraduate and postgraduate programs with modern infrastructure, experienced faculty, and excellent placement opportunities.",
  keywords: "Shri Babulal College, college admissions, education, courses, programs, New Delhi, India",
  authors: [{ name: "Shri Babulal College" }],
  creator: "Shri Babulal College",
  publisher: "Shri Babulal College",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sblm.edu.in",
    siteName: "Shri Babulal College",
    title: "Shri Babulal College | Digital Campus",
    description: "Transforming Education Through Innovation - Join our thriving academic community.",
    images: [
      {
        url: "https://sblm.edu.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shri Babulal College",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shri Babulal College",
    description: "Transforming Education Through Innovation",
    creator: "@sblmcollege",
  },
  alternates: {
    canonical: "https://sblm.edu.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
