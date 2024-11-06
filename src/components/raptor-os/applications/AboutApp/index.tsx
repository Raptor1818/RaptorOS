import React from 'react'
import AppWrapper from '../AppWrapper'
import Divider from '@/components/ui/divider'
import { frameworks, libraries } from '@/lib/lists/about-lists'

type Props = {}

const AboutApp = (_props: Props) => {
  return (
    <AppWrapper className='p-4'>
      <h1 className='text-center'>About</h1>
      <Divider margin='bottom' />
      <h2>Still in development</h2>
      <a href="https://github.com/Raptor1818/RaptorOS">The source code is available on Github</a>
      <Divider color={'ghost'} />
      <h3>Frameworks:</h3>
      <ul>
        {frameworks.map((framework) => (
          <li key={framework.name}>
            <a href={framework.url}>{framework.name}</a>
          </li>
        ))}
      </ul>
      <h3>Libraries:</h3>
      <ul>
        {libraries.map((library) => (
          <li key={library.name}>
            <a href={library.url}>{library.name}</a>
          </li>
        ))}
      </ul>
      <h3>Packages:</h3>
      <ul>
        {libraries.map((packages) => (
          <li key={packages.name}>
            <a href={packages.url}>{packages.name}</a>
          </li>
        ))}
      </ul>
    </AppWrapper>
  )
}

export default AboutApp