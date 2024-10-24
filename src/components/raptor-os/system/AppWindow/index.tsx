'use client'
import React from 'react'
import { Rnd } from 'react-rnd'
import WindowTitleBar from './WindowTitleBar';
import { Skeleton } from '@/components/ui/skeleton';
import { AppWindowType } from '@/context/WindowProvider/window-provider';

interface Props extends AppWindowType {
  closeWindow: (id: string) => void;
}

const index = (props: Props) => {
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
      className={`${props.notRounded ? "" : "rounded-lg"} overflow-hidden border 
        flex flex-col bg-background
        ${props.className && props.className}
      `}
      dragHandleClassName='window-handle'
    >
      <WindowTitleBar
        className={`window-handle ${props.titleBarClassName && props.titleBarClassName}`}
        label={props.label}
        icon={props.icon}
        id={props.id}
        closeWindow={props.closeWindow}
      />
      {
        props.appContent ??
        <Skeleton className='w-full h-full rounded-none' />
      }
    </Rnd>
  )
}

export default index