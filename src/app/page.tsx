'use client';
import Taskbar from '@/components/raptor-os/system/Taskbar';
import dynamic from 'next/dynamic';

const DynamicDesktop = dynamic(() => import('@/components/raptor-os/system/Desktop'), {
  ssr: false,
});

export default function RaptorOS() {
  return (
    <main className="w-screen h-screen flex flex-col md:flex-row" suppressHydrationWarning>
      <Taskbar />
      <DynamicDesktop />
    </main>
  );
}
