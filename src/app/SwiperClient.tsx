'use client' // Đánh dấu là Client Component
import React from 'react'

import dynamic from 'next/dynamic'
import './globals.css'



const SwiperComponent = dynamic(() => import('../app/SwiperComponent'), {
  ssr: false,
})

export default function SwiperClient() {
  return <SwiperComponent />
}
