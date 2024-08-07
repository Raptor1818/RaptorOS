import React, { ReactNode, useEffect, useRef } from 'react';
import { Rnd } from 'react-rnd';
import gsap from 'gsap';
import WindowTitleBar from './WindowTitleBar';
import css from '@/styles/Window/AppWindow.module.css';
import useWindowDimensions from './useWindowDimensions';

interface Props {
  id: string;
  title: string;
  children: ReactNode;
  zIndex: number;
  onClose: () => void;
  onFocus: () => void;
  isFocused: boolean;
}

const AppWindow = (props: Props) => {
  const { id, title, children, zIndex, onClose, onFocus, isFocused } = props;
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
        }
      );
    }
  }, []);

  return (
    <Rnd
      default={{
        x: width / 3,
        y: height / 4,
        width: width / 3,
        height: height / 2,
      }}
      minWidth={400}
      minHeight={300}
      onMouseDown={() => onFocus()}
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
        <WindowTitleBar title={title} onClose={closeWindow} isFocused={isFocused} />
        {children}
      </div>
    </Rnd>
  );
};

export default AppWindow;
