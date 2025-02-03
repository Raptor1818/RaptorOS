import React from 'react'
import AppWrapper from '../AppWrapper';
import { useDeviceContext } from '@/context/DeviceProvider/device-provider';

interface Props { }

const Bloswordy = (_props: Props) => {
  const { isMobile } = useDeviceContext();
  return (
    <AppWrapper>
      {isMobile ? (
        <div className='flex flex-col'>
          <div className='p-4'>
            <h1>Whoops</h1>
            <p>It looks like you are on a mobile device. This game is playable only on desktop, sorry!</p>
          </div>
          <div className='w-full flex flex-col justify-center items-center'>
            <iframe src="https://itch.io/embed/3283198" width="370" height="167"><a href="https://huntoor.itch.io/bloswordy">Bloswordy by Huntoor, Mrz740, _Raptor, LVL, Drukko.wav</a></iframe>
          </div>
        </div>
      ) : (
        <iframe
          src="https://itch.io/embed-upload/12671754?color=ff3f3f"
          width="1280"
          height="740"
          allowFullScreen
        >
          <a href="https://huntoor.itch.io/bloswordy">
            Play Bloswordy on itch.io</a>
        </iframe>
      )}
    </AppWrapper>
  )
}

export default Bloswordy