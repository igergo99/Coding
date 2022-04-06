import UserEdit from "../components/UserEdit";
import UserList from "../components/UserList"
import '../App.css'
import { useState } from "react";
import UserChat from "../components/UserChat";

export default function UserManagemnent(){
    const [editKey,setEditKey]=useState(0)


    
    
    return(
        <div>
            <h2>Update key:{editKey}</h2>
            <UserEdit editKey={editKey}/>
            <UserList setEditKey={setEditKey}/>
            <UserChat/>
        </div>
    )
}