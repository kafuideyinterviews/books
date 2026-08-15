import type { Metadata, Viewport } from "next";
import Studio from "./Studio";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Studio",
  description: "Sanity content studio for Kafui Dey Books.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#101112",
};

export default function StudioPage() {
  return (
    <div className="fixed inset-0 z-[9999] bg-white">
      <Studio />
    </div>
  );
}
