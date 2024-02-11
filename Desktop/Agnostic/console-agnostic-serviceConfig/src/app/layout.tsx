'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import { AgnoProvider } from '../context/AgnoProvider'
import { usePathname } from 'next/navigation'
import { checkIsPublicRoute } from '@/functions/check-is-public-route'
import PrivateRoute from './components/privateRoute'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isPublicPage = checkIsPublicRoute(pathname!)
  return (
    <AgnoProvider>
      <html lang="en">
        <body className={inter.className}>
          {isPublicPage && children}
          {!isPublicPage && <PrivateRoute>{children}</PrivateRoute>}
        </body>
      </html>
    </AgnoProvider>
  )
}
