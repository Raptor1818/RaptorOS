import React from 'react'
import PlaceholderDesktopIcon from '../dev/PlaceholderDesktopIcon'
import css from '@/styles/Desktop/DesktopGrid.module.css'

interface Props {}

const DesktopGrid = (props: Props) => {
  return (
    <div className={css.desktopGridContainer}>
      <PlaceholderDesktopIcon></PlaceholderDesktopIcon>
      <PlaceholderDesktopIcon></PlaceholderDesktopIcon>
      <PlaceholderDesktopIcon></PlaceholderDesktopIcon>
      <PlaceholderDesktopIcon></PlaceholderDesktopIcon>
      <PlaceholderDesktopIcon></PlaceholderDesktopIcon>
      <PlaceholderDesktopIcon></PlaceholderDesktopIcon>
      <PlaceholderDesktopIcon></PlaceholderDesktopIcon>
      <PlaceholderDesktopIcon></PlaceholderDesktopIcon>
      <PlaceholderDesktopIcon></PlaceholderDesktopIcon>
      <PlaceholderDesktopIcon></PlaceholderDesktopIcon>
      <PlaceholderDesktopIcon></PlaceholderDesktopIcon>
    </div>
  )
}

export default DesktopGrid