'use client'

import DesktopContainer from "@/components/raptorOS/Desktop";
import Taskbar from "@/components/raptorOS/Taskbar";
import WindowContainer from "@/components/raptorOS/Window/WindowContainer";
import { WindowProvider } from "@/context/raptorOS/WindowContext";

import css from '@/styles/page.module.css'

export default function Home() {
  return (
    <main className={css.pagesContainer}>
      <WindowProvider>
        <WindowContainer />
        <DesktopContainer />
        <Taskbar />
      </WindowProvider>
    </main>
  );
}
