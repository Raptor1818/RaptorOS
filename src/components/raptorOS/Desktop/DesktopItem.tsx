import React from 'react';
import Image from 'next/image';

import css from '@/styles/Desktop/DesktopItem.module.css';

interface Props {
  itemText: string;
  itemImage: any;
  isShortcut: boolean;
}

const DesktopItem = (props: Props) => {
  return (
    <div
      className={`${css.itemContainer} parent`}
      tabIndex={0}
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
            src={props.itemImage}
            width={48}
            height={48}
            alt=''
            draggable={false}
          />
      </div>
      <p className={`${css.itemText} truncate-multiline`}>
        {props.itemText}
      </p>
    </div>
  )
}

export default DesktopItem;
