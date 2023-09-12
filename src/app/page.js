'use client'
import React from 'react'
import Card from '@/components/Card'
import {getPostsAndAuthors} from '@/services/fetchPosts'
import Navbar from '@/components/Navbar'
import CardSkeleton from '@/components/CardSkeleton'
import Footer from '@/components/Footer'

export default function Home() {
  const [data,setData] = React.useState([])
  
  React.useEffect(() => {
    getPostsAndAuthors()
    .then((data) => setData(data))
    .catch((error) => console.error('Error:', error));
  },[])

  return (
    <>
      <Navbar currentPage="posts"/>
    <main className="flex min-h-screen flex-col mt-10 md:px-24 px-5">
      <h2 className="font-semibold text-3xl mb-4">Posts 📝</h2>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
      {data.length === 0 ?
      <>
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
      </>
        :
      data.map(post => (
        <Card key={post.id} id={post.id} title={post.title} author={post.author} content={post.body} contentPage={'/post/'+post.id}/>
      ))}
      </div>
    </main>
    <Footer/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js" async></script>
    </>
  )
}
