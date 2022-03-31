import {useState, useEffect}from 'react'
import {GetApi,PutApi} from './RestFunctions'
export default function RestApi (){
    const [value, setValue]=useState("")
    useEffect(()=>{
        GetApi(RTDUrl,"inputValue",setValue)
    },[])
    const RTDUrl="https://fir-pracc-default-rtdb.europe-west1.firebasedatabase.app/"

    const onChangeHandler=(event)=>{
        PutApi(RTDUrl,"inputValue",event.target.value,setValue)
    }

    return(
        <>
        <input type="text" onChange={onChangeHandler} value={value}></input>
        </>
    )
}