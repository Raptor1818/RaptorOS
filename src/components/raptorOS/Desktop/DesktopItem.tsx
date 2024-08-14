import React from 'react';
import Image from 'next/image';
import { useWindowContext } from '@/context/raptorOS/WindowContext';

import { Item } from '@/defaultItems'

interface TaskbarItemProps extends Item {
  isMinimized?: boolean;
}

import css from '@/styles/Desktop/DesktopItem.module.css';

const DesktopItem = (props: TaskbarItemProps) => {
  const { addWindow } = useWindowContext();

  return (
    <div
      id={props.id}
      className={`${css.itemContainer} parent`}
      tabIndex={0}
      onDoubleClick={() => {
        addWindow(props.id, props.label, false, props.content)
      }}
    >
      <div className={css.itemImageContainer}>
        {props.isShortcut ? 
          <Image 
            src="/img/icons/shortcut_arrow.png"
            width={14}
            height={14}
            alt=""
            className={css.shortcutIcon}
          />
          : <></>}
          <Image
            src={props.icon}
            width={48}
            height={48}
            alt=''
            draggable={false}
          />
      </div>
      <p className={`${css.itemText} truncate-multiline`}>
        {props.label}
      </p>
    </div>
  )
}

export default DesktopItem;
