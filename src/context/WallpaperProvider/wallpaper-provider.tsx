'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { defaultWallpaper, wallpaperList, WallpaperType } from '@/lib/lists/wallpaper-list';

interface Props {
  children: React.ReactNode;
}

interface WallpaperContextType {
  wallpaper: WallpaperType;
  setWallpaper: (wallpaper: WallpaperType) => void;
}

export const WallpaperContext = createContext<WallpaperContextType | undefined>(undefined);

export const useWallpaperContext = () => {
  const context = useContext(WallpaperContext);
  if (!context) {
    throw new Error('useWallpaperContext must be used within a WallpaperProvider');
  }
  return context;
};

const WallpaperProvider = ({ children }: Props) => {
  const [wallpaper, setWallpaper] = useState<WallpaperType>(defaultWallpaper);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const savedWallpaper = localStorage.getItem('wallpaper');
    if (savedWallpaper) {
      try {
        setWallpaper(JSON.parse(savedWallpaper) as WallpaperType);
      } catch {
        console.error('Failed to parse wallpaper from localStorage. Falling back to default.');
        setWallpaper(defaultWallpaper);
      }
    } else {
      setWallpaper(defaultWallpaper); // Default to the first wallpaper in the list
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('wallpaper', JSON.stringify(wallpaper));
    }
  }, [wallpaper, isLoaded]);

  return (
    <WallpaperContext.Provider value={{ wallpaper, setWallpaper }}>
      {children}
    </WallpaperContext.Provider>
  );
};

export default WallpaperProvider;
