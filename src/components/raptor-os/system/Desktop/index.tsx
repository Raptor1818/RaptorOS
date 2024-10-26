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
    <div className='w-screen h-full 
      grid grid-flow-col contain-strict place-items-start
      grid-cols-[repeat(auto-fill,5rem)] 
      grid-rows-[repeat(auto-fill,6rem)] 
      gap-4'
    >
      {appList.map(app =>
        <DesktopIcon
          key={app.id}
          app={app}
          openWindow={context.openWindow}
        />
      )}
      {appList.map(app =>
        <DesktopIcon
          key={app.id}
          app={app}
          openWindow={context.openWindow}
        />
      )}
      {appList.map(app =>
        <DesktopIcon
          key={app.id}
          app={app}
          openWindow={context.openWindow}
        />
      )}
      {appList.map(app =>
        <DesktopIcon
          key={app.id}
          app={app}
          openWindow={context.openWindow}
        />
      )}
      {appList.map(app =>
        <DesktopIcon
          key={app.id}
          app={app}
          openWindow={context.openWindow}
        />
      )}
    </div>
  )
}

export default Desktop