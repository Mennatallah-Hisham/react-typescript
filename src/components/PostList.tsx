import { useEffect , useState } from 'react';
import PostCard from './PostCard'
import { TPost } from '../types/Types';


const PostList = () => {

    const [posts,setPosts]= useState([]);
    async function getData(){
        const res= await fetch("https://jsonplaceholder.typicode.com/posts");
    
        if(!res.ok){
            throw new Error("failed to fetch data");
        }
        const data = await res.json();
        setPosts(data);
     
    
    }
   
    
useEffect(()=>{
    getData();
},[]);

  return (
    <div className='flex'>
        {posts.map((post:TPost)=><PostCard key={post.id}
        {...post}/>)}
        

    </div>
  )
}

export default PostList