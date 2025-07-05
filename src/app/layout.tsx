import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Tech Ledger - Latest Technology News",
  description: "Stay updated with the latest technology news, trends, and insights from around the world.",
  keywords: "technology news, tech updates, latest tech, digital trends, innovation",
  authors: [{ name: "The Tech Ledger" }],
  creator: "The Tech Ledger",
  publisher: "The Tech Ledger",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thetechledger.github.io",
    title: "The Tech Ledger - Latest Technology News",
    description: "Stay updated with the latest technology news, trends, and insights from around the world.",
    siteName: "The Tech Ledger",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Tech Ledger - Latest Technology News",
    description: "Stay updated with the latest technology news, trends, and insights from around the world.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-50`}
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-8 mt-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">The Tech Ledger</h3>
                <p className="text-gray-300">
                  Your trusted source for the latest technology news and insights.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                  <li><a href="/articles/" className="text-gray-300 hover:text-white transition-colors">Articles</a></li>
                  <li><a href="/about/" className="text-gray-300 hover:text-white transition-colors">About</a></li>
                  <li><a href="/contact/" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="/privacy/" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="/terms/" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <p className="text-gray-300">
                  Email: josephrasanjana0@gmail.com
                </p>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
              <p>&copy; 2025 The Tech Ledger. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
