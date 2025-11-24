import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tim Kami - PinusPintar.id",
  description: "Intensive bootcamps in tech, design, and digital marketing.",
};

export default function TeamsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
