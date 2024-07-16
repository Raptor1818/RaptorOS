'use client'

import WindowContainer from "@/components/raptorOS/Window/WindowContainer";

export default function Home() {
  return (
    <main className="min-h-screen w-screen border-red-500 border-2 overflow-hidden">
      <div className="z-0"> {/* Window zone */}
        <WindowContainer />
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
