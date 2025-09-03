import React from 'react'
import AppWrapper from '../AppWrapper'
import Divider from '@/components/ui/divider'
import { frameworks, libraries, other, packages } from '@/lib/lists/about-lists'
import { TextFade } from '@/components/ui/TextFade'
import { Construction, Github, Heart, Info } from 'lucide-react'

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
        <div className="flex items-center justify-center text-center h-24">
          <h1 className="custom-text text-4xl md:text-5xl bg-gradient-to-b from-foreground to-neutral-400 bg-clip-text text-transparent font-bold">
            <Info color='#f7f7f7s4' />About
          </h1>
        </div>
      </TextFade>
      {/* <div className='flex flex-row items-start gap-2'>
        <Construction color='#eab308' size={32} />
        <h3 className='!text-yellow-500'>This website is still WIP.</h3>
      </div> */}
      <a className='flex flex-row justify-center gap-2 text-xl' href="https://github.com/Raptor1818/RaptorOS"><Github color='#3b82f6' />Source code available on Github</a>
      <div className='flex flex-col justify-center w-full mt-8'>
        <h3 className='text-center'>Technologies:</h3>
        <div className='flex flex-col md:flex-row gap-4 md:gap-0 md:justify-evenly w-full'>

          <div className='flex flex-col'>

            <h4>Frameworks:</h4>
            <ul>
              {frameworks.map((framework) => (
                <li key={framework.name}>
                  <a href={framework.url}>{framework.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex flex-col'>
            <h4>Libraries:</h4>
            <ul>
              {libraries.map((library) => (
                <li key={library.name}>
                  <a href={library.url}>{library.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex flex-col'>
            <h4>Packages:</h4>
            <ul>
              {packages.map((packages) => (
                <li key={packages.name}>
                  <a href={packages.url}>{packages.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex flex-col'>
            <h4>Other:</h4>
            <ul>
              {other.map((other) => (
                <li key={other.name}>
                  <a href={other.url}>{other.name}</a>
                </li>
              ))}
            </ul>
          </div>
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