import React, { useState } from 'react';
import Image from 'next/image';
import { BgOption } from './BgList';
import css from '@/styles/raptorOS/Applications/System/BackgroundPicker/BgGridItem.module.css';

type BackgroundGridItemProps = BgOption & {
  onBackgroundSelect: (url: string) => void;
};

const BgGridItem: React.FC<BackgroundGridItemProps> = ({ source, name, author, url, onBackgroundSelect }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleOnClick = () => {
    onBackgroundSelect(source);
  };

  return (
    <div className={css.backgroundItemContainer} onClick={handleOnClick}>
      {isLoading && 
        <div className={css.loadingContainer}>
          <p><i>Loading...</i></p>
        </div>
      }
      
      <Image 
        src={source} 
        width={300} 
        height={169} 
        alt={name}
        draggable={false}
        onLoad={() => setIsLoading(false)}
      />
      <div className={css.backgroundItemText}>
        <p className={css.itemName}>{name}</p>
        {url ? (
          <a target="_blank" href={url} rel="noopener noreferrer">
            <i>By {author}</i>
          </a>
        ) : (
          <span>
            <i>By {author}</i>
          </span>
        )}
      </div>
    </div>
  );
};

export default BgGridItem;
