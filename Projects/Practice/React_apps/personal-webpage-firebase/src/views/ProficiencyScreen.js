import { NavLink } from "react-router-dom";
import { database } from "../config/firebase";
import { useEffect,useState } from "react";
import {ref,get} from 'firebase/database'



const endpoint= 'mxn/knowledge';
const ProficiencyScreen = () => {
    const [knowledgeData,setKnowledgeData]=useState([])
    useEffect(()=>{
        const refKnowledge=ref(database,endpoint)
        get(refKnowledge)
        .then(snapshot=>{setKnowledgeData(Object.entries(snapshot.val()))})
        .catch(e=>console.log(e))
        
    },[])

    return (
        <>
        <div>
            {knowledgeData&&knowledgeData.map((knowledge)=>{
                const key=knowledge[0]
                const data=knowledge[1]
                
                return(<div key={key}className="stackbox"><NavLink to={`/proficiency/${key}`}>{data?.type}</NavLink></div>)
            })}
           
        </div>
        </>
    )
};

export default ProficiencyScreen;