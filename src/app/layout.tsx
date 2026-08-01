import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adora — Senin Yapay Zeka Reklam Ajansın",
  description:
    "Adora; e-ticaret markaları için yapay zeka ile UGC video üretimi, reklam yönetimi ve satış optimizasyonu sağlayan tek platform.",
  keywords: [
    "yapay zeka",
    "ugc video",
    "e-ticaret",
    "reklam ajansı",
    "shopify",
    "meta ads",
    "tiktok ads",
    "adora",
  ],
  openGraph: {
    title: "Adora — Senin Yapay Zeka Reklam Ajansın",
    description:
      "Yapay zeka destekli UGC video üreticisi ve e-ticaret reklam asistanı.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F9F8F3] text-[#1C1A17] font-[var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
