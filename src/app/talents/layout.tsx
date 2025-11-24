import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bakat - PinusPintar.id",
  description: "Intensive bootcamps in tech, design, and digital marketing.",
};

export default function TalentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}