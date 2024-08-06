import React, { useState, useEffect } from 'react';
import css from '@/styles/Desktop/DesktopContainer.module.css';
import DesktopItem from './DesktopItem';
import { Item } from '@/defaultItems';

interface Props {}

const DesktopContainer: React.FC<Props> = (props: Props) => {
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
    <div className={css.desktopContainer}>
      {loadedDefaultitems.map(item => (
        <DesktopItem
          key={item.id}
          id={item.id}
          label={item.label}
          icon={item.icon}
          isShortcut={item.isShortcut}
          content={item.content}
        />
      ))}
      <div className={css.backgroundContainer} />
    </div>
  );
}

export default DesktopContainer;
