import { Item, SharedItems, generateUUID } from './SharedItems';

export const DesktopItems: Item[] = [
  ...SharedItems,
  {
    id: generateUUID(),
    label: 'My Twitter',
    isShortcut: true,
    icon: '/img/icons/twitter-x.svg',
    url: 'https://x.com/_Raptorr',
  },
  {
    id: generateUUID(),
    label: 'My Github',
    isShortcut: true,
    icon: '/img/icons/github.svg',
    url: 'https://github.com/Raptor1818',
  },
  {
    id: generateUUID(),
    label: 'My itch.io',
    isShortcut: true,
    icon: '/img/icons/itch.svg',
    url: 'https://raptor1818.itch.io/',
  },
];
