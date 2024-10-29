import { useWindowContext } from '@/context/WindowProvider/window-provider';
import { appList } from '@/lib/lists/app-list';
import React from 'react'
import TaskbarIcon from './TaskbarIcon';

type Props = {}

const Taskbar = (props: Props) => {
  const context = useWindowContext();

  return (
    <div className={` static 
      bottom-0 md:left-0 
      w-screen md:w-14
      h-14 md:h-screen
      flex flex-row md:flex-col 
      justify-between items-center
      px-2 md:px-0.5
      py-0.5 md:py-2
      bg-gray-500`}>
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

      </div>
    </div>
  )
}

export default Taskbar