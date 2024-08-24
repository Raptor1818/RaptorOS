import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { Rnd } from 'react-rnd';
import gsap from 'gsap';
import WindowTitleBar from './WindowTitleBar';
import useWindowDimensions from './useWindowDimensions';
import UAParser from 'ua-parser-js';

import css from '@/styles/raptorOS/Window/AppWindow.module.css';

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

  const [isStarted, setStarted] = useState<boolean>(false);
  const [wasMinimized, setWasMinimized] = useState<boolean>(false);

  const parser = new UAParser();
  const deviceType = parser.getDevice().type || 'desktop';

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

  const minimizeWindow = () => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        opacity: 0,
        translateY: 300,
        duration: 0.3,
        onComplete: () => {
          onMinimize();
          setWasMinimized(true);
        },
      });
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.zIndex = `${zIndex}`;
    }
  }, [zIndex]);

  useEffect(() => {
    if (wasMinimized && !isMinimized) {
      if (containerRef.current) {
        gsap.fromTo(
          containerRef.current,
          {
            opacity: 0,
            translateY: 300,
          },
          {
            opacity: 1,
            translateY: 0,
            duration: 0.3,
            onComplete: () => setWasMinimized(false),
          }
        );
      }
    }
  }, [isMinimized, wasMinimized]);

  useEffect(() => {
    if (containerRef.current && !wasMinimized) {
      gsap.fromTo(
        containerRef.current,
        {
          opacity: 0,
          scale: 0.9,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.2,
          onComplete: () => {
            setStarted(true);
          },
        }
      );
    }
  }, []);

  if (isMinimized) {
    return null;
  }

  const defaultPosition = deviceType === 'mobile'
    ? { 
      x: 0, 
      y: Math.ceil(height / 4), 
      width, 
      height: Math.ceil(height / 2) 
    } : { 
      x: Math.ceil(width / 4), 
      y: Math.ceil(height / 6), 
      width: Math.ceil(width / 2), 
      height: Math.ceil(height / 1.5) 
    };

  return (
    <Rnd
      default={defaultPosition}
      minWidth={300}
      minHeight={200}
      onMouseDown={onFocus}
      dragHandleClassName="drag-handle"
      resizeHandleStyles={{
        bottom: { cursor: 'ns-resize' },
        left: { cursor: 'ew-resize' },
        right: { cursor: 'ew-resize' },
        top: { cursor: 'ns-resize' },
      }}
      style={{ zIndex }}
    >
      <div
        id={id}
        ref={containerRef}
        className={`${css.appWindowContainer} ${isFocused ? css.appWindowContainerFocused : ''}`}
      >
        <WindowTitleBar title={title} icon={icon} onClose={closeWindow} onMinimize={minimizeWindow} isFocused={isFocused} />
        {children}
      </div>
    </Rnd>
  );
};

export default AppWindow;
