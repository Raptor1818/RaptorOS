import React from 'react'

import '@/styles/raptor-os/system/applications/AppWrapper.css'
import { useSettingsContext } from '@/context/SettingsProvider/settings-provider';
import clsx from 'clsx';

interface Props {
  className?: string;
  dotBackground?: boolean;
  gridBackground?: boolean;
  children: React.ReactNode;
}

const AppWrapper = ({ className, dotBackground, gridBackground, children }: Props) => {
  const settingsContext = useSettingsContext().settings;

  return (
    <div className={clsx(`w-full h-[calc(100%-2rem)]
    transition-all duration-200
    `, {
      'bg-background': !settingsContext.glassStyle,
      'backdrop-blur-md bg-black/70': settingsContext.glassStyle,
    },
      {
        'relative': dotBackground
      }
    )}>
      {(dotBackground ?? gridBackground) &&
        <div className={clsx('absolute h-full w-full [mask-image:radial-gradient(ellipse_at_center,black,transparent)]',
          {
            'bg-dot-white/[0.4]': dotBackground
          },
          {
            'bg-grid-white/[0.2]': gridBackground
          },
        )} />
      }
      <div className={clsx('h-full desktop-app-wrapper overflow-auto', className)}>
        {children}
      </div>
    </div >
  )
}

export default AppWrapper