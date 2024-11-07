import { generateRandomId, vAppType, iconPath } from "./app-list";

export const shortcutList: vAppType[] = [
  {
    id: generateRandomId(),
    label: "My Bluesky",
    isShortcut: true,
    // TODO: icon: iconPath + 'bsky.svg',
    shortcutUrl: "https://bsky.app/profile/raptorino.com"
  },
  {
    id: generateRandomId(),
    label: "My Xitter",
    isShortcut: true,
    icon: iconPath + 'twitter-x.svg',
    shortcutUrl: "https://x.com/_Raptorr"
  },
  {
    id: generateRandomId(),
    label: "My Github",
    isShortcut: true,
    icon: iconPath + 'github.svg',
    shortcutUrl: "https://github.com/Raptor1818"
  },
  {
    id: generateRandomId(),
    label: "My itch.io",
    isShortcut: true,
    icon: iconPath + 'itch.svg',
    shortcutUrl: "https://raptor1818.itch.io/"
  }
]