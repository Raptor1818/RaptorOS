import React, { useState, useEffect } from 'react';
import css from '@/styles/Desktop/DesktopContainer.module.css';
import DesktopItem from './DesktopItem';
import { Item } from '@/defaultItems';
import Image from 'next/image';

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
      <Image 
        src={'/img/wallpapers/sferrara_sicily.jpg'} 
        alt='' 
        fill={true}
        priority={true}
        draggable={false}
        className={css.backgroundContainer} />
    </div>
  );
}

export default DesktopContainer;
