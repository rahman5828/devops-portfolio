import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdul Rahman — DevOps & Cloud Engineer",
  description:
    "Interactive portfolio terminal. DevOps, cloud infrastructure, platform engineering. Type help to begin.",
  openGraph: {
    title: "Abdul Rahman — DevOps & Cloud Engineer",
    description:
      "Explore projects, experience, and skills through a portfolio shell.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistMono.variable} h-full`}>
      <body className="min-h-full font-mono antialiased">{children}</body>
    </html>
  );
}
