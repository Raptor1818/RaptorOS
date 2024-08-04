import React from 'react';
import Image from 'next/image';
import { useWindowContext } from '@/context/raptorOS/WindowContext';
import DevContent from '@/components/raptorOS/dev/DevContent';
import DevContent2 from '@/components/raptorOS/dev/DevContent2';

import css from '@/styles/Desktop/DesktopItem.module.css';

interface Props {
  id: string;
  label: string;
  image: any;
  isShortcut: boolean;
}

const DesktopItem = (props: Props) => {
  const { addWindow } = useWindowContext();

  const handleDoubleClick = () => {
    let content;
    switch (props.label) {
      case 'testerino':
        content = <DevContent />;
        break;
      case 'New folder':
        content = <DevContent2 />;
        break;
      default:
        content = <div>Unknown Content</div>;
        break;
    }
    addWindow(props.id, props.label, content);
  };

  return (
    <div
      id={props.id}
      className={`${css.itemContainer} parent`}
      tabIndex={0}
      onDoubleClick={handleDoubleClick}
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
            src={props.image}
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
