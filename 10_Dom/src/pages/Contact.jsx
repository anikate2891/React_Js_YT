import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <div className='contact-details'>
        <Link to='men'>Men's Contact</Link>
        <Link to='women'>Women's Contact</Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default Contact
