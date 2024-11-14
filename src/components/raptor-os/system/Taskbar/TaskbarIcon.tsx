'use client'
import { useWindowContext, type AppWindowType } from '@/context/WindowProvider/window-provider';
import React, { useEffect, useRef, useState } from 'react'
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

import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';


const TaskbarIcon = ({ app, openWindow, className }: Props) => {
  const context = useWindowContext();
  const iconRef = useRef<HTMLImageElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [appOpen, setAppOpen] = useState(false);
  const [isActive, setActive] = useState(false);

  // GSAP Icon scale animation
  useGSAP(() => {
    if (iconRef.current) {
      if (isActive) {
        gsap.to(iconRef.current, {
          scale: 0.8,
          duration: 0.15,
        });
      } else {
        gsap.to(iconRef.current, {
          scale: 1,
          duration: 0.15,
        });
      }
    }
  }, [isActive]);

  // If app window is focused, set bg color
  useEffect(() => {
    if (context.focusedWindowId === app.id) {
      setIsFocused(true);
    } else {
      setIsFocused(false);
    }
  }, [context.focusedWindowId]);

  // If app window is open, set border color
  useEffect(() => {
    if (context.getWindowById(app.id)) {
      setAppOpen(true);
    } else {
      setAppOpen(false);
    }
  }, [context.windows]);

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
          onMouseDown={() => { setActive(true) }}
          onMouseUp={() => { setActive(false) }}
          className={`w-14 h-14
            flex items-center justify-center
            rounded-md cursor-default border border-transparent
            
            ${isFocused && 'bg-white/20'}
            hover:bg-white/30
            active:bg-white/45 
            
            select-none transition-all duration-200
            ${className && className}`}
        >
          <div className={`
          absolute top-0 md:top-auto md:-left-0  rounded-lg
          ${appOpen ? 'opacity-100' : 'opacity-0'}
          ${isFocused ? 'bg-taskbar-icon-window-focused w-8 h-1 md:w-1 md:h-8' : 'w-1.5 h-1.5 bg-white/50'}
          transition-all duration-200
            `} />
          <Image
            ref={iconRef}
            src={app.icon ?? '/img/missing.webp'}
            width={36}
            height={36}
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