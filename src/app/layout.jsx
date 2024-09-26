"use client";
import localFont from "next/font/local";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider";

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className="">{children}</body>
      </html>
    </AuthProvider>
  );
}
