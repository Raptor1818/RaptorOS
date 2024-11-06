import { type AppWindowType } from '@/context/WindowProvider/window-provider';
import React from 'react'
import Image from 'next/image';

import css from '@/styles/raptor-os/system/Desktop/DesktopItem.module.css';

type Props = {
  app: AppWindowType;
  openWindow: (appWindow: AppWindowType) => void;
  hideText?: boolean;
  className?: string;
}

const DesktopIcon = ({ app, openWindow, hideText, className }: Props) => {
  return (
    <button
      onDoubleClick={() => {
        openWindow(app);
      }}
      className={`relative w-20 h-fit 
        flex flex-col items-center justify-start gap-1
        px-1 py-2 rounded cursor-default 
        bg-transparent 
        hover:bg-white/20
        focus:bg-white/35
        select-none transition-all duration-200
        ${css.iconContainer} ${className && className}`}
    >
      {/* <Image
        src={app.icon ?? '/favicon.ico'}
        width={48}
        height={48}
        alt={app.label}
        draggable={false}
      /> */}
      <div className='w-12 h-12 bg-green-500 shadow'>

      </div>
      {!hideText && (
        <p className={`text-center select-none text-sm leading-4 truncate-multiline focus:outline-none p-0.5
          ${css.itemText}`}>
          {app.label}
        </p>
      )}
    </button>
  )
}

export default DesktopIcon