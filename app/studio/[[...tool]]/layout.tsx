export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="sanity-studio" className="min-h-screen bg-white">
      {children}
    </div>
  );
}
