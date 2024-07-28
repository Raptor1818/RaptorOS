'use client'

import Desktop from "@/components/raptorOS/Desktop/Desktop";
import Taskbar from "@/components/raptorOS/Taskbar/Taskbar";
import WindowContainer from "@/components/raptorOS/Window/WindowContainer";

export default function Home() {
  return (
    <main className="min-h-screen w-screen overflow-hidden">
      <Taskbar />
      {/* <WindowContainer /> */}
      <Desktop />
    </main>
  );
}
