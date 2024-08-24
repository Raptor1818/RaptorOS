'use client';

import { BackgroundProvider, useBackground } from '@/context/raptorOS/BackgroundContext';
import DesktopContainer from "@/components/raptorOS/Desktop";
import Taskbar from "@/components/raptorOS/Taskbar";
import WindowContainer from "@/components/raptorOS/Window/WindowContainer";
import { WindowProvider } from "@/context/raptorOS/WindowContext";
import css from '@/styles/raptorOS/page.module.css';

export default function RaptorOS() {
  return (
    <BackgroundProvider>
      <MainContent />
    </BackgroundProvider>
  );
}

function MainContent() {
  const { backgroundImage } = useBackground();
  return (
    <main className={css.pagesContainer} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <WindowProvider>
        <WindowContainer />
        <DesktopContainer />
        <Taskbar />
      </WindowProvider>
    </main>
  );
}

