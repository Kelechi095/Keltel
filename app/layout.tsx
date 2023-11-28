import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import ToasterProvider from "./providers/ToasterProvider";
import { NextAuthProvider } from "./providers/authProvider";

const font = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Keltel",
  description: "Booking application",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NextAuthProvider>
          <Navbar />

          <ToasterProvider />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
