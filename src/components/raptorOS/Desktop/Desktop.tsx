import React from 'react'
import DesktopContainer from "@/components/raptorOS/Desktop/DesktopContainer";
import css from '@/styles/Desktop/Desktop.module.css'

type Props = {}
const Desktop = (props: Props) => {
  return (
    <div>
      <DesktopContainer />
      <div className={css.backgroundContainer} />
    </div>
  )
}

export default Desktop