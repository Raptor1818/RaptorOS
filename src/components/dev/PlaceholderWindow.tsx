import React, { ReactNode, useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import gsap from 'gsap';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  windowHeader: string;
  children: ReactNode;
}

const PlaceholderWindow = (props: Props) => {
  const [hideWindow, setHideWindow] = useState(false);
  const uniqueID = useRef(`window-container-${uuidv4().replace(/-/g, '').slice(0, 8)}`).current;
  const containerRef = useRef<HTMLDivElement | null>(null);

  const closeWindow = () => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.2,
        onComplete: () => {
          setHideWindow(true);
        },
      });
    }
  };

  useEffect(() => {
    if (hideWindow) {
      if (containerRef.current) {
        gsap.to(containerRef.current, {
          opacity: 0,
          scale: 0.9,
          duration: 0.2,
          onComplete: () => {
            setHideWindow(true);
          },
        });
      }
    }
  }, [hideWindow]);

  if (hideWindow) return null;
  else
    return (
      <Draggable handle="#handler">
        <div
          id={uniqueID}
          ref={containerRef}
          className="h-64 w-96 border flex flex-col justify-between absolute"
        >
          <div
            id="handler"
            className="w-full bg-green-500 p-1 flex flex-row justify-between items-center hover:cursor-move"
          >
            <h2 className="select-none w-fit">{props.windowHeader}</h2>
            <button
              className="border cursor-pointer z-10 w-fit px-2 bg-red-500"
              onClick={closeWindow}
            >
              X
            </button>
          </div>
          <div className="h-full w-full bg-purple-500">
            <p></p>
            {props.children}
          </div>
        </div>
      </Draggable>
    );
};

export default PlaceholderWindow;
