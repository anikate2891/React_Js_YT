import React from 'react'
import 'remixicon/fonts/remixicon.css'
import HeroText from './HeroText'
import ArrowIcon from './ArrowIcon'

const LeftContent = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between'>
       <HeroText/>
      <ArrowIcon/>
    </div>
  )
}

export default LeftContent
