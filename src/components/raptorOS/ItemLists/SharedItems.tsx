import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import HomeMdx            from '@/components/raptorOS/Applications/MarkdownApp/Home/Home.mdx';
import AboutMdx           from '@/components/raptorOS/Applications/MarkdownApp/About/About.mdx';
import BackgroundPicker   from '@/components/raptorOS/Applications/System/BackgroundPicker';

export interface Item {
  id: string;
  label: string;
  isShortcut: boolean;
  icon: string;
  content?: React.ReactNode;
  url?: string;
  openInNewTab?: boolean;
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
  {
    id: generateUUID(),
    label: 'Wallpaper Picker',
    isShortcut: false,
    icon: '/img/icons/wallpaper.svg',
    content: <BackgroundPicker />,
  },
];
