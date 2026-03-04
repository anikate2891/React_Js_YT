import React,{useState} from 'react'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState([]);

  async function getdata(){
    const apiData = await axios.get('https://jsonplaceholder.typicode.com/todos/1')

    setData(apiData.data);
    console.log(apiData.data)
  }

  return (
    <div>
      <button onClick={getdata}>Get Data</button>
      <div>
        {data.map(()=>{
          return <h3></h3>
        })}
      </div>
    </div>
  )
}

export default App
