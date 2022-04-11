import { useParams } from "react-router-dom";
import { database } from "../../config/firebase";
import { useEffect,useState } from "react";
import {ref,get} from 'firebase/database'



const Stack = () => {
    
    const { stack_id } = useParams();
    const endpoint=`/mxn/knowledge/${stack_id}`
    const [target,setTarget]=useState(null)


    useEffect(()=>{
        const refKnowledge=ref(database,endpoint)
        get(refKnowledge)
        .then(snapshot=>{setTarget(snapshot.val())})
        .catch(e=>console.log(e))
    },[stack_id])
    return (
        <div>
        {target && (<>
            <h2>{target?.type}</h2>
            <p>{target?.description}</p>
        </>)}
        </div>
    )
};

export default Stack;