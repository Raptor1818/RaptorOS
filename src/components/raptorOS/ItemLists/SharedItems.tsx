import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import HomeMdx from '@/components/raptorOS/MarkdownApp/Home/Home.mdx';
import AboutMdx from '@/components/raptorOS/MarkdownApp/About/About.mdx';

export interface Item {
  id: string;
  label: string;
  isShortcut: boolean;
  icon: string;
  content?: React.ReactNode;
  url?: string;
}

export function generateUUID(): string {
  return uuidv4().replace(/-/g, '').slice(0, 8);
}

export const SharedItems: Item[] = [
  {
    id: generateUUID(),
    label: 'Home',
    isShortcut: false,
    icon: '/img/icons/computer.svg',
    content: <HomeMdx />,
  },
  {
    id: generateUUID(),
    label: 'About',
    isShortcut: false,
    icon: '/img/icons/info.svg',
    content: <AboutMdx />,
  },
];
