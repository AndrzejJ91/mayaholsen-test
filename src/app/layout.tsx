import type { Metadata } from "next";
import "./globals.css";
import { Lora } from "next/font/google";
import { Header } from "./components/Header";

export const metadata: Metadata = {
  title: "Mayaholsen",
  description: "Strona dachówek",
};

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${lora.variable} font-serif antialiased`}>
        <Header />
        <main className="min-h-screen px-4 py-8">{children}</main>
      </body>
    </html>
  );
}

