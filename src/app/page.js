import Card from '@/components/Card'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Posts</h1>
      <Card id="11" title="Titleeeee" author="Authorrrrr" content="Contentttt"/>
    </main>
  )
}
