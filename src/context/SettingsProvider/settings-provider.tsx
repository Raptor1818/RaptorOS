'use client'
import useLocalStorage from '@/hooks/useLocalStorage';
import React, { createContext, useContext, useEffect, useState } from 'react'

interface SettingsContextType {
  settings: Settings
  updateSettings: (newSettings: Partial<Settings>) => void;
  resetSettings: () => void;
}

interface Props {
  children: React.ReactNode;
}

export interface Settings {
  glassStyle: boolean;
  disableRoundedCorners: boolean;
}

const defaultSettings: Settings = {
  glassStyle: false,
  disableRoundedCorners: false,
}

export const SettingsContext = createContext<SettingsContextType | undefined>(undefined)

const SettingsProvider = (props: Props) => {
  const [settings, setSettings] = useLocalStorage<Settings>('app_settings', defaultSettings);

  const updateSettings = (newSettings: Partial<Settings>) => {
    setSettings((currentSettings: Settings) => ({
      ...currentSettings,
      ...newSettings
    }));
  };

  const handleResetSettings = () => {
    setSettings(defaultSettings);
    localStorage.removeItem('app_settings');
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        updateSettings,
        resetSettings: handleResetSettings,
      }}
    >
      {props.children}
    </SettingsContext.Provider>
  );
};

// Hook to access settings context
export function useSettingsContext() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettingsContext must be used within a SettingsProvider');
  }
  return context;
}

export default SettingsProvider