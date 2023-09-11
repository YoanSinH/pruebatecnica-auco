'use client'
import React from 'react'
import Card from '@/components/Card'
import {getPostsAndAuthors} from '@/services/fetchPosts'

export default function Home() {
  const [data,setData] = React.useState([])
  
  React.useEffect(() => {
    getPostsAndAuthors()
    .then((data) => setData(data))
    .catch((error) => console.error('Error:', error));
  },[])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data.map(post => (
        <Card key={post.id} id={post.id} title={post.title} author={post.author} content={post.body} contentPage={'/post/'+post.id}/>
      ))}
    </main>
  )
}
