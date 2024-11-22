import React from 'react'
import AppWrapper from '../AppWrapper'
import { TextFade } from '@/components/ui/TextFade'

import { wallpaperList } from '@/lib/lists/wallpaper-list'
import WallpaperGridItem from './WallpaperGridItem'
import { useWallpaperContext } from '@/context/WallpaperProvider/wallpaper-provider'

type Props = {}

const index = (_props: Props) => {
  const context = useWallpaperContext()

  return (
    <AppWrapper className='flex flex-col items-center' gridBackground>
      <TextFade direction='up'>
        <div className="flex items-center justify-center text-center h-32">
          <h1 className="custom-text text-4xl md:text-5xl bg-gradient-to-b from-foreground to-neutral-400 bg-clip-text text-transparent font-bold">
            Choose a wallpaper
          </h1>
        </div>
      </TextFade>
      <span>Upload function coming soon.</span>
      <div className='flex flex-wrap gap-4 mt-4 justify-center'>
        {wallpaperList.map((wallpaper) => (
          <WallpaperGridItem key={wallpaper.name}
            wallpaper={wallpaper}
            onClick={context.setWallpaper} />
        ))}
      </div>
      <footer className='my-8 flex flex-col justify-center'>
        <span className='text-center'>Images from Unsplash, all rights reserved.</span>
      </footer>
    </AppWrapper>
  )
}

export default index