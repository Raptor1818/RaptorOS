'use client'
import React, { useEffect, useRef } from 'react'
import { Rnd } from 'react-rnd'
import WindowTitleBar from './WindowTitleBar';
import { Skeleton } from '@/components/ui/skeleton';
import { AppWindowType } from '@/context/WindowProvider/window-provider';

interface Props extends AppWindowType {
  closeWindow: (id: string) => void;
  onFocus: () => void;
  zIndex: number;
  isFocused: boolean;
}


const index = (props: Props) => {
  const containerRef = useRef<Rnd | null>(null);
  const [currentZIndex, setCurrentZIndex] = React.useState(props.zIndex);

  useEffect(() => {
    if (containerRef.current) {
      setCurrentZIndex(props.zIndex);
    }
  }, [props.zIndex]);

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

      ref={containerRef}

      onMouseDown={props.onFocus}

      style={{ zIndex: currentZIndex }}
    >
      <WindowTitleBar
        className={`window-handle ${props.titleBarClassName && props.titleBarClassName}`} // If an app needs a different title bar than the default
        label={props.label}
        icon={props.icon}
        id={props.id}
        closeWindow={props.closeWindow}
        isFocused={props.isFocused}
      />
      {
        props.appContent ??
        <Skeleton className='w-full h-full rounded-none' /> // TODO: CHANGE | If an app is not loading properly
      }
    </Rnd>
  )
}

export default index