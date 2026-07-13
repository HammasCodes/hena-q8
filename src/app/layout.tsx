import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Hena.q8 | Professional Henna, Hair & Makeup in Kuwait (Home Service)",
  description: "Experience premium traditional & modern henna designs, elegant hair styling, and professional makeup artistry directly at your home in Kuwait. Book home service today!",
  keywords: ["henna kuwait", "mehendi kuwait", "bridal henna kuwait", "hair styling kuwait", "makeup artist kuwait", "home service henna kuwait", "hena.q8"],
  authors: [{ name: "Hena.q8" }],
  openGraph: {
    title: "Hena.q8 | Professional Henna, Hair & Makeup Artist in Kuwait",
    description: "Premium henna/mehendi, hair styling, and makeup artistry at your doorstep across Kuwait. Book your home service session today.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-cream-light text-charcoal">
        {children}
      </body>
    </html>
  );
}
