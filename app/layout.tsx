import type { Metadata } from "next";
import { Inter,Martel_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const martelSans = Martel_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-marten-sans",
});
export const metadata: Metadata = {
  title: "Trendify ERP",
  description: "Do‘koningizni boshqarishda zamonaviy texnologiyalar yordamida samaradorlikni maksimal darajaga chiqarish va vaqtni tejash imkoniyatini qo‘lga kiriting!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`antialiased ${martelSans.variable}`} lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
