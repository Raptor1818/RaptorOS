import Divider from '@/components/ui/divider'
import React from 'react'
import AppWrapper from '../AppWrapper'

import { Switch } from "@/components/ui/switch"
import { Label } from '@/components/ui/label'

type Props = {}

const SettingsSwitch = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">{children}</Label>
    </div>
  )
}

const SettingsApp = (props: Props) => {
  return (
    <AppWrapper className='p-4'>
      <h1 className='text-center'>Settings</h1>
      <Divider />
      <SettingsSwitch>Glass Windows</SettingsSwitch>
    </AppWrapper>
  )
}

export default SettingsApp