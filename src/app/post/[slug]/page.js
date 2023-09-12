'use client'
import React from 'react'
import Card from '@/components/Card';
import { fetchPostDetails } from '@/services/fetchPosts';

export default function Page({ params }) {
  const [postDetails,setPostDetails] = React.useState()

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

    fetchPostDetails(params.slug)
    .then(data => setPostDetails(data))
    .catch(error => console.error(error))
    console.log(postDetails);
  },[])

  if (!postDetails) {
    return (
      <>
      <div className="flex min-h-screen items-center justify-center space-x-2">
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-blue-400"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-blue-400"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-blue-400"></div>
      </div>
      </>
    )
  }
  
  return (
    <article className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="font-bold text-2xl">{post.title}</h1>
        <p className="font-light text-lg">{postDetails.author.name}</p>
      </div>
      <p className="font-normal">{post.body}</p>
        <h2 className='font-semibold'>Comments:</h2>
        {postDetails.comments.map(comment => {
          return(
          <Card key={comment.id} id={comment.id} title={comment.name} author={comment.email} content={comment.body} />
          )
        })
        }
  
    </article>
  )
  }  
