'use client';
import React, { useState, useEffect } from 'react';
import GridLayout, { Layout } from 'react-grid-layout';
import { useWindowContext } from '@/context/WindowProvider/window-provider';
import { appList as initialAppList } from '@/lib/lists/app-list';
import DesktopIcon from './DesktopIcon';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import useWindowDimensions from '@/hooks/useWindowDimensions';

interface Props { }

const Desktop = (props: Props) => {
  const context = useWindowContext();
  const { browserWidth, browserHeight } = useWindowDimensions();

  const [isStatic, setIsStatic] = useState(true);
  const [layout, setLayout] = useState<Layout[]>(
    initialAppList.map((app, index) => ({
      i: app.id,
      x: 0,       // Start in the first column for vertical stacking
      y: index,   // Stack vertically by setting each new item on the next row
      w: 1,
      h: 1,
      isResizable: false,
      static: true
    }))
  );

  // Column calc
  const cols = Math.floor(browserWidth / ((5 * 16) + 4));   // 5rem width per item + 4px gap
  const rowHeight = Math.floor(6 * 16) + 4;                 // 6rem height per item + 4px gap

  const onLayoutChange = (newLayout: Layout[]) => {
    setLayout(newLayout);
  };

  const handleMouseDown = () => {
    // 200ms Cooldown to allow for double click instead of dragging the icon right away
  };

  const handleMouseUp = () => {
    // reset cooldown
  };

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={cols}            // Dynamic based on window width and item width + 4px gap
      rowHeight={rowHeight}  // Fixed at 6rem + 4px gap
      width={browserWidth}
      onLayoutChange={onLayoutChange}
      isResizable={false}
      preventCollision={true}
      compactType={null}
    >
      {initialAppList.map((app) => (
        <div key={app.id} data-grid={layout.find((item) => item.i === app.id)}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <DesktopIcon app={app} openWindow={context.openWindow} />
        </div>
      ))}
    </GridLayout>
  );
};

export default Desktop;
