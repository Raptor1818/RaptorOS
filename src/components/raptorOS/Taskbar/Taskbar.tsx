import React, { useState, useEffect } from 'react';

type Props = {};

const Taskbar = (props: Props) => {
  const [dateTime, setDateTime] = useState({
    timeString: new Date().toLocaleTimeString(),
    dateString: new Date().toLocaleDateString(),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const d = new Date();
      setDateTime({
        timeString: d.toLocaleTimeString(),
        dateString: d.toLocaleDateString(),
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className='h-[48px] w-screen flex flex-row justify-between items-center bg-blue-400 bottom-0 fixed p-1 select-none z-[999]'>
      <div className='w-full flex flex-row justify-start items-center gap-1 pl-3'> {/* Icons */}
        <div className='bg-red-500 w-[42px] h-[42px]'></div>
        <div className='bg-red-500 w-[42px] h-[42px]'></div>
        <div className='bg-red-500 w-[42px] h-[42px]'></div>
      </div>
      <div className='w-fit flex flex-col items-center justify-center text-sm text-nowrap pr-2'>
        <p suppressHydrationWarning>{dateTime.timeString}</p>
        <p>{dateTime.dateString}</p>
      </div>
    </nav>
  );
};

export default Taskbar;
