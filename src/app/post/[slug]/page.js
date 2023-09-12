'use client'
import React from 'react'
import Card from '@/components/Card';
import { fetchPostDetails } from '@/services/fetchPosts';
import Navbar from '@/components/Navbar';

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
  <>
  <Navbar />
    <article className="flex min-h-screen flex-col  justify-between p-24">
      <div className='max-w-[80%]'>
        <h1 className="font-bold text-2xl">{post.title}</h1>
        <p className="font-light text-lg">By: {postDetails.author.name}</p>
        <p className="font-normal mt-3">{post.body}</p>
      </div>
      <div className='grid h-screen mt-5'>
        <h2 className='font-semibold text-lg'>Comments:</h2>
        <div className='grid grid-cols-2 gap-2 w-fit'>
        {postDetails.comments.map(comment => {
          return(
          <Card key={comment.id} id={comment.id} title={comment.name} author={comment.email} content={comment.body} />
          )
        })
        }
        </div>
      </div>
    </article>
  </>
  )
  }  
