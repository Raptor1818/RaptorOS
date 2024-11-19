import React from 'react'

import '@/styles/raptor-os/system/applications/AppWrapper.css'
import { useSettingsContext } from '@/context/SettingsProvider/settings-provider';

interface Props {
  className?: string;
  children: React.ReactNode;
}

const AppWrapper = ({ className, children }: Props) => {
  const settingsContext = useSettingsContext();

  return (
    <div className={`desktop-app-wrapper w-full h-[calc(100%-2rem)] overflow-scroll ${className ?? ''}
    transition-all duration-200
    ${settingsContext.glassStyle ? 'backdrop-blur-md bg-black/75' : 'bg-background'}
    `}>
      {children}
    </div>
  )
}

export default AppWrapper