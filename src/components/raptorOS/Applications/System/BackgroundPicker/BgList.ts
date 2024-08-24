const bg_path = '/img/wallpapers/'

export interface BgOption {
  source: string,
  name: string,
  author: string,
  url?: string,
}

export const backgrounds: BgOption[] = [
  {
    source: bg_path + 'sferrara_sicily.webp',
    name: 'Sferrara Sicily',
    author: 'Samuel Ferrara',
    url: 'https://unsplash.com/@samferrara',
  },

  {
    source: bg_path + 'zetong_china.webp',
    name: 'Zetong China',
    author: 'Zetong Li',
    url: 'https://unsplash.com/@zetong'
  },
  
  {
    source: bg_path + 'aaronphs_indonesia.webp',
    name: 'Aaronphs Indonesia',
    author: 'Aaron Thomas',
    url: 'https://unsplash.com/@aaronphs'
  },
  
  {
    source: bg_path + 'aholmes_canada.webp',
    name: 'Aholmes Canada',
    author: 'Andy Holmes',
    url: 'https://unsplash.com/@andyjh07'
  },
  
  {
    source: bg_path + 'rnoguier_java.webp',
    name: 'Rnoguier Java',
    author: 'Robin Noguier',
    url: 'https://robin-noguier.com'
  },
  
  {
    source: bg_path + 'kiwi.webp',
    name: 'Kiwi',
    author: 'Me',
  },
  
  {
    source: bg_path + 'sicily_gela.webp',
    name: 'Sicily, Gela',
    author: 'Me',
  },
  
  {
    source: bg_path + 'berlin_blue.webp',
    name: 'Berlin',
    author: 'Me',
  },
  
]
