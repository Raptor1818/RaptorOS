import React, { createContext, ReactNode, useContext, useState } from "react";

interface Window {
  id: string;
  title: string;
  content: ReactNode;
}

interface WindowContextType {
  addWindow: (id: string, title: string, content: ReactNode) => void;
  windows: Window[];
  closeWindow: (id: string) => void;
  bringToFront: (id: string) => void;
  zIndexList: string[];
}

const WindowContext = createContext<WindowContextType | undefined>(undefined);

export const WindowProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [windows, setWindows] = useState<Window[]>([]);
  const [zIndexList, setZIndexList] = useState<string[]>([]);

  const addWindow = (id: string, title: string, content: ReactNode) => {
    const newWindow = {
      id,
      title,
      content,
    };
    setWindows([...windows, newWindow]);
    setZIndexList([...zIndexList, newWindow.id]);
  };

  const closeWindow = (id: string) => {
    setWindows(windows.filter(window => window.id !== id));
    setZIndexList(zIndexList.filter(windowId => windowId !== id));
  };

  const bringToFront = (id: string) => {
    setZIndexList([...zIndexList.filter(windowId => windowId !== id), id]);
  };

  return (
    <WindowContext.Provider value={{ addWindow, windows, closeWindow, bringToFront, zIndexList }}>
      {children}
    </WindowContext.Provider>
  );
};

export const useWindowContext = () => {
  const context = useContext(WindowContext);
  if (!context) {
    throw new Error("useWindowContext must be used within a WindowProvider");
  }
  return context;
};
