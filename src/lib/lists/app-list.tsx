import AboutApp from "@/components/raptor-os/applications/AboutApp";
import HomeApp from "@/components/raptor-os/applications/HomeApp";
import { type AppWindowType } from "@/context/WindowProvider/window-provider";

import { v4 as uuidv4 } from 'uuid';

export function generateRandomId(): string {
  return uuidv4().replace(/-/g, '').slice(0, 8);
}

export interface vAppType extends AppWindowType {
  isShortcut?: boolean;
  shortcutUrl?: string;
}

export const iconPath = '/img/icons/';

export const appList: vAppType[] = [
  {
    id: generateRandomId(),
    label: "Home",
    icon: iconPath + 'computer.svg',
    appContent: <HomeApp />
  },
  {
    id: generateRandomId(),
    label: "About",
    icon: iconPath + 'info.svg',
    appContent: <AboutApp />
  },
]