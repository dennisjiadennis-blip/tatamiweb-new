import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tatami Labs - New Beginning",
  description: "A fresh start for Tatami Labs website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}