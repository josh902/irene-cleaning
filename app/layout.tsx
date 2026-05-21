import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jophrey Cleaning Services | Halifax, NS",
  description:
    "Professional residential & commercial cleaning in Halifax, Bedford, Dartmouth and surrounding areas. Registered, reliable, and fully equipped.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
