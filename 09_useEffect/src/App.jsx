import React, { useEffect,useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0);
  function chnage(){setnum(num+1);}

  useEffect(()=>{
    console.log('useEffect is running')
  },[num])

  return (
    <div>
      <h2>{num}</h2>
      <button onClick={chnage}>Change</button>
    </div>
  )
}

export default App
