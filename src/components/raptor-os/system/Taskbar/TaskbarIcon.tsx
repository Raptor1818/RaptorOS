import { type AppWindowType } from '@/context/WindowProvider/window-provider';
import React from 'react'
import Image from 'next/image';

type Props = {
  app: AppWindowType;
  openWindow: (appWindow: AppWindowType) => void;
  className?: string;
}

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


const TaskbarIcon = ({ app, openWindow, className }: Props) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipContent>
          <p>{app.label}</p>
        </TooltipContent>
        <TooltipTrigger
          onClick={() => {
            openWindow(app);
          }}
          className={`w-12 h-12 p-1
        flex place-items-center
        rounded cursor-default 
        hover:bg-white/20 
        active:bg-white/35 
        select-none transition-all duration-200
        ${className && className}`}
        >
          {/* <Image
        src={app.icon ?? '/favicon.ico'}
        width={48}
        height={48}
        alt={app.label}
        draggable={false}
        /> */}
          <div className='w-10 h-10 bg-green-500 shadow'>

          </div>
        </TooltipTrigger>
      </Tooltip>
    </TooltipProvider>
  )
}

export default TaskbarIcon