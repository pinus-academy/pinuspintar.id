import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami - PinusPintar.id",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
