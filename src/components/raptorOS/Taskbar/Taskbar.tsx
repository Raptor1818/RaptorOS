import React, { useState, useEffect } from 'react';
import css from '@/styles/Taskbar/Taskbar.module.css';
import TaskbarItem from './TaskbarItem';
import { Item } from '@/defaultItems';

interface Props {}

const Taskbar: React.FC<Props> = (props: Props) => {
  const [loadedDefaultitems, setLoadedDefaultItems] = useState<Item[]>([]);

  useEffect(() => {
    const loadItems = () => {
      import('@/defaultItems').then((module) => {
        setLoadedDefaultItems(module.defaultItems);
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
    </nav>
  );
};

export default Taskbar;
