import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import { AuthContextProvider } from "../context/AuthContext";

import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "Generated by create next app",
  title: "Firebase Demo"
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <div className="flex flex-col h-screen">
            <div className="pt-4 px-4">
              <Navbar />

              {children}
            </div>

            <Footer />
          </div>
        </AuthContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
