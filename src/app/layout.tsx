import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.scss";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "fplusx",
  description: "Maßgeschneidertes Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`body ${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
