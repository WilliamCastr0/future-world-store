import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Future world e-commerce",
  description: "Your best e-commerce for the future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav>
            <ul>
              <Link href="/" target="_self">
                <li>Home</li>
              </Link>
              <Link href="/store" target="_self">
                <li>Store</li>
              </Link>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
