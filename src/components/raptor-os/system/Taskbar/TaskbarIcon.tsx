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
        rounded-md cursor-default 
        hover:bg-white/20 
        active:bg-white/35 
        select-none transition-all duration-200
        ${className && className}`}
        >
          <Image
            src={app.icon ?? '/img/missing.webp'}
            width={48}
            height={48}
            alt={app.label}
            draggable={false}
            placeholder='empty'
          />
        </TooltipTrigger>
      </Tooltip>
    </TooltipProvider>
  )
}

export default TaskbarIcon