import Testing from "@/components/raptor-os/applications/Testing";
import { type AppWindowType } from "@/context/WindowProvider/window-provider";

import { v4 as uuidv4 } from 'uuid';

export function generateRandomId(): string {
  return uuidv4().replace(/-/g, '').slice(0, 8);
}

export const appList: AppWindowType[] = [
  {
    id: generateRandomId(),
    label: "Home",
    appContent: <Testing />
  },
  {
    id: generateRandomId(),
    label: "About",
    appContent: <Testing />
  },
]