import React from 'react'
import PlaceholderDesktopIcon from '../dev/PlaceholderDesktopIcon'
import css from '@/styles/Desktop/DesktopGrid.module.css'

interface Props {}

const DesktopGrid = (props: Props) => {
  return (
    <div className={css.desktopGridContainer}>
      <PlaceholderDesktopIcon iconText='Testy' isShortcut={false} />
      <PlaceholderDesktopIcon iconText='Ciao bel ciao bel ciao bel Ciao bel ciao bel ciao bel' isShortcut={true} />
      <PlaceholderDesktopIcon iconText='My Computer' isShortcut={true} />
      <PlaceholderDesktopIcon iconText='God of War' isShortcut={false} />
    </div>
  )
}

export default DesktopGrid