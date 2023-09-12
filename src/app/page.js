'use client'
import React from 'react'
import Card from '@/components/Card'
import {getPostsAndAuthors} from '@/services/fetchPosts'
import Navbar from '@/components/Navbar'
import CardSkeleton from '@/components/CardSkeleton'
import Footer from '@/components/Footer'

export default function Home() {
  const bottomRef = React.useRef(null);
  const [data,setData] = React.useState([])
  const [currentPage] = React.useState(1);
  const [dataPerPage, setDataPerPage] = React.useState(9);
  
  React.useEffect(() => {
    getPostsAndAuthors()
    .then((data) => setData(data))
    .catch((error) => console.error('Error:', error));
  },[])

  const loadData = () => {
    setDataPerPage(dataPerPage + 9);
    setTimeout(() => {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  const indexLastData = currentPage * dataPerPage;
  const indexFistData = indexLastData - dataPerPage;
  const currentData = data.slice(indexFistData, indexLastData);

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
      currentData.map(post => (
        <Card key={post.id} id={post.id} title={post.title} author={post.author} content={post.body} contentPage={'/post/'+post.id}/>
      ))}
      </div>
      {data.length === 0 ?
      null :
      <>
      <div className='mt-5 flex items-center justify-center'>
        <button type="button" className="items-center text-zinc-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={loadData}>Cargar Más</button>
      </div>
      </>
      }
      <div ref={bottomRef} />
    </main>
    <Footer/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js" async></script>
    </>
  )
}
