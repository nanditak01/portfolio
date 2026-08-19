import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://3d-product-configurator-m6ffapp9k-nandita4.vercel.app"
  ),
  title: "3D Product Configurator",
  description: "Interactive 3D product experience",
  openGraph: {
    title: "3D Product Configurator",
    description: "Interactive 3D product experience",
    url: "https://3d-product-configurator-m6ffapp9k-nandita4.vercel.app",
    siteName: "3D Product Configurator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Product Configurator",
    description: "Interactive 3D product experience",
  },
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