import React, { ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';

const computerImg = '/img/icons/Computer.ico';
const desktopImg = '/img/icons/Desktop.ico'
const userImg = '/img/icons/User.ico';

import Home from './components/raptorOS/Applications/Home/Home';
import About from './components/raptorOS/Applications/About/About';

export interface Item {
  id: string;
  label: string;
  isShortcut: boolean;
  icon: string;
  content: ReactNode;
}

function generateUUID(): string {
  return uuidv4().replace(/-/g, '').slice(0, 8);
}

export const defaultItems: Item[] = [
  {
    id: generateUUID(),
    label: 'Home',
    isShortcut: false,
    icon: desktopImg,
    content: <Home />
  },
  {
    id: generateUUID(),
    label: 'About',
    isShortcut: false,
    icon: computerImg,
    content: <About />
  },
];
