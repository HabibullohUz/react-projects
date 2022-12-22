import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <Link to='contact'>Contact</Link>
      <br />
      <Link to='about-us'>About Us</Link>
      <br />
      <Link to='/'>Home</Link>
      <Outlet />
    </div>
  )
}
