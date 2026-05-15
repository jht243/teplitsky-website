import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jonathan Teplitsky",
  description:
    "AI & Automation leader. Founder, builder, and strategist across Web3, gaming, and emerging technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
          <div className="max-w-3xl mx-auto px-6 py-8 sm:px-16">
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-500 dark:text-zinc-400">
              <Link
                href="/dapper-labs-class-action"
                className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
              >
                Dapper Labs Class Action 2026
              </Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
