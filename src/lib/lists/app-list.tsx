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

export const appList: vAppType[] = [
  {
    id: generateRandomId(),
    label: "Home",
    appContent: <HomeApp />
  },
  {
    id: generateRandomId(),
    label: "About",
    appContent: <HomeApp />
  },
  {
    id: generateRandomId(),
    label: "About aaaa aaaa ciaoc",
    isShortcut: true,
    shortcutUrl: "https://google.com"
  },
]