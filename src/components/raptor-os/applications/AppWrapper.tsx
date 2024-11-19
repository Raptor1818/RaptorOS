import React from 'react'

import '@/styles/raptor-os/system/applications/AppWrapper.css'
import { useSettingsContext } from '@/context/SettingsProvider/settings-provider';
import clsx from 'clsx';

interface Props {
  className?: string;
  children: React.ReactNode;
}

const AppWrapper = ({ className, children }: Props) => {
  const settingsContext = useSettingsContext().settings;

  return (
    <div className={clsx(`desktop-app-wrapper w-full h-[calc(100%-2rem)] overflow-scroll
    transition-all duration-200
    `, {
      'bg-background': !settingsContext.glassStyle,
      'backdrop-blur-md bg-black/75': settingsContext.glassStyle,
    },
      className
    )}>
      {children}
    </div>
  )
}

export default AppWrapper