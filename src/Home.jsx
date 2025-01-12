import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from './Layout/Header'
import emp1 from './Images/emp1.jpg';

export default function Home() {
  return (
    <div>
        <Header />
        <Outlet></Outlet>
      
      <h1>This is Home Page</h1>
      {/* <img src={emp1} alt="Home" style={{ width: '100%', height: 'auto' }} /> */}
    </div>
  )
}
