'use client';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { appList, type vAppType } from '@/lib/lists/app-list';

export interface AppWindowType {
  id: string;
  label: string;
  icon?: string;
  isMinimized?: boolean;
  className?: string;
  titleBarClassName?: string;
  maxDimensions?: { width: number; height: number };
  startupDimensions?: { width: number; height: number };
  appContent?: React.ReactNode;
}

interface WindowProviderType {
  windows: AppWindowType[];
  zIndexList: string[];
  focusedWindowId: string | null;
  openWindow: (appWindow: AppWindowType) => void;
  openWindowByLabel: (label: string) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  bringToFront: (id: string) => void;
  getWindowById: (id: string) => AppWindowType | undefined;
  getAppById: (id: string) => AppWindowType | undefined;
  isDeviceMobile: boolean;
}

interface Props {
  children: React.ReactNode;
  isDeviceMobileProp: boolean;
}

const WindowContext = createContext<WindowProviderType | undefined>(undefined);

const QUERY_STRING_NAME = 'app';

const WindowProvider = (props: Props) => {
  const [windows, setWindows] = useState<AppWindowType[]>([]) // List of all open windows
  const [zIndexList, setZIndexList] = useState<string[]>([]); // zIndex list for correct window layer ordering
  const [focusedWindowId, setFocusedWindowId] = useState<string | null>(null); // What window is in focus right now

  const router = useRouter();
  const searchParams = useSearchParams();

  const getWindowById = (id: string) => {
    return windows.find(window => window.id === id);
  };

  const getAppById = (id: string) => {
    return appList.find(app => app.id === id);
  };

  const getAppByLabel = (label: string) => {
    return appList.find(app => app.label === label);
  };

  const isWindowOpenById = useCallback((id: string) => {
    return windows.find(window => window.id === id);
  }, [windows]);

  // Opens a window and brings it to the front
  const openWindow = useCallback((appWindow: vAppType) => {
    if (appWindow.isShortcut && appWindow.shortcutUrl && !appWindow.appContent) {
      window.open(appWindow.shortcutUrl, '_blank');
    } else {
      setWindows((prevWindows) => {
        // Check if the window is already open
        if (getWindowById(appWindow.id)) {
          // Window is open but might be minimized, so restore it
          return prevWindows.map((w) =>
            w.id === appWindow.id ? { ...w, isMinimized: false } : w
          );
        } else {
          // Add the new window to the list, ensuring isMinimized is initialized as false
          return [...prevWindows, { ...appWindow, isMinimized: false }];
        }
      });
      setZIndexList((prevZIndexList) => [...prevZIndexList, appWindow.id]);
      bringToFront(appWindow.id);
    }
  }, [isWindowOpenById]);

  const openWindowByLabel = (label: string) => {
    const app = getAppByLabel(label);
    if (app) openWindow(app);
  }


  // Closes the window by ID, removes it from both arrays
  const closeWindow = (id: string) => {
    setWindows(prevWindows => prevWindows.filter(window => window.id !== id));
    setZIndexList(prevZIndexList => prevZIndexList.filter(zId => zId !== id));
    if (focusedWindowId === id) setFocusedWindowId(null); // Once closed, sets focused window to null
  };

  const minimizeWindow = (id: string) => {
    setWindows((prevWindows) =>
      prevWindows.map((appWindow) => {
        if (appWindow.id === id) {
          return { ...appWindow, isMinimized: true }; // Set isMinimized to true
        }
        return appWindow;
      })
    );
    setFocusedWindowId(null)
  };


  // Bring window to the front of the zIndex array
  const bringToFront = (id: string) => {
    setZIndexList(prevZIndexList => [...prevZIndexList.filter(zId => zId !== id), id]);
    setFocusedWindowId(id);
  };


  // Effect to open the app based on URL query when the component mounts
  // Unfortunately only works on the first render, as it reloads the page editing it
  // TODO: Add local storage windows to persist between reloads
  useEffect(() => {
    const appParameter = searchParams.get(QUERY_STRING_NAME);
    if (appParameter) {
      const appInQuestion = getAppByLabel(appParameter);
      if (appInQuestion) {
        openWindow(appInQuestion);
        router.push('/');
      }
    }
  }, [searchParams, openWindow, router]);

  // Startup window
  useEffect(() => {
    const homeApp = getAppByLabel('Home');
    if (homeApp) {
      openWindow(homeApp);
    }
  }, []);

  const [isDeviceMobile, setIsDeviceMobile] = useState(props.isDeviceMobileProp);

  useEffect(() => {
    setIsDeviceMobile(props.isDeviceMobileProp);
  }, [props.isDeviceMobileProp]);

  return (
    <WindowContext.Provider
      value={{
        windows,
        zIndexList,
        focusedWindowId,
        openWindow,
        openWindowByLabel,
        closeWindow,
        minimizeWindow,
        bringToFront,
        getWindowById,
        getAppById,
        isDeviceMobile,
      }}
    >
      {props.children}
    </WindowContext.Provider>
  );
};

// Hook to access window context
export function useWindowContext() {
  const context = useContext(WindowContext);
  if (!context) {
    throw new Error('useWindowContext must be used within a WindowProvider');
  }
  return context;
}

export default WindowProvider;