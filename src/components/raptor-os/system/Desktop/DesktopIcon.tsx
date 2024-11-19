import { type AppWindowType } from '@/context/WindowProvider/window-provider';
import React from 'react';
import Image from 'next/image';
import css from '@/styles/raptor-os/system/Desktop/DesktopItem.module.css';
import clsx from 'clsx';
import { useSettingsContext } from '@/context/SettingsProvider/settings-provider';

type Props = {
  app: AppWindowType;
  openWindow: (appWindow: AppWindowType) => void;
  hideText?: boolean;
  className?: string;
};

const DesktopIcon = ({ app, openWindow, hideText, className }: Props) => {
  return (
    <button
      onDoubleClick={() => {
        openWindow(app);
      }}
      className={clsx(`relative w-20 h-fit
        flex flex-col items-center justify-start gap-1
        px-1 py-2 cursor-default
        bg-transparent
        hover:bg-white/20
        focus:bg-white/35
        select-none transition-all duration-200`,
        {
          'rounded-md': !useSettingsContext().settings.disableRoundedCorners
        },
        css.iconContainer,
        className
      )}
    >
      <Image
        src={app.icon ?? '/img/missing.webp'}
        width={48}
        height={48}
        alt={app.label}
        draggable={false}
        placeholder='empty'
        className={clsx(
          { 'rounded-lg': !useSettingsContext().settings.disableRoundedCorners }
        )}
      />
      {!hideText && (
        <p
          className={clsx(`text-center select-none text-sm leading-4 truncate-multiline focus:outline-none p-0.5
          `,
            css.itemText
          )}
        >
          {app.label}
        </p>
      )}
    </button>
  );
};

export default DesktopIcon;