'use client'

import dynamic from 'next/dynamic'

const SwiperComponent = dynamic(() => import('./SwiperComponent'), {
  ssr: false,
})

export default function MainPage() {
  return (
    <div>
      <SwiperComponent />
    </div>
  )
}
