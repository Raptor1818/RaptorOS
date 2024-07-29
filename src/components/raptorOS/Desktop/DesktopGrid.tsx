import React from 'react'
import css from '@/styles/Desktop/DesktopGrid.module.css'
import DesktopItem from './DesktopItem'

const pcImg = '/img/icons/pc.webp'
const unknownImg = '/img/icons/unknown.webp'
const executableImg = '/img/icons/executable.webp'

interface Props {}

const DesktopGrid = (props: Props) => {
  return (
    <div className={css.desktopGridContainer}>
      <DesktopItem itemText='My Computer' isShortcut={false} itemImage={pcImg}/>
      <DesktopItem itemText='idrk.jar' isShortcut={false} itemImage={unknownImg}/>
      <DesktopItem itemText='Fake.exe' isShortcut={true} itemImage={executableImg}/>
    </div>
  )
}

export default DesktopGrid