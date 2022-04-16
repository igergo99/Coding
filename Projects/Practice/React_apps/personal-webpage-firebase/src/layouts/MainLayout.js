import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'


export default function MainLayout({userLogged}) {
  return (
    <div className="main-layout">
        <Navbar userLogged={userLogged} className="main-navbar"/>
        <Outlet/>
    </div>
  )
}
