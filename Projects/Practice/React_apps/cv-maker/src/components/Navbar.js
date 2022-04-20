import React from 'react'
import { NavLink } from 'react-router-dom';
export default function Navbar() {
  return (
    <div>
        <ul>
            <li><NavLink to='/cvmaker'>Make a CV!</NavLink></li>
            <li><NavLink to='/cvs'>CV-s</NavLink></li>
        </ul>
    </div>
  )
}
