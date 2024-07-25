import React, { ReactNode, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import gsap from 'gsap';
import WindowTitleBar from './WindowTitleBar';

import css from '@/styles/Window/AppWindow.module.css'
import useWindowDimensions from './useWindowDimensions';

interface Props {
  id: string;
  title: string;
  children: ReactNode;
  zIndex: number;
  onClose: () => void;
  onFocus: () => void;
}

const AppWindow = (props: Props) => {
  const { id, title, children, zIndex, onClose, onFocus } = props;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { height, width } = useWindowDimensions();

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

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.zIndex = `${zIndex}`;
    }
  }, [zIndex]);

  return (
    <Draggable 
      handle="#handler"
      onMouseDown={onFocus}
      defaultPosition={{x: width / 2.5, y: height / 3}}
      bounds={{
        top: 0,
        bottom: height - 64
      }}

    >
      <div
        id={id}
        ref={containerRef}
        className={css.appWindowContainer}
      >
        <WindowTitleBar title={title} onClose={closeWindow} />
        <div className="h-full w-full bg-purple-500">
          {children}
        </div>
      </div>
    </Draggable>
  );
};

export default AppWindow;
