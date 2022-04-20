import React from 'react'
import { useState,useEffect } from 'react'
import { push,ref, set } from '@firebase/database'
import { database } from '../config/firebase'

export default function NewPost() {
  const [inputValue,setInputValue]=useState(null)
  const [success,setSuccess]=useState(false)
  const submitHandler=(event)=>{
    event.preventDefault();
    const newRef= ref(database,'mxn/blog/posts')
    const newPostRef= push(newRef)
    set(newPostRef,inputValue)
    .then((response)=>{
      setSuccess(true)
      setInputValue(null)
    })
    .catch((e)=>{
      console.log(e)
    })
  }
  const changeHandler=(event)=>{
    setInputValue((prev)=>({...prev,[event.target.name]:event.target.value}))
  }
  return (
    <div>
      {success&&<span>Sikeres mentés!</span>}
      <form onSubmit={submitHandler}>
        Cím: <input type="text" name="title" onChange={changeHandler}></input>
        Leírás: <input type="text" name="description" onChange={changeHandler}></input>
        Rövid: <input type="text" name="lead" onChange={changeHandler}></input>
        <button type="submit">Mentés</button>
      </form>
    </div>
  )
}
