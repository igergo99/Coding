import {database} from "../config/firebase"
import {ref,set,push,get ,update,remove} from "firebase/database"
import { onChildAdded, onChildChanged, onChildRemoved } from 'firebase/database';

const endpoint="users"

export function createUser(userdata){
const refUser=ref(database,endpoint)
const newUser=push(refUser)
return set(newUser,userdata)
}

export  function readUser(key){
    if (key){
        const refUser=ref(database,`${endpoint}/${key}`)
        return get(refUser)
    }
    const refUser=ref(database,endpoint)
        return get(refUser)
}

export function updateUser(key, userData){
    const refUser=ref(database,`${endpoint}/${key}`)
    return update(refUser,userData)
}

export function deleteUser(key){
    const refUser=ref(database,`${endpoint}/${key}`)
    return remove(refUser)
}
export function liveRemoved(callback) {
    const refUser = ref(database, endpoint);
    return onChildRemoved(refUser, callback)
  }
  
  export function liveAdded(callback) {
    const refUser = ref(database, endpoint)
    return onChildAdded(refUser, callback)
  }
  
  export function liveChanged(callback) {
    const refUser = ref(database, endpoint);
    return onChildChanged(refUser, callback)
  }
  export function readChatUser( endpoint){
    const refUser=ref(database,endpoint)
    return get(refUser)
}