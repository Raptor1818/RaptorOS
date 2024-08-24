import React from 'react';
import AppLayout from '../../app-layout';
import BackgroundGrid from './BgGrid';
import { useBackground } from '@/context/raptorOS/BackgroundContext';
import css from '@/styles/raptorOS/Applications/System/BackgroundPicker/BgPicker.module.css';

const BgPicker: React.FC = () => {
  const { setBackgroundImage } = useBackground();

  return (
    <AppLayout>
      <div className={css.pickerTitle}>
        <h1>Backgrounds</h1>
      </div>
      <BackgroundGrid onBackgroundSelect={setBackgroundImage} />
    </AppLayout>
  );
};

export default BgPicker;
