import React from 'react'
import { Minus, X } from 'lucide-react'
import Image from 'next/image';
import { useSettingsContext } from '@/context/SettingsProvider/settings-provider';

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
  id,
  label,
  icon,
  isFocused,
  closeWindow,
  minimizeWindow,
  className
}: Props) => {
  const settingsContext = useSettingsContext();

  return (
    <div className={`w-full h-8 flex flex-row justify-between items-center select-none backdrop-blur-md overflow-hidden
      ${isFocused ?
        `${settingsContext.glassStyle ? 'bg-black/35' : 'bg-black/50'}`
        :
        `${settingsContext.glassStyle ? 'bg-black/70' : 'bg-black/90'}`
      } 
      ${className && className}`}
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