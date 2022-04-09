import React from 'react'
import { referenceDb } from '../services/referenceService'
export default function PriceScreen() {

  console.log('lefutott a price')
  return (
    <div>
        <div>
        {referenceDb.map(item=>{
        return (
            <div key={`ref_${item.id}`}>{`Projekt: ${item.title}, price: ${item.price}`}</div>
          )
        })}
        </div>
    </div>
  )
}
