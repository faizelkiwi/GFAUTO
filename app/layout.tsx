import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GF Garage | Vehicle Servicing & Repairs in Ottery",
  description: "Request an appointment with GF Garage in Ottery, Cape Town for servicing, diagnostics, tyres and mechanical repairs.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
