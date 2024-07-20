'use client'

import Taskbar from "@/components/raptorOS/Taskbar/Taskbar";
import WindowContainer from "@/components/raptorOS/Window/WindowContainer";

export default function Home() {
  return (
    <main className="min-h-screen w-screen overflow-hidden">
      <Taskbar></Taskbar>
      <div className="z-0"> {/* Window zone */}
        <WindowContainer />
      </div>
      <div className="-z-10">
        <div> {/* Desktop grid */}
        </div>
      </div>
    </main>
  );
}
