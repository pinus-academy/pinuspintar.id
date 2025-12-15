import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tim Kami - PinusPintar.id",
};

export default function TeamsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
