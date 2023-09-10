'use client'
import React from 'react'

export default function Page({ params }) {
  const [post,setPost] = React.useState([])

  const fetchPost = async (id) => {
    await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
    .then((response) => response.json())
        .then((data) => setPost(data))
        .catch((error) => console.error('Error fetching posts:', error));
    console.log('https://jsonplaceholder.typicode.com/posts/'+id)
    
  }

  React.useEffect(() => {
    fetchPost(params.slug)
    console.log(post)
  },[])

  return (
  <div>My Post: {post.body}</div>
  )
  }  
