import React from 'react'
import ApplicationWrapper from '../ApplicationWrapper'

type Props = {}

const About = (props: Props) => {
  return (
    <ApplicationWrapper>
      <h1>RaptorOS</h1>
      <p><strong>Still under heavy work in progress</strong></p>
      <p>This is my personal website, where I will showcase my work like if it was an operating system.</p>
      <p>Framework and libraries used to make this website:</p>
      <ul>
        <li>Nextjs 14</li>
        <li>Typescript</li>
        <li>TailwindCSS</li>
        <li>GSAP</li>
      </ul>
    </ApplicationWrapper>
  )
}

export default About