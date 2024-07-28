import React from 'react'
import Image from 'next/image'

interface Props {
  iconText: string;
  isShortcut: boolean;
}

const PlaceholderDesktopIcon = (props: Props) => {
  return (
    <div
      className='border border-transparent hover:border-red-500 w-[74px] h-fit flex flex-col place-items-center p-1 relative parent'
      tabIndex={0}
    >
      <div className='bg-blue-500 w-[48px] h-[48px] relative'>
        {props.isShortcut ? 
          <Image 
            src="/shortcut_arrow.png"
            width={14}
            height={14}
            alt=""
            className='select-none absolute bottom-0 left-0'
          />
          : <></>}
      </div>
      <p
        className='text-white text-center py-[2px] select-none text-xs truncate-multiline focus:outline-none'
        style={{ textShadow: `
          rgba(0, 0, 0, 0.75) 0px 0px 1px, 
          rgba(0, 0, 0, 0.5) 0px 0px 2px, 
          rgba(0, 0, 0, 0.75) 0px 1px 1px, 
          rgba(0, 0, 0, 0.5) 0px 1px 2px, 
          rgba(0, 0, 0, 0.75) 0px 2px 1px, 
          rgba(0, 0, 0, 0.5) 0px 2px 2px;
        ` }}
      >
        {props.iconText}
      </p>
    </div>
  )
}

export default PlaceholderDesktopIcon;
