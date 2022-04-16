import { signOut } from '@firebase/auth'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { auth } from '../config/firebase'


export default function NavbarProfile({setUserLogged}) {
  return (
    <div>
        <ul>
        <li><NavLink to="/">Vissza a Főmenübe</NavLink></li>    
        <li><NavLink to="/profile">Adatlap</NavLink></li>
        <li><NavLink to="/newpost">Új blog post</NavLink></li>
        <li><NavLink to="/" onClick={()=>{signOut(auth);setUserLogged(false) }}>Kilépés</NavLink></li>
        </ul>
    </div>
  )
}
