import { type AppWindowType } from '@/context/WindowProvider/window-provider';
import React from 'react'
import Image from 'next/image';

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
      className={`flex flex-col items-center gap-2 justify-center w-20 h-24 bg-white/10 rounded-md hover:bg-white/20 focus:bg-white/30 select-none cursor-default`}
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
      <p className='line-clamp-2 text-sm'>
        {app.label}
      </p>
    </button>
  )
}

export default DesktopIcon