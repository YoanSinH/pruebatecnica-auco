'use client'
import React from 'react'
import Card from '@/components/Card'

export default function Home() {
  const [posts,setPosts] = React.useState([])
  const [authors,setAuthors] = React.useState([])
  //const [data,setData] = React.useState([])

  const combineData = () => {
    const combinedData = posts.map((post) => {
      const author = authors.find((author) => author.id === post.userId);
      return {
        id: post.id,
        title: post.title,
        body: post.body,
        author: author ? author.name : 'Unknown Author',
      };
    });
    return combinedData;
  };
  
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching posts:', error));

    fetch('https://jsonplaceholder.typicode.com/users/')
      .then((response) => response.json())
      .then((data) => setAuthors(data))
      .catch((error) => console.error('Error fetching authors:', error));
    
    //setData(combineData);
  },[])

  const data = combineData()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data.map(post => (
        <Card key={post.id} id={post.id} title={post.title} author={post.author} content={post.body}/>
      ))}
      
    </main>
  )
}
