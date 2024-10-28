'use client';
import dynamic from 'next/dynamic';

const DynamicDesktop = dynamic(() => import('@/components/raptor-os/system/Desktop'), {
  ssr: false,
});

export default function HomePage() {
  return (
    <main className="w-screen h-screen flex flex-col" suppressHydrationWarning>
      <DynamicDesktop />
    </main>
  );
}
