import { type AppWindowType } from '@/context/WindowProvider/window-provider';
import React from 'react'
import Image from 'next/image';

import css from '@/styles/raptor-os/system/Desktop/DesktopItem.module.css';

type Props = {
  app: AppWindowType;
  openWindow: (appWindow: AppWindowType) => void;
}

const DesktopIcon = ({ app, openWindow }: Props) => {
  return (
    <button
      onDoubleClick={() => {
        openWindow(app);
      }}
      className={`relative w-20 h-fit 
        flex flex-col items-center justify-start gap-1
        px-1 py-2 rounded cursor-default hover:bg-white hover:bg-opacity-25 focus:bg-white focus:bg-opacity-25 select-none transition-all duration-100
        ${css.iconContainer}`}
    >
      {/* <Image
        src={app.icon ?? '/favicon.ico'}
        width={48}
        height={48}
        alt={app.label}
        draggable={false}
      /> */}
      <div className='w-12 h-12 bg-green-500'>

      </div>
      <p className={`text-center select-none text-sm leading-4 truncate-multiline focus:outline-none 
        ${css.itemText}`}>
        {app.label}
      </p>
    </button>
  )
}

export default DesktopIcon