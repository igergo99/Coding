import { useState } from "react";

export default function ToDoForm(props){

    const [buttonDisabled, setButtonDisabled]=useState(true)
    const [inputValue, setInputValue]=useState("")
    const submitHandler=(event)=>{
        event.preventDefault();
        props.dataSetter(inputValue)
        setButtonDisabled(true)
        setInputValue("")
    }
    const changeHandler=(event)=>{
        setInputValue(event.target.value)
        setButtonDisabled(false)
    }
    return(
        <div>
            <form onSubmit={submitHandler}>
                <input placeholder="Add new To-Do" onChange={changeHandler} value={inputValue}></input><br/>
                <button type="submit" disabled={buttonDisabled}>Add</button>
            </form>
        </div>
    )
}