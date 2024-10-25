'use client';
import React, { createContext, use, useContext, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { appList } from '@/lib/lists/app-list';

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
  getWindowById: (id: string) => AppWindowType | undefined;
  getAppById: (id: string) => AppWindowType | undefined;
  isDeviceMobile: boolean;
}

interface Props {
  children: React.ReactNode;
  isDeviceMobileProp: boolean;
}

const WindowContext = createContext<WindowProviderType | undefined>(undefined);

const QUERY_STRING_NAME: string = 'app';

const WindowProvider = (props: Props) => {
  const [windows, setWindows] = useState<AppWindowType[]>([]) // List of all open windows
  const [zIndexList, setZIndexList] = useState<string[]>([]); // zIndex list for correct window layer ordering
  const [focusedWindowId, setFocusedWindowId] = useState<string | null>(null); // What window is in focus right now

  const router = useRouter();
  const searchParams = useSearchParams();

  // Opens a window and brings it to the front
  const openWindow = (appWindow: AppWindowType) => {
    if (!zIndexList.includes(appWindow.id)) {
      setWindows(prevWindows => [...prevWindows, appWindow]);
    }
    bringToFront(appWindow.id);
  };

  // Closes the window by ID, removes it from both arrays
  const closeWindow = (id: string) => {
    setWindows(prevWindows => prevWindows.filter(window => window.id !== id));
    setZIndexList(prevZIndexList => prevZIndexList.filter(zId => zId !== id));
    if (focusedWindowId === id) setFocusedWindowId(null); // Once closed, sets focused window to null
  };

  // Bring window to the front of the zIndex array
  const bringToFront = (id: string) => {
    setZIndexList(prevZIndexList => [...prevZIndexList.filter(zId => zId !== id), id]);
    setFocusedWindowId(id);
  };

  const getWindowById = (id: string) => {
    return windows.find(window => window.id === id);
  };

  const getAppById = (id: string) => {
    return appList.find(app => app.id === id);
  };

  const getAppByLabel = (label: string) => {
    return appList.find(app => app.label === label);
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
  }, [searchParams]);

  // // Effect to update the URL query when the focused window changes
  // useEffect(() => {
  //   if (focusedWindowId) {
  //     const appInQuestion = getWindowById(focusedWindowId);
  //     if (appInQuestion) {
  //       // Updates the URL with the window ID as a query parameter
  //       const routeString = appInQuestion.label.replace(/\s+/g, '-');
  //       router.push(`?${QUERY_STRING_NAME}=${routeString}`);
  //     }
  //   } else {
  //     router.push('/');
  //   }
  // }, [focusedWindowId])

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
        closeWindow,
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
