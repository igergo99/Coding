import {useEffect, useState}from "react"



export default function UseEffectComponent (){
    const [count, setCount]=useState(0)
    useEffect(()=>{
        console.log("useEffect lefutott")
    })
    const inc=()=>{
        setCount(count=>count+1)
        console.log(count)
    }
    console.log("seEffectComponent render")
    return (
        <div>
            hello useEffect
            <button type="button" onClick={inc}>Klikk ide</button>
        </div>
    )
}