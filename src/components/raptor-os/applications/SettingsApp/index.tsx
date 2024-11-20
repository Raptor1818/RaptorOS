'use client'
import Divider from '@/components/ui/divider'
import React from 'react'
import AppWrapper from '../AppWrapper'

import Settings from './Settings'

type Props = {}


const SettingsApp = (_props: Props) => {
  return (
    <AppWrapper className='p-4'>
      <h1 className='text-center'>Settings</h1>
      <Divider />
      <Settings />
    </AppWrapper>
  )
}

export default SettingsApp