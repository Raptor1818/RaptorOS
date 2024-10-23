'use client'
import React from 'react'
import { Rnd } from 'react-rnd'
import WindowTitleBar from './WindowTitleBar';
import { Skeleton } from '@/components/ui/skeleton';

interface Props {
  children?: React.ReactNode;
  notRounded?: boolean;
  className?: string;
  titleBarClassName?: string;
}

const index = ({ children, notRounded, className, titleBarClassName }: Props) => {
  return (
    <Rnd
      default={{
        x: 0,
        y: 0,
        width: 400,
        height: 300,
      }}
      minWidth={400}
      minHeight={300}
      resizeHandleStyles={{
        bottom: { cursor: "ns-resize" },
        left: { cursor: "ew-resize" },
        right: { cursor: "ew-resize" },
        top: { cursor: "ns-resize" },
      }}
      className={`${notRounded ? "" : "rounded-lg"} overflow-hidden border 
        flex flex-col bg-background
        ${className && className}
      `}
      dragHandleClassName='window-handle'
    >
      <WindowTitleBar className={`window-handle ${titleBarClassName && titleBarClassName}`}></WindowTitleBar>
      {
        children ??
        <Skeleton className='w-full h-full rounded-none' />
      }
    </Rnd>
  )
}

export default index