import React, { useState, useEffect } from 'react';
import css from '@/styles/Desktop/DesktopContainer.module.css';
import DesktopItem from './DesktopItem';
import { Item } from '@/components/raptorOS/ItemLists/SharedItems';

const DesktopContainer = () => {
  const [loadedDefaultItems, setLoadedDefaultItems] = useState<Item[]>([]);

  useEffect(() => {
    const loadItems = () => {
      import('@/components/raptorOS/ItemLists/DesktopItems').then((module) => {
        setLoadedDefaultItems(module.DesktopItems);
      });
    };

    loadItems();
  }, []);

  return (
    <div className={css.desktopContainer}>
      {loadedDefaultItems.map(item => (
        <DesktopItem
          key={item.id}
          id={item.id}
          label={item.label}
          icon={item.icon}
          isShortcut={item.isShortcut}
          content={item.content}
          url={item.url}
        />
      ))}
    </div>
  );
}

export default DesktopContainer;
