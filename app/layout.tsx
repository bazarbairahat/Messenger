import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import ToasterContext from './context/ToasterContext'
import AuthContext from './context/AuthcContext'

import './globals.css'
import ActiveStatus from './components/ActiveStatus'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MessengerGoi',
  description: 'MessengerGoi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
        <ToasterContext />
        <ActiveStatus />
        {children}
        </AuthContext>
        </body>
    </html>
  )
}
