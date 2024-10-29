import { useWindowContext } from '@/context/WindowProvider/window-provider'
import { appList } from '@/lib/lists/app-list'
import React from 'react'
import DesktopIcon from './DesktopIcon'

type Props = {}

const Desktop = (_props: Props) => {
  const context = useWindowContext()
  return (
    <div className='w-screen h-full 
      grid grid-flow-row contain-strict place-items-start
      grid-cols-[repeat(auto-fill,5rem)] 
      grid-rows-[repeat(auto-fill,6rem)] 
      gap-y-4 gap-x-2 p-2'
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