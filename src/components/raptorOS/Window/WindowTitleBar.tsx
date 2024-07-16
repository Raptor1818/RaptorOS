import React from 'react';
import css from '@/styles/Window/WindowTitleBar.module.css'

interface Props {
  title: string;
  onClose: () => void;
}

const WindowTitleBar = (props: Props) => {
  const { title, onClose } = props;

  return (
    <div id="handler" className={css.titleBarContainer}>
      <div>
        <h2 className="w-fit">{title}</h2>
      </div>
      <button className={css.closeButton} onClick={onClose}>
        X
      </button>
    </div>
  );
};

export default WindowTitleBar;
