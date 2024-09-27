import React from 'react';
import BackgroundGridItem from './BgGridItem';
import { backgrounds } from './BgList';
import css from '@/styles/raptorOS/Applications/System/BackgroundPicker/BgGrid.module.css';

type BackgroundGridProps = {
  onBackgroundSelect: (url: string) => void;
};

const BgGrid: React.FC<BackgroundGridProps> = ({ onBackgroundSelect }) => {
  return (
    <div className={css.backgroundGridContainer}>
      {backgrounds.map((option, index) => (
        <BackgroundGridItem
          key={index}
          source={option.source}
          name={option.name}
          author={option.author}
          url={option.url}
          onBackgroundSelect={onBackgroundSelect}
        />
      ))}
    </div>
  );
};

export default BgGrid;
