import React from 'react'
import AppWrapper from '../AppWrapper'
import Divider from '@/components/ui/divider'
import { frameworks, libraries } from '@/lib/lists/about-lists'
import { TextFade } from '@/components/ui/TextFade'
import { Github, Heart, Info } from 'lucide-react'

type Props = {}

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

const AboutApp = (_props: Props) => {
  return (
    <AppWrapper className='p-4 md:px-8 flex flex-col justify-between' dotBackground>
      <TextFade direction='up'>
        <div className="flex items-center justify-center text-center h-32">
          <h1 className="custom-text text-4xl md:text-5xl bg-gradient-to-b from-foreground to-neutral-400 bg-clip-text text-transparent font-bold">
            <Info color='#f7f7f7s4' />About
          </h1>
        </div>
      </TextFade>
      <Divider margin='bottom' />
      <h3>This website is still WIP.</h3>
      <a className='flex flex-row gap-2' href="https://github.com/Raptor1818/RaptorOS">The source code is available on Github <Github color='#3b82f6' /></a>
      <div className='flex flex-row justify-between w-full mt-8'>
        <div>
          <h3>Technologies:</h3>
          <h4>Frameworks:</h4>
          <ul>
            {frameworks.map((framework) => (
              <li key={framework.name}>
                <a href={framework.url}>{framework.name}</a>
              </li>
            ))}
          </ul>
          <h4>Libraries:</h4>
          <ul>
            {libraries.map((library) => (
              <li key={library.name}>
                <a href={library.url}>{library.name}</a>
              </li>
            ))}
          </ul>
          <h4>Packages:</h4>
          <ul>
            {libraries.map((packages) => (
              <li key={packages.name}>
                <a href={packages.url}>{packages.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <footer className='w-full flex flex-col items-center'>
        <Divider margin='top' color={'ghost'} />
        <div className='h-fit py-2 flex flex-row gap-1 items-center'>
          <Avatar>
            <AvatarImage src="https://github.com/Raptor1818.png" alt="@Raptor1818" />
            <AvatarFallback>FR</AvatarFallback>
          </Avatar>
          <p className='custom-text'>Handcrafted with</p>
          <Heart color='#ff4040' size={20} />
        </div>
        <span className='!text-xs !text-muted-foreground'>&copy; Raptor {new Date().getFullYear()} | All Rights Reserved</span>
      </footer>
    </AppWrapper>
  )
}

export default AboutApp