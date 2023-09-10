'use client'
import React from 'react'
import Card from '@/components/Card'

export default function Home() {
  const [posts,setPosts] = React.useState([])

  const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    setPosts(data)
  }

  React.useEffect(() => {
    fetchPosts()
  },[])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Posts</h1>
      <Card id="11" title="Titleeeee" author="Authorrrrr" content="Contentttt"/>
    </main>
  )
}
