import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import Navbar from './components/navbar'
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata = {
  title: 'Siomay Lumajang',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable}`}>
        <Navbar />
        {children}

      </body>
    </html>
  )
}
