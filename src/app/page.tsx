'use client'
import { useWindowContext } from "@/context/WindowProvider/window-provider";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const context = useWindowContext();
  return (
    <main className="w-screen h-screen">
      <Button
        onClick={() => {
          context.openWindow({
            id: "1",
            label: "Window 1",
            appContent: <h1>Window 1</h1>
          })
        }}>
        Add window
      </Button>
      <Button
        onClick={() => {
          context.openWindow({
            id: "2",
            label: "nice",
            appContent: <h1>ggggggggg</h1>
          })
        }}>
        Adasdasd
      </Button>
    </main>
  );
}
