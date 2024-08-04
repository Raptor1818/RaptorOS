import React from 'react';
import AppWindow from './AppWindow';
import { useWindowContext } from '@/context/raptorOS/WindowContext';

const WindowContainer = () => {
  const { windows, closeWindow, bringToFront, zIndexList } = useWindowContext();

  return (
    <div className='z-10 absolute'>
      {windows.map(window => (
        <AppWindow
          key={window.id}
          id={window.id}
          title={window.title}
          zIndex={zIndexList.indexOf(window.id) + 1}
          onClose={() => closeWindow(window.id)}
          onFocus={() => bringToFront(window.id)}
        >
          {window.content}
        </AppWindow>
      ))}
    </div>
  );
};

export default WindowContainer;
