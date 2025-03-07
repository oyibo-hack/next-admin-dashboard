import type { Metadata } from "next";
import { Cherry_Bomb_One, Outfit } from "next/font/google";
import "./globals.css";

const OutFit = Outfit({
  variable: "--body-font",
  subsets: ["latin"],
});

const cherryBombOne = Cherry_Bomb_One({
  variable: "--second-font",
  weight: '400',
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${OutFit.variable} ${cherryBombOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
