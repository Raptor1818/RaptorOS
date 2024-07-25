import React from 'react';
import dynamic from 'next/dynamic'

type Props = {};

const Taskbar = (props: Props) => {
  const TaskbarTime = dynamic(() => import('./TaskbarTime'), { ssr: false })

  return (
    <nav className='h-[48px] w-screen flex flex-row justify-between items-center bg-black bg-opacity-25 bottom-0 fixed p-1 select-none z-[999] backdrop-blur-xl'>
      <div className='w-full flex flex-row justify-start items-center gap-1 pl-2'> {/* Icons */}
        <div className='bg-red-500 w-[42px] h-[42px] rounded-md'></div>
        <div className='bg-red-500 w-[42px] h-[42px] rounded-md'></div>
        <div className='bg-red-500 w-[42px] h-[42px] rounded-md'></div>
      </div>
      <TaskbarTime></TaskbarTime>
    </nav>
  );
};

export default Taskbar;
