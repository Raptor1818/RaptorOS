import React from 'react'
import { X } from 'lucide-react'
import Image from 'next/image';

interface Props {
  id: string;
  label: string;
  icon?: string;
  closeWindow: (id: string) => void;
  className?: string;
}

const WindowTitleBar = ({
  id,
  label,
  icon,
  closeWindow,
  className
}: Props) => {
  return (
    <div className={`w-full h-10 flex flex-row justify-between items-center bg-green-400 ${className && className}`}>
      {
        // If there is an icon, display it
        icon && (
          <Image src={icon} alt={label} width={20} height={20} />
        )
      }
      <span className='pl-2'>
        {label}
      </span>
      <div className='h-full flex flex-row items-start'>
        <button className='h-fit px-4 py-1 bg-red-500'
          onClick={() => { closeWindow(id) }}>
          <X size={20} />
        </button>
      </div>
    </div>
  )
}

export default WindowTitleBar