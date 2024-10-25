import Testing from "@/components/raptor-os/applications/Testing";
import { AppWindowType } from "@/context/WindowProvider/window-provider";

export const appList: AppWindowType[] = [
  {
    id: "1",
    label: "UAUAU",
    appContent: <Testing />
  },
  {
    id: "2",
    label: "HAHA!",
    appContent: <Testing />
  },
]