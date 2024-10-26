'use client';
import { useWindowContext } from '@/context/WindowProvider/window-provider';
import { appList } from '@/lib/lists/app-list';
import React from 'react'
import DesktopIcon from './DesktopIcon';

interface Props { }

const Desktop = (props: Props) => {
  const context = useWindowContext();

  //TODO: make the draggable system

  return (
    <div className='relative w-screen h-full'>
      <div className='w-screen h-full flex flex-col flex-wrap gap-4'>
        {appList.map(app =>
          <DesktopIcon
            key={app.id}
            app={app}
            openWindow={context.openWindow}
          />
        )}
      </div>
    </div>
  )
}

export default Desktop