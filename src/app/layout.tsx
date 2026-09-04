import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Infonova Tech SRL | Intelligent IT Solutions",
  description:
    "Product development, business consultancy, and innovative cloud-based solutions coupled with mobile applications. Based in Timișoara, Romania.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans text-slate-dark antialiased">{children}</body>
    </html>
  );
}
