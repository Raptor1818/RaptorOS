'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Rnd } from 'react-rnd'
import WindowTitleBar from './WindowTitleBar';
import { Skeleton } from '@/components/ui/skeleton';
import { type AppWindowType } from '@/context/WindowProvider/window-provider';
import useWindowDimensions from '@/hooks/useWindowDimensions';

import css from '@/styles/raptor-os/system/AppWindow/AppWindow.module.css';

import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';

interface Props extends AppWindowType {
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  onFocus: () => void;
  zIndex: number;
  isMinimized: boolean;
  isFocused: boolean;
  isDeviceMobile: boolean;
}

const Index = (props: Props) => {
  const rndRef = useRef<Rnd | null>(null);
  const animationRef = useRef<HTMLDivElement | null>(null); // Ref for inner div

  const [currentZIndex, setCurrentZIndex] = useState(props.zIndex);
  const [isClosed, setIsClosed] = useState(false);
  const [wasMinimized, setWasMinimized] = useState(false);

  const { browserWidth, browserHeight } = useWindowDimensions();

  // Set default settings depending on device type
  const defaultSettings =
    props.isDeviceMobile
      ? {
        x: 0,
        y: Math.ceil(browserHeight / 4),
        width: browserWidth,
        height: Math.ceil(browserHeight / 2),
      }
      : {
        x: Math.ceil(browserWidth / 4),
        y: Math.ceil(browserHeight / 6),
        width: props.startupDimensions?.width ?? Math.ceil(browserWidth / 2),
        height: props.startupDimensions?.height ?? Math.ceil(browserHeight / 1.5),
      };

  useEffect(() => {
    if (rndRef.current) {
      setCurrentZIndex(props.zIndex);
    }
  }, [props.zIndex]);

  // GSAP Window startup animation
  useGSAP(() => {
    gsap.fromTo(
      animationRef.current,
      {
        opacity: 0,
        scale: 0.9,
      },
      {
        opacity: 1,
        scale: 1,
        ease: "power1.out",
        duration: 0.2,
      }
    );
  }, []);

  // GSAP Window close animation
  useGSAP(() => {
    if (isClosed) {
      gsap.to(animationRef.current, {
        opacity: 0,
        scale: 0.9,
        ease: "power1.out",
        duration: 0.2,
        onComplete: () => {
          props.closeWindow(props.id);
        },
      });
    }
  }, [isClosed]);

  // GSAP Window minimize animation
  const handleMinimize = () => {
    if (animationRef.current) {
      gsap.to(animationRef.current, {
        opacity: 0,
        translateY: 300,
        duration: 0.3,
        ease: "power1.out",
        onComplete: () => {
          props.minimizeWindow(props.id);
          setWasMinimized(true);
        },
      });
    }
  };

  useEffect(() => {
    if (wasMinimized && !props.isMinimized) {
      if (animationRef.current) {
        gsap.fromTo(
          animationRef.current,
          {
            opacity: 0,
            translateY: 300,
          },
          {
            opacity: 1,
            translateY: 0,
            duration: 0.3,
            ease: "power1.out",
            onComplete: () => setWasMinimized(false),
          }
        );
      }
    }
  }, [props.isMinimized, wasMinimized]);

  return (
    <Rnd
      ref={rndRef}

      default={defaultSettings}

      minWidth={400}
      minHeight={300}

      maxWidth={props.maxDimensions?.width ?? browserWidth}
      maxHeight={props.maxDimensions?.height ?? browserHeight}

      resizeHandleStyles={{
        bottom: { cursor: "ns-resize", bottom: '0px' },
        left: { cursor: "ew-resize" },
        right: { cursor: "ew-resize" },
        top: { cursor: "ns-resize" },
      }}


      className={`rounded-lg ${props.isMinimized ? 'hidden' : ''}`}
      dragHandleClassName='window-handle'
      onMouseDown={props.onFocus}
      style={{
        zIndex: currentZIndex,
        display: props.isMinimized ? "none" : "block", // Disable the window when minimized
      }}
    >
      <div
        ref={animationRef} // Animation reference for gsap, Rnd does not work
        className={`overflow-hidden rounded-lg border-window-border flex flex-col border w-full h-full
          ${props.isFocused ? css.focusedShadow : ""}
          ${props.className ? props.className : ''}
          `}
      >
        <WindowTitleBar
          className={`${props.titleBarClassName ? props.titleBarClassName : ''}`}
          label={props.label}
          icon={props.icon}
          id={props.id}
          closeWindow={() => { setIsClosed(true) }}
          minimizeWindow={handleMinimize}
          isFocused={props.isFocused}
        />
        {
          props.appContent ??
          <Skeleton className='w-full h-full rounded-none' /> // TODO: CHANGE | If an app is not loading properly
        }
      </div>
    </Rnd>
  );
}

export default Index;
