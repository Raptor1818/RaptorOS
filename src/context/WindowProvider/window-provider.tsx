'use client';
import React, { createContext, useContext, useState } from 'react'

export interface AppWindowType {
  id: string;
  label: string;
  icon?: string;
  notRounded?: boolean;
  className?: string;
  titleBarClassName?: string;
  appContent: React.ReactNode;
}

interface WindowProviderType {
  windows: AppWindowType[];
  openWindow: (appWindow: AppWindowType) => void;
  closeWindow: (id: string) => void;
}

const WindowContext = createContext<WindowProviderType | undefined>(undefined)

const WindowProvider = ({ children }: { children: React.ReactNode }) => {
  const [windows, setWindows] = useState<AppWindowType[]>([])

  const openWindow = (appWindow: AppWindowType) => {
    setWindows([...windows, appWindow])
  }

  const closeWindow = (id: string) => {
    setWindows(windows.filter(window => window.id !== id))
  }

  return (
    <WindowContext.Provider value={{
      windows,
      openWindow,
      closeWindow
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