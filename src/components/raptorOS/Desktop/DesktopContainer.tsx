import React, { useState, useEffect } from 'react';
import css from '@/styles/Desktop/DesktopContainer.module.css';

import DesktopItem from './DesktopItem';
import { defaultItems } from '@/defaultItems';

interface Props {}

const DesktopContainer = (props: Props) => {
  return (
    <div className={css.desktopContainer}>
      {defaultItems.map(item => (
        <DesktopItem 
          key={item.id}
          id={item.id}
          label={item.label}
          image={item.icon}
          isShortcut={item.isShortcut} 
        />
      ))}
      <div className={css.backgroundContainer} />
    </div>
  );
}

export default DesktopContainer;