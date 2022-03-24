import { useState } from "react"
export default function ToDoItmes(props){
    const[buttonText, setButtonText]=useState('Elkészült')
    const clickHandler=(event)=>{
        setButtonText('KÉSZ!!!')
        
    }
    return(
        <>
            <span >{props.element}</span><button onClick={clickHandler}>{buttonText}</button><br />
        </>
    )
}