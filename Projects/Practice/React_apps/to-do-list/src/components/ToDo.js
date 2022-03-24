import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import { useState } from "react";
import ToDoItmes from "./ToDoItems";

export default function ToDo(){
    const [toDoList, setToDoList]=useState(['Call Mum','Go to the mall','Gym','Learn OOP','Watch Silicon-Valley']);

    const fullList= toDoList.map((element,index)=><ToDoItmes key={index} element={element}/>)

    const dataSetter=(newItem)=>{
        setToDoList([...toDoList,newItem])
    }        

    return(
        <div>
            <ToDoList data={fullList}/>
            <ToDoForm dataSetter={dataSetter}/>
        </div>
    )
}