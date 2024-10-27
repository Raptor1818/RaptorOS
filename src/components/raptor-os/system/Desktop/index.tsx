import { useWindowContext } from '@/context/WindowProvider/window-provider'
import { appList } from '@/lib/lists/app-list'
import React from 'react'
import DesktopIcon from './DesktopIcon'

type Props = {}

const Desktop = (props: Props) => {
  const context = useWindowContext()
  return (
    <div className='w-fit h-full max-h-screen flex flex-col flex-wrap place-items-start p-2 gap-2
    '>
      {appList.map((app) => (
        <DesktopIcon key={app.id} app={app} openWindow={() => { context.openWindow(app) }} />
      ))}
    </div>
  )
}

export default Desktop