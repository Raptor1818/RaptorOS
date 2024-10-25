'use client'
import { useWindowContext } from "@/context/WindowProvider/window-provider";
import { Button } from "@/components/ui/button";
import { appList } from "@/lib/lists/app-list";

export default function HomePage() {
  const context = useWindowContext();
  return (
    <main className="w-screen h-screen">
      {/* Temporary buttons that will become desktop icons, taking the window object from a file.
          TODO: make the desktop icon list and the app system 
      */}
      {appList.map((app) => (
        <Button
          key={app.id}
          onClick={() => {
            context.openWindow(app);
          }}
        >
          {app.label}
        </Button>
      ))}
    </main>
  );
}
