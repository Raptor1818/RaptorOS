'use client'
import React from 'react'
import { Rnd } from 'react-rnd'

type Props = {}

const index = (props: Props) => {
  return (
    <Rnd
      default={{
        x: 0,
        y: 0,
        width: 320,
        height: 200,
      }}
      className='bg-green-600'
    >
      Rnd
    </Rnd>
  )
}

export default index