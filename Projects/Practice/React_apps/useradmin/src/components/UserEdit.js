import { useEffect, useState, useCallback } from "react";
import { createUser } from "../services/crud";

export default function UserEdit(){
    const [userData,setUserData]=useState()
    const [succes,setSucces]=useState(false)

    const changeHandler=useCallback(
        (event)=>{
            setUserData(p=>({...p, [event.target.name]:event.target.value}))
        }
    ,[])
   const submitHandler=(event)=>{
        event.preventDefault()
        createUser(userData)
        .then(()=>{setUserData({})
    setSucces(true)})
        .catch(e=>console.log(e))
   }
    
    return(
        <div>
            {succes&&<h2>Sikeres mentés!</h2>}
            <form onSubmit={submitHandler}>
                <label htmlFor='name'>
                    Name:
                    <input type="text" name="name" id="name" onChange={changeHandler}/>
                </label>
                <label htmlFor='email'>
                    E-mail:
                    <input type="text" name="email" id="email" onChange={changeHandler}/>
                </label>
                <label htmlFor='username'>
                    Username:
                    <input type="text" name="username" id="username" onChange={changeHandler}/>
                </label>
                <label htmlFor='gender'>
                    Gender:
                    <input type="radio" name="gender" id="gender" value="male" onChange={changeHandler}/>Male
                    <input type="radio" name="gender" id="gender" value="female" onChange={changeHandler}/>Female
                </label>
                <label htmlFor='other'>
                    Other:
                    <textarea type="text" id="other" name="other" onChange={changeHandler}></textarea>
                </label>
                
                <button>Save</button>
            </form>
        </div>
    )
}