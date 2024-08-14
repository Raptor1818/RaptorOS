import React from 'react';
import css from '@/styles/Window/WindowTitleBar.module.css'

import { RxCross1 } from "react-icons/rx";
import { GoDash } from 'react-icons/go';

interface Props {
  title: string;
  onClose: () => void;
  onMinimize: () => void;
  isFocused: boolean;
}

const WindowTitleBar = (props: Props) => {
  const { title, onClose, onMinimize, isFocused } = props;

  return (
    <div className={`${css.titleBarContainer} ${isFocused ? css.titleBarFocused : ''} drag-handle`}>
      <div className={css.windowTitleDiv}>
        <p>{title}</p>
      </div>
      <div className={css.buttonContainer}>
        <button className={css.minimizeButton} onClick={onMinimize}>
          <GoDash />
        </button>
        <button className={css.closeButton} onClick={onClose}>
          <RxCross1 />
        </button>
      </div>
    </div>
  );
};

export default WindowTitleBar;
