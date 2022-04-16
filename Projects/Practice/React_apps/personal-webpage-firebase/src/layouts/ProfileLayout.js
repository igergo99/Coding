import React from 'react'
import { Outlet } from 'react-router'
import NavbarProfile from '../components/NavbarProfile'

export default function ProfileLayout({setUserLogged}) {
  return (
    <div className="profile">
        <NavbarProfile setUserLogged={setUserLogged}/>
        <Outlet/>
    </div>
  )
}
