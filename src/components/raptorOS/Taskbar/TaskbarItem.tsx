import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import css from '@/styles/Taskbar/TaskbarItem.module.css';
import { useWindowContext } from '@/context/raptorOS/WindowContext';

import { Item } from '@/defaultItems'

interface TaskbarItemProps extends Item {
  isMinimized?: boolean;
}

const TaskbarItem = (props: TaskbarItemProps) => {
  const { addWindow, getWindowById } = useWindowContext();

  const [isMinimized, setIsMinimized] = useState<boolean>(false)

  const handleClick = () => {
    addWindow(props.id, props.label, false, props.content)
  }
  useEffect(() => {
    const existingWindow = getWindowById(props.id);
    if (existingWindow) {
      setIsMinimized(existingWindow.isMinimized);
    }
  }, [getWindowById, props.id]);

  return (
    <div 
      className={css.taskbarItemContainer}
      onClick={handleClick}
    >
      <Image
        src={props.icon}
        width={28}
        height={28}
        alt={props.label}
        draggable={false}
      />
    </div>
  );
};

export default TaskbarItem;
