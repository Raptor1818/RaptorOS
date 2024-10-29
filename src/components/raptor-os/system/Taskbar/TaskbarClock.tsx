'use client';
import React, { useEffect, useState } from 'react';

type Props = {}

// Based on https://github.com/ethanmick/lets-build-clock

const TaskbarClock = (_props: Props) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-fit flex flex-col 
    items-center md:text-center
    md:gap-0.5 justify-center select-none font-mono">
      <p className="w-full text-xs md:text-sm tabular-nums text-end md:text-center">
        {time.toLocaleTimeString([], { hour12: false })}
      </p>
      <p className="w-full text-xs tabular-nums">
        {time.toLocaleDateString()}
      </p>
    </div>
  );
}

export default TaskbarClock;
