import React from 'react';
import AppLayout from '../../app-layout';
import BackgroundGrid from './BgGrid';
import BackgroundUpload from './BgUpload';
import { useBackground } from '@/context/raptorOS/BackgroundContext';
import css from '@/styles/raptorOS/Applications/System/BackgroundPicker/BgPicker.module.css';

const BgPicker: React.FC = () => {
  const { setBackgroundImage } = useBackground();

  return (
    <AppLayout className={css.backgroundPickerStyles}>
      <div className={css.pickerTitle}>
        <h1>Pick a Wallpaper</h1>
      </div>
      <BackgroundUpload onBackgroundSelect={setBackgroundImage} />
      <BackgroundGrid onBackgroundSelect={setBackgroundImage} />
    </AppLayout>
  );
};

export default BgPicker;
