import React from 'react'

import '@/styles/raptor-os/system/applications/AppWrapper.css'

interface Props {
  className?: string;
  children: React.ReactNode;
}

const AppWrapper = ({ className, children }: Props) => {
  return (
    <div className={`desktop-app-wrapper w-full h-full overflow-scroll bg-background ${className && className}`}>
      {children}
    </div>
  )
}

export default AppWrapper