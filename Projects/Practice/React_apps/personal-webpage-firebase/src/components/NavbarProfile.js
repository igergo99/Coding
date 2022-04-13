import { signOut } from '@firebase/auth'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { auth } from '../config/firebase'

export default function NavbarProfile() {
  return (
    <div>
        <NavLink to="/profile">Adatlap</NavLink><br/>
        <NavLink to="/newpost">Új blog post</NavLink><br/>
        <NavLink to="/logout" onClick={()=>{signOut(auth); }}>Kilépés</NavLink><br/>
    </div>
  )
}
