import React, { useState, useEffect } from 'react';

type Props = {}

const TaskbarTime = (props: Props) => {
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
    <div className='w-fit flex flex-col items-center justify-center text-sm text-nowrap pr-2'>
        <p suppressHydrationWarning>{dateTime.timeString}</p>
        <p>{dateTime.dateString}</p>
    </div>
  )
}

export default TaskbarTime