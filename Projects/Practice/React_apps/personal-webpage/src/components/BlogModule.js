import React from 'react'
import {Link} from 'react-router-dom'
import { blogDb } from '../services/blogService'
export default function BlogModule() {
  return (
    <div className="blog-module">
        <h3>Legfirssebb posztok:</h3>
        {blogDb.map((item)=>{
            return(<>
                <Link to={`/blog/${item.id}`}>{item.title}</Link>
            </>)
        })}
        
    </div>
  )
}
