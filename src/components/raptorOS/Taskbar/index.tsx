import React, { useState, useEffect } from 'react';
import TaskbarItem from './TaskbarItem';
import { Item } from '@/components/raptorOS/ItemLists/SharedItems';

import css from '@/styles/raptorOS/Taskbar/Taskbar.module.css';

import dynamic from 'next/dynamic';

interface Props {}

const Taskbar: React.FC<Props> = (props: Props) => {
  const [loadedDefaultitems, setLoadedDefaultItems] = useState<Item[]>([]);

  const TaskbarTime = dynamic(() => import('./TaskbarTime'), { ssr: false });

  useEffect(() => {
    const loadItems = () => {
      import('@/components/raptorOS/ItemLists/TaskbarItems').then((module) => {
        setLoadedDefaultItems(module.TaskbarItems);
      });
    };

    loadItems();
  }, []);

  return (
    <nav className={css.taskbar}>
      <div className={css.taskbarItemsContainer}>
        {loadedDefaultitems.map(item => (
          <TaskbarItem
            key={item.id}
            id={item.id}
            label={item.label}
            isShortcut={false}
            icon={item.icon}
            content={item.content}
          />
        ))}
      </div>
      <TaskbarTime />
    </nav>
  );
};

export default Taskbar;
