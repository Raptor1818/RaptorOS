import React from 'react'
import { Switch } from "@/components/ui/switch"
import { Label } from '@/components/ui/label'
import { Button } from "@/components/ui/button"
import { useSettingsContext, type Settings } from '@/context/SettingsProvider/settings-provider'
import { TriangleAlert } from 'lucide-react'

interface SwitchProps {
  settingId: keyof Settings;  // This ensures we only use valid setting keys
  checked: boolean;
  onToggle: (checked: boolean) => void;
  children: React.ReactNode;
}

const SettingsSwitch = ({ settingId, checked, onToggle, children }: SwitchProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Switch
        id={settingId.toLocaleString()}
        checked={checked}
        onCheckedChange={onToggle}
      />
      <Label htmlFor={settingId.toLocaleString()}>{children}</Label>
    </div>
  )
}

const Settings = () => {
  const { settings, updateSettings, resetSettings } = useSettingsContext();

  return (
    <div className="space-y-4">
      <div className='flex flex-col gap-1'>
        <SettingsSwitch
          settingId="glassStyle"
          checked={settings.glassStyle}
          onToggle={(checked) => updateSettings({ glassStyle: checked })}
        >
          Glass Style
        </SettingsSwitch>
        <span className='!text-destructive flex gap-2'><TriangleAlert color='#CC0000' />Might cause performace issues on mobile or lower end devices.</span>
      </div>

      <SettingsSwitch
        settingId="disableRoundedCorners"
        checked={settings.disableRoundedCorners}
        onToggle={(checked) => updateSettings({ disableRoundedCorners: checked })}
      >
        Disable Rounded Corners
      </SettingsSwitch>

      <Button
        variant="destructive"
        onClick={resetSettings}
        className='cursor-pointer hover:bg-opacity-90'
      >
        Reset Settings
      </Button>
    </div>
  )
}

export default Settings