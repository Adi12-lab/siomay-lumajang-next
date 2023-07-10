import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const playfair = Playfair_Display({
  subsets: ['cyrillic'],
  variable: '--font-playfair',
})

const dataForMeta = {
  title: "Siomay Lumajang",
  title2: 'Siomay Lumajang | Khas bandung banget',
  description: 'Selamat datang di dunia kelezatan siomay Lumajang khas Bandung! Siomay ini terkenal dengan cita rasanya yang autentik dan menggugah selera. Dibuat dengan cermat menggunakan ikan tenggiri asli, siomay Lumajang membawa keunikan dan kelezatan dari kota Bandung yang terkenal dengan masakan yang menggoda lidah.',
  author: "Sugeng rihandoyo"

}

export const metadata = {
  title: dataForMeta.title,
  description: dataForMeta.description,
  openGraph: {
    title: dataForMeta.title,
    description: dataForMeta.description
  }
}

const jsonLd = {
  "@context": "http://schema.org",
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
