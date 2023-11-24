import type { Metadata } from 'next'
import { Inter, Modak } from 'next/font/google'
import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import Modal from './components/modals/Modal'
import RegisterModal from './components/modals/RegisterModal'


const font = Nunito({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: 'Keltel',
  description: 'Booking application',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <RegisterModal/>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
