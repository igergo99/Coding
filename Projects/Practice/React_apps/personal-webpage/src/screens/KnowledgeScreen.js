import React from 'react'
import { knowledgeDb } from '../services/knowledgeService'
import{Link}from 'react-router-dom'
export  function KnowledgeScreen() {
    return(
    <>
    {knowledgeDb.map(item=>{
        return (
            <div key={item.id}><Link to={`/knowledge/${item.id}`}>{item.title}</Link></div>
          )
    })}
    </>)
}
