import React, { ReactNode } from 'react'

import css from '@/styles/Applications/Home/Home.module.css'
import ApplicationWrapper from '../ApplicationWrapper'

type Props = {}

const Home = (props: Props) => {
  return (
    <ApplicationWrapper>
      <h1>Welcome!</h1>
      <p>Hello, this is my personal website where I host and showcase my projects (WIP) and I talk a bit about myself.</p>
      <p><strong>This is still under heavy construction! Much will change</strong></p>
      <span>RaptorOS v0.1</span>
    </ApplicationWrapper>
  )
}

export default Home
