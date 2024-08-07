import React from 'react';
import Image from 'next/image';

import css from '@/styles/Taskbar/TaskbarItem.module.css';
import { useWindowContext } from '@/context/raptorOS/WindowContext';

import { Item } from '@/defaultItems'

const TaskbarItem = (props: Item) => {
  const { addWindow } = useWindowContext();

  
  
  return (
    <div className={css.taskbarItemContainer}
      onClick={() => {addWindow(props.id, props.label, props.content)}}
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
