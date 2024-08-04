import React from 'react';
import Image from 'next/image';

import css from '@/styles/Taskbar/TaskbarItem.module.css';

interface Props {
  id: string;
  label: string;
  image: string;
}

const TaskbarItem = (props: Props) => {
  return (
    <div className={css.taskbarItemContainer}>
      <Image
        src={props.image}
        width={28}
        height={28}
        alt={props.label}
        draggable={false}
      />
    </div>
  );
};

export default TaskbarItem;
