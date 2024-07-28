import React from 'react';
import Image from 'next/image';

import css from '@/styles/Desktop/DesktopItem.module.css';

interface Props {
  itemText: string;
  isShortcut: boolean;
}

const DesktopItem = (props: Props) => {
  return (
    <div
      className={`${css.itemContainer} parent`}
      tabIndex={0}
    >
      <div className={css.itemImage}>
        {props.isShortcut ? 
          <Image 
            src="/shortcut_arrow.png"
            width={14}
            height={14}
            alt=""
            className={css.shortcutIcon}
          />
          : <></>}
      </div>
      <p className={`${css.itemText} truncate-multiline`}>
        {props.itemText}
      </p>
    </div>
  )
}

export default DesktopItem;
