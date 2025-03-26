'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import './globals.css'

const SwiperComponent = dynamic(() => import('../app/SwiperComponent'), {
  ssr: false,
})

export default function ClientComponent() {
  return (
    <div>
      <SwiperComponent />
    </div>
  )
}
