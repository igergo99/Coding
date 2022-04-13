import { database } from "../config/firebase";
import { useEffect,useState } from "react";
import {ref,get} from 'firebase/database'
import { NavLink } from "react-router-dom";

const endpoint= 'mxn/references';

const ReferenceScreen = () => {
    const [referenceData,setReferenceData]= useState([])
    useEffect(()=>{
        const refReference=ref(database,endpoint)
        get(refReference)
        .then(snapshot=>{setReferenceData(Object.entries(snapshot.val()))})
        .catch(e=>console.log(e))
        
    },[])
   
    return (
      
        <div>
        {referenceData&&referenceData.map((reference)=>{
                const key=reference[0]
                const data=reference[1]
                
                return(<div key={key}className="stackbox"><NavLink to={`/reference/${key}`}>{data?.name}</NavLink></div>)
            })}
        </div>
  
    )
};

export default ReferenceScreen;