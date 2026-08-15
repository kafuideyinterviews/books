import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saved for Later",
  description:
    "Your shortlisted Kafui Dey Books titles — saved on this device, no account required.",
  alternates: { canonical: "/saved" },
  robots: { index: false, follow: true },
};

export default function SavedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
