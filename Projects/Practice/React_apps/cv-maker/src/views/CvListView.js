import React from 'react'
import { database } from '../config/firebase'
import {get, ref} from 'firebase/database'
import{Link} from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function CvListView() {
    const [cvData,setCvData]=useState([])
    useEffect(()=>{
        const refCv=ref(database,'/Cvs')
        get(refCv)
        .then(snapshot=>{setCvData(Object.entries(snapshot.val()))})
        .catch(e=>console.log(e))
        
    },[])
  return (
    <div>
        {
            cvData.map((item) => {
                const key=item[0]
                const data=item[1]
                return (
                    <div key={key}>
                        <Link to={`/cvs/${key}`}>{`${data.firstname}${data.lastname}`}</Link>
                    </div>
                );
            })
        }
    </div>
  )
}
