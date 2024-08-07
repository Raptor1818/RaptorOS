import React, { ReactNode } from 'react'

import css from '@/styles/Applications/Home/Home.module.css'
import ApplicationWrapper from '../ApplicationWrapper'

type Props = {}

const Home = (props: Props) => {
  return (
    <ApplicationWrapper>
      <h1>Welcome!</h1>
      <p>Hello, this is my personal website where I will host and showcase my projects, and I'll talk a bit about myself as well.</p>
      <p><strong>This project is still under development! A lot is subject to change.</strong></p>
      <p><strong><u>Viewing on desktop is suggested.</u></strong></p>
      <p>More information in the About section.</p>
    </ApplicationWrapper>
  )
}

export default Home
