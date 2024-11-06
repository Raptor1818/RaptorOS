import { useWindowContext } from '@/context/WindowProvider/window-provider';
import { appList } from '@/lib/lists/app-list';
import React from 'react'
import TaskbarIcon from './TaskbarIcon';
import dynamic from 'next/dynamic';
type Props = {}

const Taskbar = (_props: Props) => {
  const context = useWindowContext();

  // Aint no clock on the server bruh
  const TaskbarClock = dynamic(() => import('./TaskbarClock'), {
    ssr: false,
  })

  return (
    <div className={` static 
      bottom-0      md:left-0 
      w-screen      md:max-w-20
      h-14          md:h-screen
      flex flex-row md:flex-col 
      px-2          md:px-0.5
      py-0.5        md:py-2
      justify-between items-center
      bg-black/15 backdrop-blur
      shadow-sm md:shadow-xl`}>
      <div className='flex flex-row md:flex-col
      gap-2 items-center justify-start'>
        {appList.map(app =>
          <TaskbarIcon
            key={app.id}
            app={app}
            openWindow={context.openWindow}
          />
        )}
      </div>
      <div className='flex flex-row md:flex-col
      gap-2 items-center justify-end'>
        <TaskbarClock />
      </div>
    </div>
  )
}

export default Taskbar