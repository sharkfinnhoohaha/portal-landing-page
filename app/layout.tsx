import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portal — Client Portals for Freelancers",
  description: "Stop sending files over email. Give your clients a branded portal to track projects, approve deliverables, and stay in the loop.",
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
