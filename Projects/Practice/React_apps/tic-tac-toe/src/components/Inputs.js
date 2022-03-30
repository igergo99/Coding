import { useEffect, useState } from "react"

export default function Inputs (){
    const [value1,setValue1]=useState('')
    const [value2,setValue2]=useState('')
    useEffect(()=>{
        setValue1(JSON.parse(localStorage.getItem('inputData')).name)
        setValue2(JSON.parse(localStorage.getItem('inputData')).age)
    },[])

    const submitHandler=(event)=>{
        event.preventDefault()
        const inputData={
            name:value1,
            age:value2
        }
        localStorage.setItem('inputData', JSON.stringify(inputData))
    }
    const onChangeHandler=(event)=>{
        if(event.target.name==='name'){
            setValue1(event.target.value)
        }
        if(event.target.name==='age'){
            setValue2(event.target.value)
        }
    }

    return(
        <>
        <form onSubmit={submitHandler}>
        <input onChange ={onChangeHandler} name="name"placeholder="Name" value={value1}></input>
        <input onChange ={onChangeHandler} name="age"placeholder="Age"  value={value2}></input>
        <button type="submit">Submit!</button>
        </form>
        </>
    )
}