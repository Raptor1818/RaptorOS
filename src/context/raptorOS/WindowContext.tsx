import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Window {
  id: string;
  title: string;
  content: ReactNode;
}

interface WindowContextType {
  windows: Window[];
  zIndexList: string[];
  addWindow: (id: string, title: string, content: ReactNode) => void;
  closeWindow: (id: string) => void;
  bringToFront: (id: string) => void;
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

  const addWindow = (id: string, title: string, content: ReactNode) => {
    const existingWindow = windows.find(window => window.id === id);
    if (existingWindow) {
      bringToFront(id);
    } else {
      setWindows([...windows, { id, title, content }]);
      setZIndexList([...zIndexList, id]);
    }
  };

  const closeWindow = (id: string) => {
    setWindows(windows.filter(window => window.id !== id));
    setZIndexList(zIndexList.filter(zId => zId !== id));
  };

  const bringToFront = (id: string) => {
    setZIndexList([...zIndexList.filter(zId => zId !== id), id]);
  };

  return (
    <WindowContext.Provider value={{ windows, addWindow, closeWindow, bringToFront, zIndexList }}>
      {children}
    </WindowContext.Provider>
  );
};
