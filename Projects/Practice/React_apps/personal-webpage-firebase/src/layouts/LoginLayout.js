import React from 'react'
import { Outlet } from 'react-router'

export default function LoginLayout() {
  return (
    
    <div className="login-container">

        <Outlet/>
    </div>
  )
}
