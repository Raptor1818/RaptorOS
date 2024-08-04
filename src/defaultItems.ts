import { v4 as uuidv4 } from 'uuid';

const pcImg = '/img/icons/Computer.ico'
const folderImg = '/img/icons/Folder.ico'

export interface Item {
  id: string;
  label: string;
  isShortcut: boolean;
  icon: string;
}

export const defaultItems: Item[] = [
  {
    id: uuidv4().replace(/-/g, '').slice(0, 8),
    label: 'testerino',
    isShortcut: true,
    icon: pcImg
  },
  {
    id: uuidv4().replace(/-/g, '').slice(0, 8),
    label: 'New folder',
    isShortcut: false,
    icon: folderImg
  },
];
