import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-80 shrink-0 rounded-4xl overflow-hidden relative'>
        <img className='w-full h-full object-cover' src= {props.img} alt="" />
        <RightCardContent tag={props.tag} id={props.id}/>
    </div>
  )
}

export default RightCard
