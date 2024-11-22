interface ListItem {
  name: string
  url: string
}

export const frameworks: ListItem[] = [
  {
    name: 'Next.js 15',
    url: 'https://nextjs.org',
  },
  {
    name: 'React 19',
    url: 'https://19.react.dev/',
  },
  {
    name: 'Typescript',
    url: 'https://www.typescriptlang.org/',
  },
];

export const libraries: ListItem[] = [
  {
    name: 'TailwindCSS',
    url: 'https://tailwindcss.com',
  },
  {
    name: 'Shadcn UI',
    url: 'https://ui.shadcn.com/'
  },
  {
    name: 'Aceternity UI',
    url: 'https://ui.aceternity.com/'
  },
  {
    name: 'Indie UI',
    url: 'https://ui.indie-starter.dev/'
  }
];

export const packages: ListItem[] = [
  {
    name: 'react-rnd',
    url: 'https://github.com/bokuweb/react-rnd'
  },
  {
    name: 'uuid',
    url: 'https://github.com/uuidjs/uuid'
  },
  {
    name: 'UAParser',
    url: 'https://uaparser.dev/'
  },
];

export const other: ListItem[] = [
  {
    name: 'Kora Icon Theme',
    url: 'https://github.com/bikass/kora',
  }
];
