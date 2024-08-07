import React, { ReactNode } from 'react'

import css from '@/styles/Applications/ApplicationWrapper.module.css'

interface Props {
  children: ReactNode;
  className?: string;
}

const ApplicationWrapper: React.FC<Props> = (props: Props) => {
  return (
    <div className={`${css.applicationWrapper} ${props.className}`}>
      {props.children}
    </div>
  )
}

export default ApplicationWrapper