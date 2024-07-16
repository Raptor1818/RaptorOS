'use client'

import PlaceholderWindow from "@/components/dev/PlaceholderWindow";

export default function Home() {
  return (
    <main className="min-h-screen w-screen border-red-500 border-2 overflow-hidden">
      <div className="z-0"> {/* Window zone */}
        <PlaceholderWindow windowHeader="bel">p</PlaceholderWindow>
        <PlaceholderWindow windowHeader="come xe">sdsdds</PlaceholderWindow>
        <PlaceholderWindow windowHeader="lllllllllllllllll">sds</PlaceholderWindow>
      </div>
      <div className="-z-10">
        <div> {/* Desktop grid */}
        </div>

        <div> {/* Taskbar */}
        </div>
      </div>
    </main>
  );
}
