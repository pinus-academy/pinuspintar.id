import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  openGraph: {
    title: "PinusPintar.id",
    description: "Intensive bootcamps in tech, design, and DevOps Engineer",
    url: "https://pinuspintar.id",
    images: [
      {
        url: "https://pinuspintar.id/og-image-v2.png?=2",
        width: 1200,
        height: 630,
      }
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased mt-20`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
