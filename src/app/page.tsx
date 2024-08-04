'use client'

import DesktopContainer from "@/components/raptorOS/Desktop/DesktopContainer";
import Taskbar from "@/components/raptorOS/Taskbar/Taskbar";
import WindowContainer from "@/components/raptorOS/Window/WindowContainer";
import { WindowProvider } from "@/context/raptorOS/WindowContext";

export default function Home() {
  return (
    <main className="min-h-screen w-screen overflow-hidden">
      <WindowProvider>
        <WindowContainer />
        <DesktopContainer />
      </WindowProvider>
      <Taskbar />
    </main>
  );
}
