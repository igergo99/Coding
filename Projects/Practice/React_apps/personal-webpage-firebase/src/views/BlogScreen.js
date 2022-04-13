import { Link } from "react-router-dom";
import { database } from "../config/firebase";
import { useEffect,useState } from "react";
import {ref,get} from 'firebase/database'

const endpoint='mxn/blog/posts'
const BlogScreen = () => {
    const [blogData,setBlogData]=useState([])
    useEffect(()=>{
        const refBlog=ref(database,endpoint)
        get(refBlog)
        .then(snapshot=>{setBlogData(Object.entries(snapshot.val()))})
        .catch(e=>console.log(e))
        console.log(blogData)
    },[])
    return (
        <div className="blog">
            <div>
            {blogData.map((item, index) => {
                const key=item[0]
                const data=item[1]
                return (<>
                    <article key={key}>
                        <h2>{data?.title}</h2>
                        <p>{data?.lead}</p>
                        <Link to={`/blogposts/${key}`}>{data?.lead}</Link>
                    </article>
                    </>
                );
            })}
            <div className="latest">
            <h3>Latest Posts</h3>
            {blogData.map((item, index) => {
                const key=item[0]
                const data=item[1]
                return (
                    <>
                    
                    <Link to={`/blogposts/${key}`}>{data?.title}</Link>
                    </>
               
                );
            })}
             </div>
            </div>
            
        </div>
    );
};

export default BlogScreen;