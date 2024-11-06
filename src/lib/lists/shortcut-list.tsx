import { generateRandomId, vAppType } from "./app-list";

export const shortcutList: vAppType[] = [
  {
    id: generateRandomId(),
    label: "My Bluesky",
    isShortcut: true,
    shortcutUrl: "https://bsky.app/profile/raptorino.com"
  },
  {
    id: generateRandomId(),
    label: "My Xitter",
    isShortcut: true,
    shortcutUrl: "https://x.com/_Raptorr"
  },
  {
    id: generateRandomId(),
    label: "My Github",
    isShortcut: true,
    shortcutUrl: "https://github.com/Raptor1818"
  },
  {
    id: generateRandomId(),
    label: "My itch.io",
    isShortcut: true,
    shortcutUrl: "https://raptor1818.itch.io/"
  }
]