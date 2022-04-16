import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
export default function MainLayout({userLogged}) {
  return (
    <div>
        <Navbar userLogged={userLogged}/>
        <Outlet/>
    </div>
  )
}
