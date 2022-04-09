import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { knowledgeDb } from '../services/knowledgeService'
export default function KnowledgeScreenItem () {
    const {id} =useParams()
    const knowledge=knowledgeDb.filter((item)=>item.id===Number(id))

  return (
    <>
      {knowledge[0]&&
        <div>
            <h2>{knowledge[0].title}</h2>
            <p>{knowledge[0].desc}</p>
        </div>
    }
    </>
  )
}
