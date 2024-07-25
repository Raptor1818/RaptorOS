'use client'

import DesktopGrid from "@/components/raptorOS/Desktop/DesktopGrid";
import Taskbar from "@/components/raptorOS/Taskbar/Taskbar";
import WindowContainer from "@/components/raptorOS/Window/WindowContainer";

export default function Home() {
  return (
    <main className="min-h-screen w-screen overflow-hidden">
      <Taskbar />
      <WindowContainer />
      <DesktopGrid />
    </main>
  );
}
