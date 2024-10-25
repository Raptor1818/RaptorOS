'use client';
import React, { createContext, useContext, useState } from 'react'

export interface AppWindowType {
  id: string;
  label: string;
  icon?: string;
  notRounded?: boolean; // If an app needs to not be rounded
  className?: string;
  titleBarClassName?: string;
  appContent: React.ReactNode;
}

interface WindowProviderType {
  windows: AppWindowType[];
  zIndexList: string[];
  focusedWindowId: string | null;
  openWindow: (appWindow: AppWindowType) => void;
  closeWindow: (id: string) => void;
  bringToFront: (id: string) => void;
}

const WindowContext = createContext<WindowProviderType | undefined>(undefined)

const WindowProvider = ({ children }: { children: React.ReactNode }) => {
  const [windows, setWindows] = useState<AppWindowType[]>([]) // List of all open windows
  const [zIndexList, setZIndexList] = useState<string[]>([]); // zIndex list for correct window layer ordering
  const [focusedWindowId, setFocusedWindowId] = useState<string | null>(null); // What window is in focus right now

  // Add window object to array
  const openWindow = (appWindow: AppWindowType) => {
    setWindows([...windows, appWindow])
    bringToFront(appWindow.id)
  }

  // Removes window object from array
  const closeWindow = (id: string) => {
    setWindows(windows.filter(window => window.id !== id))
  }

  // Bring window to the front of the zIndex array
  const bringToFront = (id: string) => {
    setZIndexList([...zIndexList.filter(zId => zId !== id), id]); // Re-add to place at the end
    setFocusedWindowId(id); // Set focused window
  };

  return (
    <WindowContext.Provider value={{
      windows,
      zIndexList,
      focusedWindowId,
      openWindow,
      closeWindow,
      bringToFront
    }}>
      {children}
    </WindowContext.Provider>
  )
}

export function useWindowContext() {
  const context = useContext(WindowContext)
  if (!context) {
    throw new Error('useWindowContext must be used within a WindowProvider')
  }
  return context
}

export default WindowProvider