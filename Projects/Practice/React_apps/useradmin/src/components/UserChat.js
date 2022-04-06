import { useEffect, useState } from "react"
import { readChatUser, liveAdded,liveChanged,liveRemoved } from "../services/crud"

export default function UserChat (){
    const[chatButtonPressed,setChatButtonPressed]=useState(true)
    const[userChatList,setUserChatList]=useState([])

    useEffect(()=>{
        readChatUser('chatUser')
        .then(snapshot=>{
            console.log(Object.entries(snapshot.val()))
            setUserChatList(Object.entries(snapshot.val()))})
            

    },[])
    const loadChat=()=>{

    }

    return(


        <div>
            <form>
                <label>
                    <input></input>
                    <button>Chatre fel!</button>
                </label>
            </form>
            {chatButtonPressed&&<>
                <table>
                    <tbody>
                        {userChatList&&userChatList.map((users)=>{
                            const key=users[0]
                            const userData=users[1]
                            return(
                                <tr key={key}>
                                    <td>{userData.username}</td>
                                    <td>{userData.msg}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </>}
        </div>
    )
}