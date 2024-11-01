import React from 'react'
import AppWrapper from '../AppWrapper'
import Divider from '@/components/ui/divider'

type Props = {}

const HomeApp = (props: Props) => {
  return (
    <AppWrapper className='p-4'>
      <div className='flex flex-row items-center justify-center'>
        <h1>
          Welcome to RaptorOS
          <span className='text-muted-foreground pl-2'>1.0.0</span>
        </h1>
      </div>
      <Divider margin='bottom' />
      <h4>RaptorOS is a modern desktop operating system built with Next.js and TailwindCSS.</h4>
      <p>It's a work in progress and is currently in development.</p>
      <p>More information about the project can be found in the <a>About app</a>.</p>
    </AppWrapper>
  )
}

export default HomeApp