"use client"

import Content from '@/components/home/Content'
import NavBar from '@/components/home/NavBar'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col'>
      <NavBar />
      <Content />
    </div>
  )
}
