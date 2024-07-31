'use client'

import DesktopContainer from "@/components/raptorOS/Desktop/DesktopContainer";
import Taskbar from "@/components/raptorOS/Taskbar/Taskbar";
import WindowContainer from "@/components/raptorOS/Window/WindowContainer";

export default function Home() {
  return (
    <main className="min-h-screen w-screen overflow-hidden">
      <Taskbar />
      <WindowContainer />
      <DesktopContainer />
    </main>
  );
}
