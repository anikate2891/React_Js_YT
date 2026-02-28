import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full w-2/3 p-6 flex flex-nowrap gap-10 overflow-x-auto'>
      {props.users.map(function(elem,idx){
        return <RightCard img={elem.img} tag={elem.tag} id={idx} key={idx} />
      })}
    </div>
  )
}

export default RightContent
