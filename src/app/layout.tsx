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
  title: "Kozmik Divan — Senin Kozmik Rehberin",
  description:
    "Kozmik Divan; yapay zeka ile günlük hayatını, finansal kararlarını ve ilişkilerini doğum haritana ve gezegen hareketlerine göre optimize eder.",
  keywords: [
    "astroloji",
    "yapay zeka",
    "doğum haritası",
    "finans takvimi",
    "fal",
    "sinastri",
    "kozmik divan",
  ],
  openGraph: {
    title: "Kozmik Divan — Senin Kozmik Rehberin",
    description:
      "Yapay zeka destekli kişisel yaşam asistanı ve astroloji uygulaması.",
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
      <body className="min-h-full flex flex-col bg-[#FAF9F5] text-[#2C2825] font-[var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
