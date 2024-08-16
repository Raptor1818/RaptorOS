import React, { ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';

const homeImg = '/img/icons/computer.svg';
const aboutImg = '/img/icons/info.svg';

import MarkdownApp from './components/raptorOS/MarkdownApp/mdx-layout';

import HomeMdx from '@/components/raptorOS/MarkdownApp/Home/Home.mdx'
import AboutMdx from '@/components/raptorOS/MarkdownApp/About/About.mdx'

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
    icon: homeImg,
    content: <HomeMdx />,
  },
  {
    id: generateUUID(),
    label: 'About',
    isShortcut: false,
    icon: aboutImg,
    content: <AboutMdx />,
  },
];
