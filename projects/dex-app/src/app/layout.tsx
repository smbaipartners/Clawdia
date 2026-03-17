import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DEX - Batch Array Vision",
  description: "Next-gen vision logic for field operatives.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white">{children}</body>
    </html>
  );
}
