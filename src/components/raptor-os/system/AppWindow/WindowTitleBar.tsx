'use client';
import React from 'react'
import { Minus, X } from 'lucide-react'
import Image from 'next/image';
import { useSettingsContext } from '@/context/SettingsProvider/settings-provider';
import clsx from 'clsx';

interface Props {
  id: string;
  label: string;
  icon?: string;
  closeWindow: () => void;
  minimizeWindow: () => void;
  className?: string;
  isFocused: boolean;
}

const WindowTitleBar = ({
  label,
  icon,
  isFocused,
  closeWindow,
  minimizeWindow,
  className
}: Props) => {
  const settingsContext = useSettingsContext().settings;

  return (
    <div className={clsx(`w-full h-8 flex flex-row justify-between items-center select-none md:backdrop-blur-md overflow-hidden transition-all duration-200`,
      {
        'bg-black/35': settingsContext.glassStyle && isFocused,
        'bg-neutral-950 md:bg-black/50': !settingsContext.glassStyle && isFocused,
        'md:bg-black/70': settingsContext.glassStyle && !isFocused,
        'bg-neutral-800 md:bg-black/90': !settingsContext.glassStyle && !isFocused,
      },
      {
        'backdrop-blur-md': settingsContext.glassStyle
      },
      className)}
    >
      <div className='window-handle w-full h-full flex flex-row gap-2 px-4 items-center justify-start pl-2'>
        {
          icon && (
            <Image src={icon} alt={''} width={20} height={20} draggable={false} />
          )
        }
        <span>
          {label}
        </span>
      </div>
      <div className='h-full flex flex-row items-start justify-end'>
        <button className='h-full px-4 py-1 transition duration-200 cursor-default hover:bg-white/20 active:bg-white/25'
          onClick={minimizeWindow}>
          <Minus size={20} />
        </button>
        <button className='h-full px-4 py-1 transition duration-200 cursor-default hover:bg-red-500 active:bg-destructive'
          onClick={closeWindow}>
          <X size={20} />
        </button>
      </div>
    </div>
  )
}

export default WindowTitleBar