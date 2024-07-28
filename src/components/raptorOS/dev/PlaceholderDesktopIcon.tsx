import React from 'react'

type Props = {}


const PlaceholderDesktopIcon = (props: Props) => {
  return (
    <div className='border border-transparent hover:border-red-500 w-[74px] h-fit flex flex-col place-items-center'>
      <div className='bg-blue-500 w-[48px] h-[48px]'></div>
      <p className='text-white py-1 text-center select-none text-sm'
      style={{ textShadow: 'rgba(0, 0, 0, 0.75) 0px 1px 1px' }}>
        icon
      </p>
    </div>
  )
}

export default PlaceholderDesktopIcon