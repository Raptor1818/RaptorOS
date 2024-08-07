import React, { useState, useEffect } from 'react';

import css from '@/styles/Taskbar/TaskbarTime.module.css'

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
    <div className={css.taskbarTimeContainer}>
      <p suppressHydrationWarning>{dateTime.timeString}</p>
      <p>{dateTime.dateString}</p>
    </div>
  )
}

export default TaskbarTime