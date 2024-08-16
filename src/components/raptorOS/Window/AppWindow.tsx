import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { Rnd } from 'react-rnd';
import gsap from 'gsap';
import WindowTitleBar from './WindowTitleBar';
import css from '@/styles/Window/AppWindow.module.css';
import useWindowDimensions from './useWindowDimensions';

interface Props {
  id: string;
  title: string;
  icon: string;
  children: ReactNode;
  zIndex: number;
  onClose: () => void;
  onMinimize: () => void;
  onFocus: () => void;
  isFocused: boolean;
  isMinimized: boolean;
}

const AppWindow = (props: Props) => {
  const { id, title, icon, children, zIndex, onClose, onMinimize, onFocus, isFocused, isMinimized } = props;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { height, width } = useWindowDimensions();
  
  const [isStarted, setStarted] = useState<boolean>(false)
  const [stateMinimized, setStateMinimized] = useState<boolean>(true)
  
  const closeWindow = () => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.2,
        onComplete: onClose,
      });
    }
  };

  const minimizeWindow = () => { window
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        opacity: 0,
        translateY: 200,
        duration: 0.3,
        onComplete: onMinimize,
      });
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.zIndex = `${zIndex}`;
    }
  }, [zIndex]);

  useEffect(() => {
    setStateMinimized(isMinimized);
    if (containerRef.current && isStarted && !isMinimized) {
      gsap.to(containerRef.current, {
        opacity: 1,
        translateY: 0,
        duration: 0.3,
      });
    }
  }, [isMinimized])

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(containerRef.current, 
        {
          opacity: 0,
          scale: 0.9
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.2,
          onComplete: () => {
            setStarted(true)
          }
        }
      );
    }
  }, []);

  return (
    <Rnd
      default={{
        x: Math.ceil(width / 4),
        y: Math.ceil(height / 6),
        width: Math.ceil(width / 2),
        height: Math.ceil(height / 1.5),
      }}
      minWidth={300}
      minHeight={200}
      onMouseDown={() => onFocus()}
      dragHandleClassName="drag-handle"
      resizeHandleStyles={{
        bottom: { cursor: 'ns-resize' },
        left: { cursor: 'ew-resize' },
        right: { cursor: 'ew-resize' },
        top: { cursor: 'ns-resize' },
      }}
      style={{ zIndex }}
      enableResizing={!stateMinimized}
      bounds={'body'}
    >
      <div
        id={id}
        ref={containerRef}
        className={`
          ${css.appWindowContainer} 
          ${isFocused ? css.appWindowContainerFocused : ''} 
          ${stateMinimized ? 'select-none' : ''}
        `}
      >
        <WindowTitleBar title={title}  icon={icon} onClose={closeWindow} onMinimize={minimizeWindow} isFocused={isFocused} />
        {children}
      </div>
    </Rnd>
  );
};

export default AppWindow;
