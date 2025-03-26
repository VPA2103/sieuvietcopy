'use client'

import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import './globals.css'

// export const metadata = {
//   title: 'Công ty TNHH Máy Văn Phòng Siêu Việt',
//   description: 'Ứng dụng React với Next.js',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <head>
        <title>Công ty TNHH Máy Văn Phòng Siêu Việt</title>
        <meta name="description" content="Ứng dụng React với Next.js" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
