import type { Metadata } from "next";
import { Inter, Josefin_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
  display: "swap",
  weight: ["700"],
  preload: true,
  fallback: ["Futura", "Century Gothic", "system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: {
    default: "LOGO — Fashion, Electronics & More",
    template: "%s | LOGO",
  },
  icons: {
    icon: "/Logo.png",
    shortcut: "/Logo.png",
    apple: "/Logo.png",
  },
  description:
    "Shop the latest fashion, electronics, jewellery and more at LOGO. Free shipping on orders over $50.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${josefinSans.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
