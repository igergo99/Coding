import React from 'react'
import { blogDb } from '../services/blogService'
import { Link } from 'react-router-dom'
import BlogModule from '../components/BlogModule'
export default function BlogScreen() {
    return(
        <div className="blog-container">
            
        <div className="blog-list">{blogDb.map(item=>{
            return (
                <span  key={item.id}><Link to={`/blog/${item.id}`}>{item.title}</Link></span>
              )
        })}</div>
        <BlogModule/>
        </div>)
}
