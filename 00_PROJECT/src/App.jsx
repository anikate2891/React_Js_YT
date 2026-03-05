import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react';

const App = () => {
  
    const [userdata, setUserdata] = useState([]);
    const [index, setIndex] = useState(1);

    async function getData(){
      const res = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`)
      setUserdata(res.data)
    } 

    useEffect(()=>{
      getData()
    },[index])

    let printUserData = <h3 className='text-gray-400 text-xs absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>loading...</h3>
    if(userdata.length>0){
      printUserData = userdata.map(function(elem,idx){
        return <div key={idx}>
          <a href={elem.url} target='_blank'>
            <div className='h-45 w-50 overflow-hidden rounded-xl'>
              <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
            </div>
            <h2 className='font-bold text-lg align-middle'>{elem.author}</h2>
          </a>
        </div>
      })
    }

  return (
    <div className='bg-black h-screen text-white p-10 overflow-auto'>
      <div className='flex flex-wrap gap-6 h-[95%] p-4 ml-9'>
        {printUserData}
      </div>

      <div className='flex justify-center gap-5 items-center p-4'>
        <button
        style={{opacity: index==1?0.5:1}}
        className='bg-amber-400 text-black rounded px-4 font-semibold cursor-pointer active:scale-95 hover:bg-amber-600 py-2' 
        onClick={(()=>{
          if(index>1){
            setIndex(index-1)
            setUserdata([])
          }
        })}>
        Prev</button>

        <h4>Page {index}</h4>
        
        <button className='bg-amber-400 text-black rounded px-4 font-semibold cursor-pointer active:scale-95 hover:bg-amber-600 py-2' onClick={(()=>{
          setIndex(index+1)
          setUserdata([])
          })}>Next</button>
      </div>
    </div>
  )
}

export default App


//Pagination
//youtube scrolling
//UI update