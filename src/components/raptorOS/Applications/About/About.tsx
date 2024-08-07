import React from 'react'
import ApplicationWrapper from '../ApplicationWrapper'
import Link from 'next/link'


type Props = {}

const About = (props: Props) => {
  return (
    <ApplicationWrapper>
      <h1>RaptorOS v0.1</h1>
      <p><strong>This project is under development! A lot is subject to change.</strong></p>
      <Link href='https://github.com/Raptor1818/raptorino-next'>Check out the Github page!</Link>
      <Link href='https://github.com/Raptor1818/raptorino-next/tree/dev'>Development branch</Link>
      <br />
      <h2>Framework and libraries used to make this website:</h2>
      <ul>
        <li><Link href='https://nextjs.org/'>
          Next.js 14
        </Link></li>
        <li><Link href='https://www.typescriptlang.org/'>
          Typescript
        </Link></li>
        <li><Link href='https://tailwindcss.com/'>
          TailwindCSS
        </Link></li>
        <li><Link href='https://gsap.com/'>
          Gsap
        </Link></li>
      </ul>
    </ApplicationWrapper>
  )
}

export default About