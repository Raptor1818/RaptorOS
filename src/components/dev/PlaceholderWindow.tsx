import React, { ReactNode, useEffect, useState } from 'react'
import Draggable from 'react-draggable'

interface Props {
  windowHeader: string;
  children: ReactNode;
}

const PlaceholderWindow = (props: Props) => {
  const [hideWindow, setHideWindow] = useState(false);

  const closeWindow = () => {
    setHideWindow(true)
  }

  useEffect(() => {
  }, [hideWindow]);

  if (hideWindow) 
    return null
  else 
    return (
    <Draggable handle='#handler'>
      <div className='h-64 w-96 border flex flex-col justify-between absolute'>
        <div id='handler' className='w-full bg-green-500 p-1 flex flex-row justify-between items-center hover:cursor-move'>
          <h2 className=' select-none w-fit'>{props.windowHeader}</h2>
          <button className='border cursor-pointer z-10 w-fit px-2 bg-red-500' onClick={closeWindow}>X</button>
        </div>
        <div className='h-full w-full bg-purple-500'>
          <p></p>
          {props.children}
        </div>
      </div>
    </Draggable>
  )
}

export default PlaceholderWindow