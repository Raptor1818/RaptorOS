'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'

interface SettingsContextType {
  glassStyle: boolean;
  setGlassStyle: React.Dispatch<React.SetStateAction<boolean>>
}

interface Props {
  children: React.ReactNode;
}

export const SettingsContext = createContext<SettingsContextType | undefined>(undefined)

const SettingsProvider = (props: Props) => {
  const [glassStyle, setGlassStyle] = useState<boolean>(false)

  return (
    <SettingsContext.Provider
      value={{
        glassStyle,
        setGlassStyle,
      }}
    >
      {props.children}
    </SettingsContext.Provider>
  )
}

// Hook to access settings context
export function useSettingsContext() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettingsContext must be used within a SettingsProvider');
  }
  return context;
}

export default SettingsProvider