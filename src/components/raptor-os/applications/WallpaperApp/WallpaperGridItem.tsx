import React from 'react'

import { type WallpaperType } from '@/lib/lists/wallpaper-list';
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import clsx from 'clsx';

interface Props {
  wallpaper: WallpaperType;
  onClick: (image: WallpaperType) => void;
}



const WallpaperGridItem = ({ wallpaper, onClick }: Props) => {
  const [isLoading, setIsLoading] = React.useState(true);
  return (
    <div className='flex flex-col justify-start items-center 
    cursor-pointer p-2 rounded-lg
    hover:bg-white/10 border border-transparent hover:border-white/40'
      onClick={() => { onClick(wallpaper) }}
    >
      {
        isLoading && (
          <Skeleton className='w-[300px] h-[169px]' />
        )
      }
      <div className={clsx('w-[300px]', { 'h-0': isLoading })}>
        <AspectRatio ratio={16 / 9}>
          <Image
            src={wallpaper.src}
            alt={wallpaper.name}
            className={clsx('object-cover rounded-md',
              { '!h-0': isLoading },
            )}
            fill
            draggable={false}
            onLoad={() => setIsLoading(false)}
          />
        </AspectRatio>
      </div>
      <div className='flex flex-col justify-center items-center py-4'>
        <p className='custom-text text-lg'>{wallpaper.name}</p>
        {
          wallpaper.author_url ? (
            <a className='!text-sm'
              href={wallpaper.author_url}
              rel="noopener noreferrer"
              target='_blank'
            >
              By {wallpaper.author}
            </a>
          ) : (
            <p className='!text-sm'><i>By {wallpaper.author}</i></p>
          )
        }
      </div>
    </div>
  )
}

export default WallpaperGridItem