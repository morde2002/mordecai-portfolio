import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mordecai Portfolio',
  description: 'Created with love from Mordecai',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
