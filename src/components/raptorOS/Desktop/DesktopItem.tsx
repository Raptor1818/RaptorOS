import React from 'react';
import Image from 'next/image';
import { useWindowContext } from '@/context/raptorOS/WindowContext';

import { Item } from '@/components/raptorOS/ItemLists/SharedItems';

interface TaskbarItemProps extends Item {
  isMinimized?: boolean;
}

import css from '@/styles/Desktop/DesktopItem.module.css';

const DesktopItem = ({ id, label, icon, isShortcut, content, url }: TaskbarItemProps) => {
  const { addWindow } = useWindowContext();

  const handleDoubleClick = () => {
    if (isShortcut && url) {
      window.open(url, '_blank');
    } else {
      addWindow(id, label, icon, false, content);
    }
  };

  return (
    <div
      id={id}
      className={`${css.itemContainer} parent`}
      tabIndex={0}
      onDoubleClick={handleDoubleClick}
    >
      <div className={css.itemImageContainer}>
        {isShortcut && (
          <Image 
            src="/img/icons/shortcut_arrow.png"
            width={14}
            height={14}
            alt=""
            className={css.shortcutIcon}
          />
        )}
        <Image
          src={icon}
          width={48}
          height={48}
          alt={label}
          draggable={false}
        />
      </div>
      <p className={`${css.itemText} truncate-multiline`}>
        {label}
      </p>
    </div>
  );
};

export default DesktopItem;
