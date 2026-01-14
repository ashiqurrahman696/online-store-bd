import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import NextAuthProvider from "@/provider/NextAuthProvider";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Online Store BD",
  description: "Shop the latest trends and find everything you need in one place.",
};

export default function RootLayout({ children }) {
  return (
    <NextAuthProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar/>
          {children}
          <Footer/>
        </body>
      </html>
    </NextAuthProvider>
  );
}
