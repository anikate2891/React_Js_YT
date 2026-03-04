import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const AboutDetails = () => {
    const params = useParams()
    const navigate = useNavigate()

    const btnClicked = ()=>{
        navigate(-1)
    }

  return (
    <div>
      <h1>{params.id} Details Page</h1>
      <button onClick={btnClicked}>Return to Home Page</button>
    </div>
  )
}

export default AboutDetails
