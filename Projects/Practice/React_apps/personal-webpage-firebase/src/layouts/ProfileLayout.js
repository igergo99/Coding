import React from 'react'
import { Outlet } from 'react-router'
import NavbarProfile from '../components/NavbarProfile'

export default function ProfileLAyout() {
  return (
    <div className="profile">
        <NavbarProfile/>
        <Outlet/>
    </div>
  )
}
