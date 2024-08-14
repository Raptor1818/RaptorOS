import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Window {
  id: string;
  title: string;
  icon: string;
  isMinimized: boolean;
  content: ReactNode;
}

interface WindowContextType {
  windows: Window[];
  zIndexList: string[];
  focusedWindowId: string | null;
  addWindow: (id: string, title: string, icon: string, isMinimized: boolean, content: ReactNode) => void;
  minimizeWindow: (id: string) => void;
  closeWindow: (id: string) => void;
  bringToFront: (id: string) => void;
  getWindowById: (id: string) => Window | undefined;
}

const WindowContext = createContext<WindowContextType | undefined>(undefined);

export const useWindowContext = () => {
  const context = useContext(WindowContext);
  if (!context) {
    throw new Error('useWindowContext must be used within a WindowProvider');
  }
  return context;
};

export const WindowProvider = ({ children }: { children: ReactNode }) => {
  const [windows, setWindows] = useState<Window[]>([]);
  const [zIndexList, setZIndexList] = useState<string[]>([]);
  const [focusedWindowId, setFocusedWindowId] = useState<string | null>(null);

  const addWindow = (id: string, title: string, icon: string, isMinimized: boolean, content: ReactNode) => {
    const existingWindow = windows.find(window => window.id === id);
    if (existingWindow) {
      if (existingWindow.isMinimized) {
        setWindows(prevWindows =>
          prevWindows.map(window =>
            window.id === id ? { ...window, isMinimized: false } : window
          )
        );
      }
      bringToFront(id);
    } else {
      setWindows([...windows, { id, title, icon, isMinimized, content }]);
      setZIndexList([...zIndexList, id]);
    }
  };

  const minimizeWindow = (id: string) => {
    setWindows(prevWindows =>
      prevWindows.map(window =>
        window.id === id ? { ...window, isMinimized: true } : window
      )
    );
    setFocusedWindowId(null)
  };

  const closeWindow = (id: string) => {
    setWindows(windows.filter(window => window.id !== id));
    setZIndexList(zIndexList.filter(zId => zId !== id));
    if (focusedWindowId === id) {
      setFocusedWindowId(null);
    }
  };

  const bringToFront = (id: string) => {
    setZIndexList([...zIndexList.filter(zId => zId !== id), id]);
    setFocusedWindowId(id);
  };

  const getWindowById = (id: string) => {
    return windows.find(window => window.id === id);
  };

  return (
    <WindowContext.Provider value={{ 
      windows,
      zIndexList, 
      focusedWindowId,
      addWindow, 
      minimizeWindow,
      closeWindow, 
      bringToFront,
      getWindowById,
    }}>
      {children}
    </WindowContext.Provider>
  );
};
