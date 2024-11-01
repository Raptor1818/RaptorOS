import React from 'react'
import AppWrapper from '../AppWrapper'
import Divider from '@/components/ui/divider'
import { useWindowContext } from '@/context/WindowProvider/window-provider'

type Props = {}

const HomeApp = (_props: Props) => {
  function handleOpenAboutApp() {
    context.openWindowByLabel('About')
  }

  const context = useWindowContext()
  return (
    <AppWrapper className='p-4'>
      <div className='flex flex-row items-center justify-center'>
        <h1>
          Welcome to RaptorOS
          <span className='text-muted-foreground pl-2'>1.0.0</span>
        </h1>
      </div>
      <Divider margin='bottom' />
      <h4>RaptorOS is a modern desktop enviroment-like website built with Next.js 15 and TailwindCSS.</h4>
      <p>It&apos;s a work in progress and is currently in development.</p>
      <p>More information about the project can be found in the{' '}
        <a onClick={handleOpenAboutApp}>About app</a>.
      </p>
    </AppWrapper>
  )
}

export default HomeApp