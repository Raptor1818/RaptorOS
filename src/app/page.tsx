'use client';
import Taskbar from '@/components/raptor-os/system/Taskbar';
import { useWallpaperContext } from '@/context/WallpaperProvider/wallpaper-provider';
import dynamic from 'next/dynamic';

const DynamicDesktop = dynamic(() => import('@/components/raptor-os/system/Desktop'), {
  ssr: false,
});

export default function page() {
  return (
    <RaptorOS />
  );
}

function RaptorOS() {
  const { wallpaper } = useWallpaperContext();
  return (
    <main
      className="w-screen h-screen flex flex-col md:flex-row"
      style={{
        backgroundImage: `url(${wallpaper.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: `${wallpaper.position ?? 'center'}`,
      }}
      suppressHydrationWarning>
      <Taskbar />
      <DynamicDesktop />
    </main>
  );
}
