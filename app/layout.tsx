import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import { Toaster } from "sonner";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import "lenis/dist/lenis.css";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aagam Doshi | Lead Software Engineer",
  description:
    "Lead Software Engineer specializing in GenAI systems, distributed systems, and cloud architecture. Nearly a decade of experience building scalable, cloud-native platforms.",
  keywords: [
    "Aagam Doshi",
    "Software Engineer",
    "GenAI",
    "Distributed Systems",
    "Cloud Architecture",
    "AWS",
    "Serverless",
  ],
  authors: [{ name: "Aagam Doshi" }],
  openGraph: {
    title: "Aagam Doshi | Lead Software Engineer",
    description:
      "Lead Software Engineer specializing in GenAI systems, distributed systems, and cloud architecture.",
    url: "https://aagam30794.web.app/",
    siteName: "Aagam Doshi Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body className="antialiased">
        <GoogleAnalytics />
        {children}
        <Toaster
          theme="dark"
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#161b22",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#f0f6fc",
            },
          }}
        />
      </body>
    </html>
  );
}
