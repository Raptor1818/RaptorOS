import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

import css from '@/styles/raptorOS/Taskbar/TaskbarItem.module.css';

import { useWindowContext } from '@/context/raptorOS/WindowContext';

import { Item } from '@/components/raptorOS/ItemLists/SharedItems'

interface TaskbarItemProps extends Item {
  isMinimized?: boolean;
}

const TaskbarItem = (props: TaskbarItemProps) => {
  const { windows, addWindow, getWindowById, focusedWindowId } = useWindowContext();

  const gsapRef = useRef<HTMLDivElement | null>(null);

  const [isMinimized, setIsMinimized] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isFocused, setFocused] = useState<boolean>(false)

  const handleClick = () => {
    addWindow(props.id, props.label, props.icon, false, props.content)
    setIsOpen(true)
  }
  useEffect(() => {
    const existingWindow = getWindowById(props.id);
    if (existingWindow) {
      setIsMinimized(existingWindow.isMinimized);
      setIsOpen(!existingWindow.isMinimized);
    }
  }, [getWindowById, props.id]);
  
  useEffect(() => {
    if(gsapRef.current){
      if(props.id === focusedWindowId){
        gsap.to(gsapRef.current, {
          opacity: 0.9,
          scaleX: 2,
          duration: 0.2,
          onStart: () => setFocused(true)
        })
      }else if(props.id !== focusedWindowId && isOpen){
        gsap.to(gsapRef.current, {
          opacity: 0.5,
          scaleX: 1,
          duration: 0.2,
          onStart: () => setFocused(false)
        })
      }
    }
  }, [focusedWindowId, isOpen])

  useEffect(() => {
    if (gsapRef.current && !getWindowById(props.id)){
      gsap.to(gsapRef.current, {
        opacity: 0,
        scaleX: 0,
        duration: 0.2,
        onComplete: () => setIsOpen(false)
      })
    }
  }, [windows])

  return (
    <div 
      className={
        `${css.taskbarItemContainer} ${isFocused ? css.taskbarItemFocused : ''}`
      }
      onClick={handleClick}
    >
      <Image
        src={props.icon}
        width={28}
        height={28}
        alt={props.label}
        draggable={false}
      />
      <div 
        ref={gsapRef}
        className={css.taskbarItemMinimizedBar} />
    </div>
  );
};

export default TaskbarItem;
