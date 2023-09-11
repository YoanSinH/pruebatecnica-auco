'use client'
import React from 'react'
import Card from '@/components/Card'
import {getPostsAndAuthors} from '@/services/fetchPosts'
import Navbar from '@/components/Navbar'

export default function Home() {
  const [data,setData] = React.useState([])
  
  React.useEffect(() => {
    getPostsAndAuthors()
    .then((data) => setData(data))
    .catch((error) => console.error('Error:', error));
  },[])

  return (
    <>
      <Navbar/>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='font-bold text-3xl'></h1>
      <h2 className="font-semibold text-3xl mb-4">Posts 📝</h2>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
      {data.map(post => (
        <Card key={post.id} id={post.id} title={post.title} author={post.author} content={post.body} contentPage={'/post/'+post.id}/>
      ))}
      </div>
    </main>
    </>
  )
}
