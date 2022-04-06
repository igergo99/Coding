
import { useEffect, useState } from "react";
import { readUser, deleteUser } from "../services/crud";

export default function UserList({setEditKey}){
    const [userList, setUserList]=useState([])
    const [deleteSucces, setDeleteSucces]=useState(false)
    const [deletedUsers, setDeleteUsers]=useState(0)
    useEffect(()=>{
        readUser()
        .then(snapshot=>setUserList(Object.entries(snapshot.val())))

    },[deletedUsers])

    const clickHandlerRead=(key)=>(event)=>{
        readUser(key)
        .then(snapshot=>console.log(snapshot.val()))
    }
    const clickHandlerDelete=(key)=>(event)=>{
        deleteUser(key)
        .then(val=>{
            setDeleteSucces(true)
            setDeleteUsers((p)=>p+1)
        })
        .catch(e=>console.log(e))
    }
    
    const clickHandlerUpdate=(key)=>(event)=>{
        setEditKey(key)

    }
    return(
        <div className="userlist">
            {deleteSucces&& <h2>Sikeres Törlés</h2>}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th colSpan="3"></th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((user)=>{
                        const key=user[0]
                        const userData=user[1]
                        return(
                        <tr key={`user_${key}`}>
                            <td>{key}</td>
                            <td>{userData['username']}</td>
                            <td>{userData['name']}</td>
                            <td>{userData['email']}</td>
                            <td>{userData['gender']}</td>
                            <td><button type='button' onClick={clickHandlerDelete(key)} >Törlés</button></td>
                            <td><button type='button'  onClick={clickHandlerUpdate(key)}>Módosítás</button></td>
                            <td><button type='button' onClick={clickHandlerRead(key)}>Megtekintés</button></td>
                        </tr>
                        )
                    })}
                    
                </tbody>
            </table>
        </div>
    )
}