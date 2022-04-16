import React from 'react'
import{auth} from '../config/firebase'
import{signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router'
export default function Login() {
  const[email,setEmail]=useState(null)
  const[pw,setPw]=useState(null)
  const [loginError,setLoginError]=useState(null)
  const navigate=useNavigate()
  const emailchangeHandler=(event)=>{
    setEmail(event.target.value)
  }
  const pwchangeHandler=(event)=>{
    setPw(event.target.value)
  }


  const signupHandler=()=>{
    createUserWithEmailAndPassword(auth,email,pw)
    .then((authCredential)=>{
      console.log(authCredential.user)
      navigate('/profile')
    })
    .catch(e=>console.log(e))
  }

  const loginHandler=()=>{
    signInWithEmailAndPassword(auth,email,pw)
    .then((authCredential)=>{
      console.log(authCredential.user)
      navigate('/profile')
    })
    .catch(e=>setLoginError(e.message))
  }
  return (
    <div className="box">
        {loginError}
        E-mail:<input type="text" onChange={emailchangeHandler}></input><br/>
        Jelszó:<input type="text" onChange={pwchangeHandler}></input><br/>
        <button onClick={loginHandler}>Log in!</button><br/>
        <button onClick={signupHandler}>Sign up!</button>
    </div>
  )
}
