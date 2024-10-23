import React from 'react'
import { X } from 'lucide-react'

interface Props {
  className?: string;
}

const WindowTitleBar = ({ className }: Props) => {
  return (
    <div className={`w-full h-10 flex flex-row justify-between items-center bg-green-400 ${className && className}`}>
      <span className='pl-2'>
        CIAO!
      </span>
      <div className='h-full flex flex-row items-start'>
        <button className='h-fit px-4 py-1 bg-red-500'>
          <X size={20} />
        </button>
      </div>
    </div>
  )
}

export default WindowTitleBar