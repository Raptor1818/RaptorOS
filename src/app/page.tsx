import Desktop from "@/components/raptor-os/system/Desktop";

export default function HomePage() {
  return (
    <main className="w-screen h-screen flex flex-col" suppressHydrationWarning>
      <Desktop />
    </main>
  );
}
