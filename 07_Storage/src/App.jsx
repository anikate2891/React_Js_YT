import React from 'react'

const App = () => {

  const user = {
    name: 'Sheriyan',
    age: 22,
    city: 'Bhopal'
  }

  localStorage.setItem('userDetails', JSON.stringify(user))
  const userdata = JSON.parse(localStorage.getItem('userDetails'))
  console.log(userdata)

  return (
    <div>
      App
    </div>
  )
}

export default App
