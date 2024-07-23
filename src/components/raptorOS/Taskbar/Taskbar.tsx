import React from 'react';
import dynamic from 'next/dynamic'

type Props = {};

const Taskbar = (props: Props) => {
  const TaskbarTime = dynamic(() => import('./TaskbarTime'), { ssr: false })

  return (
    <nav className='h-[48px] w-screen flex flex-row justify-between items-center bg-blue-400 bottom-0 fixed p-1 select-none z-[999]'>
      <div className='w-full flex flex-row justify-start items-center gap-1 pl-3'> {/* Icons */}
        <div className='bg-red-500 w-[42px] h-[42px]'></div>
        <div className='bg-red-500 w-[42px] h-[42px]'></div>
        <div className='bg-red-500 w-[42px] h-[42px]'></div>
      </div>
      <TaskbarTime></TaskbarTime>
    </nav>
  );
};

export default Taskbar;
