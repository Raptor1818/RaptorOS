import React from 'react'

interface Props {
  className?: string;
}

import '@/styles/ui/BlueskyIcon.css'
import clsx from 'clsx';

const BlueskyIcon = ({ className }: Props) => {
  return (
    <div className={clsx("bluesky-flutter", className)}>

      <svg id="flutterby" className="bluesky-flutter" viewBox="0 0 566 500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <path id="wing" fill="currentColor" d="M 123.244 35.008 C 188.248 83.809 283.836 176.879 283.836 235.857 C 283.836 316.899 283.879 235.845 283.836 376.038 C 283.889 375.995 282.67 376.544 280.212 383.758 C 266.806 423.111 214.487 576.685 94.841 453.913 C 31.843 389.269 61.013 324.625 175.682 305.108 C 110.08 316.274 36.332 297.827 16.093 225.504 C 10.271 204.699 0.343 76.56 0.343 59.246 C 0.343 -27.451 76.342 -0.206 123.244 35.008 Z" />
        </defs>
        <use xlinkHref="#wing" className="left" />
        <use xlinkHref="#wing" className="right" />
      </svg>

    </div>
  )
}

export default BlueskyIcon