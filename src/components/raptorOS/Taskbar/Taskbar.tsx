import React from 'react';
import dynamic from 'next/dynamic';

import css from '@/styles/Taskbar/Taskbar.module.css';
import { defaultItems } from '@/defaultItems';
import TaskbarItem from './TaskbarItem';

interface Props {}

const Taskbar = (props: Props) => {
  const TaskbarTime = dynamic(() => import('./TaskbarTime'), { ssr: false });

  return (
    <nav className={css.taskbar}>
      <div className={css.taskbarItemsContainer}>
        {defaultItems.map(item => (
          <TaskbarItem
            key={item.id}
            id={item.id}
            label={item.label}
            image={item.icon}
          />
        ))}
      </div>
      <TaskbarTime />
    </nav>
  );
};

export default Taskbar;