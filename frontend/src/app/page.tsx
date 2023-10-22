"use client"

import Content from '@/components/home/Content'
import NavBar from '@/components/home/NavBar'

export default function Home() {
  return (
    <div className='bg-hero bg-cover bg-no-repeat w-full h-screen max-h-screen overflow-y-auto'>
      <NavBar />
      <Content />
    </div>
  )
}
