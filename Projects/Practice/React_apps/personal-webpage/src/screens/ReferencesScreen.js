import React from 'react'
import { referenceDb } from '../services/referenceService'
import{Link}from 'react-router-dom'
export  function ReferencesScreen() {
    return(
    <>
    {referenceDb.map(item=>{
        return (
            <div key={item.id}><Link to={`/references/${item.id}`}>{item.title}</Link></div>
          )
    })}
    </>)
}
