"use client";
import localFont from "next/font/local";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider";
import { RecoilRoot } from "recoil";

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <RecoilRoot>
        <html lang="en">
          <body className="">{children}</body>
        </html>
      </RecoilRoot>
    </AuthProvider>
  );
}
