'use client'
import React from 'react'
import { Switch } from "@/components/ui/switch"
import { Label } from '@/components/ui/label'
import { useSettingsContext } from '@/context/SettingsProvider/settings-provider'

interface SwitchProps {
  settingId: string;
  checked: boolean;
  onSwitchToggle: (state: boolean) => void;
  children: React.ReactNode;
}

const SettingsSwitch = ({ settingId, checked, onSwitchToggle, children }: SwitchProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Switch
        id={settingId}
        onCheckedChange={(checked) => onSwitchToggle(checked)}
        checked={checked}
      />
      <Label htmlFor={settingId}>{children}</Label>
    </div>
  )
}

interface Props { }

const Settings = (props: Props) => {
  const { glassStyle, setGlassStyle } = useSettingsContext();

  return (
    <div>
      <SettingsSwitch
        settingId='glass-style'
        checked={glassStyle}
        onSwitchToggle={(checked) => {
          setGlassStyle(checked);
        }}
      >
        Glass Style
      </SettingsSwitch>
    </div>
  )
}

export default Settings