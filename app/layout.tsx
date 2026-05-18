import type { Metadata } from "next";
import { Geist, Geist_Mono, Great_Vibes, Montserrat, Playfair_Display, Permanent_Marker, Bebas_Neue, Finger_Paint } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  weight: "400",
  variable: "--font-great-vibes",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  variable: "--font-permanent-marker",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

const fingerPaint = Finger_Paint({
  weight: "400",
  variable: "--font-finger-paint",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pizza Website",
  description: "The Art of Fire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${greatVibes.variable} ${montserrat.variable} ${playfair.variable} ${permanentMarker.variable} ${bebasNeue.variable} ${fingerPaint.variable} h-full antialiased scroll-smooth`}
    >
      <body className={`${bebasNeue.variable} ${fingerPaint.variable} min-h-full flex flex-col`}>{children}</body>
    </html>
  );
}
