import React, {useState} from 'react'


const App = () => {

  const [number, setnumber] = useState(10);

  function updateNum(){
    setnumber(number+1)
  }

  function decreseNum(){
    setnumber(number)
    if(number<=0){
      setnumber(0)
    } else{
      setnumber(number-1)
    }
  }
  
  return (
    <div>
      <h1>The value of num is {number} </h1>
      <button onClick={updateNum}>Increase</button>
      <br /><br />
      <button onClick={decreseNum}>Decrese</button>
    </div>
  )
}

export default App
