import { useParams } from "react-router-dom";
import { database } from "../../config/firebase";
import { useEffect,useState } from "react";
import {ref,get} from 'firebase/database'

const BlogPost = () => {

    const { blog_id } = useParams();
    const endpoint=`/mxn/blog/posts/${blog_id}`
    const [target,setTarget]=useState(null)
    useEffect(()=>{
        const refBlog=ref(database,endpoint)
        get(refBlog)
        .then(snapshot=>setTarget(snapshot.val()))
        .catch(e=>console.log(e))
    },[blog_id])

    return (
        <div>
            {target && (
                <>
                    <h2>{target?.title}</h2>
                    <p>{target?.lead}</p>
                    <p>{target?.description}</p>
                </>
            )}
        </div>
    );
};

export default BlogPost;
