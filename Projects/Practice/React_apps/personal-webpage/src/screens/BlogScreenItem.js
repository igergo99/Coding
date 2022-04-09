import React from 'react'
import { blogDb } from '../services/blogService'
import { useParams } from 'react-router'
import BlogModule from '../components/BlogModule'


export default function BlogScreenItem() {
    const {id} =useParams()
    const blog=blogDb.filter((item)=>item.id===Number(id))

  return (
    <div className="blog-container">
        
      {blog[0]&&
        <div >
            <h2>{blog[0].title}</h2>
            <p>{blog[0].content}</p>
        </div>
    }
    <BlogModule/>
    </div>
  )
}
