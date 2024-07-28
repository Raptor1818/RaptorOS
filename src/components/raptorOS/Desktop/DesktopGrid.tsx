import React from 'react'
import css from '@/styles/Desktop/DesktopGrid.module.css'
import DesktopItem from './DesktopItem'

interface Props {}

const DesktopGrid = (props: Props) => {
  return (
    <div className={css.desktopGridContainer}>
      <DesktopItem itemText='ciac iaica icciaci ggg ggg g g' isShortcut={true} />
      <DesktopItem itemText='ciaci aicaicc iaci g gg g g ' isShortcut={true} />
      <DesktopItem itemText='ciacia icai cciaci gg g g  g g' isShortcut={true} />
      <DesktopItem itemText='ciaci aicai cciaci ggggg gg g g ' isShortcut={true} />
    </div>
  )
}

export default DesktopGrid