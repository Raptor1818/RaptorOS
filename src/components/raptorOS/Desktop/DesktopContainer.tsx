import React, { useState } from 'react'
import css from '@/styles/Desktop/DesktopGrid.module.css'
import DesktopItem from './DesktopItem'

import { v4 as uuidv4 } from 'uuid';

const pcImg = '/img/icons/Computer.ico'
const unknownImg = '/img/icons/Blank.ico'
const executableImg = '/img/icons/exe.ico'
const folderImg = '/img/icons/Folder.ico'

interface Props {}

interface Item {
  id: string,
  label: string,
  isShortcut: boolean,
  icon: any; // Is supposed to be an image
}


const DesktopContainer = (props: Props) => {
  const defaultItems: Item[] = [
    {
      id: `${uuidv4().replace(/-/g, '').slice(0, 8)}`,
      label: 'testerino',
      isShortcut: true,
      icon: pcImg
    },
    {
      id: uuidv4().replace(/-/g, '').slice(0, 8),
      label: 'New folder',
      isShortcut: false,
      icon: folderImg
    },

  ]

  const [items, setItems] = useState<Item[]>(defaultItems)

  return (
    <div className={css.desktopGridContainer}>
      {items.map(item => (
        <DesktopItem 
          id={item.id}
          label={item.label}
          image={item.icon}
          isShortcut={item.isShortcut} 
        />
      ))}
    </div>
  )
}

export default DesktopContainer