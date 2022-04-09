import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { referenceDb } from '../services/referenceService'
export default function ReferenceScreenItem () {
    const {id} =useParams()
    const reference=referenceDb.filter((item)=>item.id===Number(id))

  return (
    <>
      {reference[0]&&
        <div>
            <h2>{reference[0].title}</h2>
            <p>{reference[0].desc}</p>
        </div>
    }
    </>
  )
}
