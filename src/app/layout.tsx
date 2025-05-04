import type { Metadata } from "next";
import { Oooh_Baby, Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const ooohBaby = Oooh_Baby({
  weight: "400",
  variable: "--font-oooh-baby",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Subordinate Clause",
  description: "Your reading journey, well-structured",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} ${ooohBaby.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
