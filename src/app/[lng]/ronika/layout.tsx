import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "RONIKA | Artisanal Luxury Chocolate",
  description: "Rare Single-Origin Cacao Mastery",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>{children}</div>
  );
}