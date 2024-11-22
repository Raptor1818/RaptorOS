import React from 'react'
import AppWrapper from '../AppWrapper'
import Divider from '@/components/ui/divider'
import { useWindowContext } from '@/context/WindowProvider/window-provider'
import { TextFade } from '@/components/ui/TextFade'
import { Construction, Info, Settings } from 'lucide-react'

type Props = {}

const HomeApp = (_props: Props) => {
  function handleOpenBsky() {
    context.openShortcutByLabel('My Bluesky')
  }

  function handleOpenTwitter() {
    context.openShortcutByLabel('My Xitter')
  }

  function handleOpenAboutApp() {
    context.openWindowByLabel('About')
  }
  function handleOpenSettingsApp() {
    context.openWindowByLabel('Settings')
  }

  function handleOpenWallpaperApp() {
    context.openWindowByLabel('Wallpaper')
  }

  const context = useWindowContext()
  return (
    <AppWrapper className='p-4 md:px-8 flex flex-col justify-between' dotBackground>
      <div>
        <TextFade direction='up'>
          <div className="flex items-center justify-center text-center h-32">
            <h1 className="custom-text flex flex-wrap text-5xl md:text-6xl font-bold">
              <span className="custom-text block bg-gradient-to-b from-foreground to-neutral-400 bg-clip-text text-transparent pr-4">
                Welcome to
              </span>
              <span className="custom-text block bg-gradient-to-b from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                RaptorOS
              </span>
            </h1>
          </div>
        </TextFade>
        <h2>Hi! I&apos;m Francesco, this is my main project.</h2>
        <h4 className='!font-normal !text-lg'>I am a web and game developer, passionate gamer and metalhead.</h4>
        <h4 className='!font-normal !text-lg'>I&apos;ll make the project app to show off some of my work as soon&#8482; as I can.</h4>
      </div>
      <div className='mt-8'>
        <h4 className='!font-normal'>This website is made to resemble a desktop environment.</h4>
        <h4 className='!font-normal !text-lg'>You can drag, resize, minimize and close windows. More apps will come as they are added.</h4>
        <div className='flex flex-row gap-2'>
          <Settings />
          <h4 className='!font-normal !text-lg'>Check out the <a onClick={handleOpenSettingsApp}>settings</a> app to tweak some styles, and the <a onClick={handleOpenWallpaperApp}>wallpaper</a> app to change the background.</h4>
        </div>
        <h3>Enjoy!!</h3>
      </div>
      <footer className='mt-8'>
        <div className='flex flex-row gap-2'>
          <Construction color='#eab308' />
          <p className='!text-yellow-500'>Please DM me on <a onClick={handleOpenBsky}>Bsky</a> or <a onClick={handleOpenTwitter}>Twitter</a> if you find any bugs. Suggestions are welcome!</p>
        </div>
        <div className='flex flex-row gap-2'>
          <Info />
          <p>More information about the project can be found in the{' '}
            <a onClick={handleOpenAboutApp}>About app</a>.
          </p>
        </div>
      </footer>
    </AppWrapper>
  )
}

export default HomeApp