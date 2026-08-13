import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nandita Kundanagar | Portfolio",
  description: "Nandita Kundanagar's personal portfolio and StudyMate AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}