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
      gap-2
      px-2 md:px-0.5
      py-0.5 md:py-2
      justify-start items-center bg-gray-500`}>
      {appList.map(app =>
        <TaskbarIcon
          key={app.id}
          app={app}
          openWindow={context.openWindow}
        />
      )}
    </div>
  )
}

export default Taskbar