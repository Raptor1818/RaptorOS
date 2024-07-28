import React from 'react'
import DesktopGrid from "@/components/raptorOS/Desktop/DesktopGrid";
import css from '@/styles/Desktop/Desktop.module.css'

type Props = {}

const Desktop = (props: Props) => {
  return (
    <div>
      <DesktopGrid />
      <div className={css.backgroundContainer}></div>
    </div>
  )
}

export default Desktop