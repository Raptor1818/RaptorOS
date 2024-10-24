'use client';
import { AppWindowType, useWindowContext } from '@/context/WindowProvider/window-provider'
import React from 'react'
import AppWindow from '../AppWindow';

interface Props { }

const index = (props: Props) => {
  const context = useWindowContext();
  return (
    <div className='z-10'>
      {/* List all the apps present in the array.
        TODO: implement minimizing
    */}
      {context.windows.map((window: AppWindowType) => (
        <AppWindow
          key={window.id}
          {...window}
          closeWindow={context.closeWindow} />
      ))}
    </div>
  )
}

export default index