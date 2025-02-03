'use client';

import { createContext, useContext } from "react";

interface Props {
  children: React.ReactNode
  isMobile: boolean
}

interface DeviceContextType {
  isMobile: boolean
}

const DeviceContext = createContext<DeviceContextType | undefined>(undefined);

const DeviceProvider = (props: Props) => {
  return (
    <DeviceContext.Provider value={{ isMobile: props.isMobile }}>
      {props.children}
    </DeviceContext.Provider>
  )
}

export function useDeviceContext() {
  const context = useContext(DeviceContext);
  if (!context) {
    throw new Error('useDeviceContext must be used within a DeviceProvider');
  }
  return context;
}

export default DeviceProvider