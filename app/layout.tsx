import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

const dataForMeta = {
  title: "Siomay Lumajang",
  title2: 'Siomay Lumajang | Khas Lumajang',
  description: 'Selamat datang di dunia kelezatan siomay Lumajang! Siomay ini terkenal dengan cita rasanya yang autentik dan menggugah selera.',
  author: "Sugeng rihandoyo"
}

export const metadata = {
  title: dataForMeta.title2,
  description: dataForMeta.description,
  openGraph: {
    title: dataForMeta.title,
    description: dataForMeta.description
  }
}

const jsonLd = {
  "@context": "https://siomaylumajang.com",
  "@type": "Product",
  name: dataForMeta.title,
  description: dataForMeta.description,
  manufacturer: {
    "@type": "Person",
    name: dataForMeta.author
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable}`}>
        
        {children}
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}/>
      </body>
    </html>
  )
}
