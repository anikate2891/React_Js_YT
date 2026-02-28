import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between '>
        <h2 className='bg-white rounded-full h-12 w-12 flex justify-center items-center font-bold text-xl '>{props.id+1}</h2>
        <div>
            <p className='mb-6 text-lg leading-relaxed text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos nulla repudiandae sed error molestiae dolorum!</p>
            <div className='flex justify-between'>
                <button id='cardBtn' className='bg-blue-400 text-white font-medium px-5 py-2 rounded-full'>{props.tag}</button>
                <i className="ri-arrow-right-fill bg-blue-400 text-white font-medium px-3 py-2 rounded-full"></i>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent
