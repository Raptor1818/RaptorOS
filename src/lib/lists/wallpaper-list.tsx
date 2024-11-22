const bg_path = '/img/wallpapers/'

export interface WallpaperType {
  name: string;
  src: string;
  author: string;
  author_url?: string;
  position?: string; // https://developer.mozilla.org/en-US/docs/Web/CSS/background-position
}

export const wallpaperList: WallpaperType[] = [
  {
    name: 'Mounty',
    src: 'https://images.unsplash.com/photo-1727976971228-ee2e309c90c1',
    author: 'Marek Piwnicki',
    author_url: 'https://unsplash.com/@marekpiwnicki',
    position: 'bottom',

  },
  {
    name: 'Castellammare',
    src: 'https://images.unsplash.com/photo-1523365154888-8a758819b722',
    author: 'Samuel Ferrara',
    author_url: 'https://unsplash.com/@samferrara',
  },
  {
    name: 'South Tyrol',
    src: 'https://images.unsplash.com/photo-1731955196267-e863d6f39794',
    author: 'Marek Piwnicki',
    author_url: 'https://unsplash.com/@marekpiwnicki',
  },
  {
    name: 'Munnar',
    src: 'https://images.unsplash.com/photo-1516449731348-c54a3bce2d0d',
    author: 'Aaron Thomas',
    author_url: 'https://unsplash.com/@aaronphs',
  },
  {
    name: 'Moraine Lake',
    src: 'https://images.unsplash.com/photo-1562674111-fa6a64c1b345',
    author: 'Andy Holmes',
    author_url: 'https://unsplash.com/@andyjh07',
  },
  {
    name: 'Kiwi',
    src: bg_path + 'kiwi.webp',
    author: 'Me'
  },
  {
    name: 'Berlin',
    src: bg_path + 'berlin_blue.webp',
    author: 'Me'
  },
];

export const defaultWallpaper: WallpaperType = {
  src: 'https://images.unsplash.com/photo-1523365154888-8a758819b722',
  name: 'Default Wallpaper',
  author: 'Unknown',
  position: 'center',
};