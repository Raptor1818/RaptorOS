import React, { ReactNode, useState } from 'react';
import AppWindow from './AppWindow';

import { v4 as uuidv4 } from 'uuid';
import DevContent from '../dev/DevContent';
import DevContent2 from '../dev/DevContent2';

interface Window {
  id: string;
  title: string;
  content: ReactNode;
}

const WindowContainer = () => {
  const [windows, setWindows] = useState<Window[]>([]);
  const [zIndexList, setZIndexList] = useState<string[]>([]);

  const addWindow = (title: string, content: ReactNode) => {
    const newWindow = {
      id: `window-${uuidv4().replace(/-/g, '').slice(0, 8)}`,
      title,
      content,
    };
    setWindows([...windows, newWindow]);
    setZIndexList([...zIndexList, newWindow.id]);
  };

  const closeWindow = (id: string) => {
    setWindows(windows.filter(window => window.id !== id));
    setZIndexList(zIndexList.filter(windowId => windowId !== id));
  };

  const bringToFront = (id: string) => {
    setZIndexList([...zIndexList.filter(windowId => windowId !== id), id]);
  };

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
      {/* Add a button or some UI to trigger addWindow */}
      {/* <button 
        className='h-fit w-fit text-2xl bg-yellow-600'
        onClick={() => addWindow("bella roba", <DevContent /> )}> 
          CIAOCOAACICIAO
      </button>
      <button 
        className='h-fit w-fit text-2xl bg-yellow-200'
        onClick={() => addWindow("bella roba", <DevContent2 /> )}> 
          2ssssssss
      </button> */}
    </div>
  );
};

export default WindowContainer;
