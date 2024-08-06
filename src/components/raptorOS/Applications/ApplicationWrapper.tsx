import React, { ReactNode } from 'react'

import css from '@/styles/Applications/ApplicationWrapper.module.css'

interface Props {
  children: ReactNode;
  className?: string;
}

const ApplicationWrapper: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={`${css.applicationWrapper} ${className}`}>
      {children}
    </div>
  )
}

export default ApplicationWrapper