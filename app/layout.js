import Sidebar from '@/components/Sidebar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Builder Boost',
  description: 'Builder Boost is an open source visual component-based layout editor',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  )
}
