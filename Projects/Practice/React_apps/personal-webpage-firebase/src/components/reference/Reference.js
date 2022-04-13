import { useParams } from "react-router-dom";
import { database } from "../../config/firebase"; 
import { useEffect,useState } from "react";
import {ref,get} from 'firebase/database'



const Reference = () => {
    const { reference_id } = useParams();
    const endpoint=`mxn/references/${reference_id}`;
    const[target,setTarget]= useState(null)

   useEffect(()=>{
    const refReference=ref(database,endpoint)
    get(refReference)
    .then(snapshot=>{setTarget(snapshot.val())})
    
    .catch(e=>console.log(e))
    
   },[reference_id])
   console.log(target)

    return (
        <div>
        {target && 
        (<>
            <h2>{target?.name}</h2>
            <p>{target?.description}</p>
            <a href={target?.img}>Click here</a>
        </>)}
        </div>
    )
};

export default Reference;