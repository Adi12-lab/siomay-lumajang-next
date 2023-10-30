import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Team from './components/team'
import Break from './components/break'
import Gallery from './components/gallery'
import Testimoni from './components/testimoni'
import Footer from './components/footer'
import ScrollUp from './components/scrollUp'

export default function Home() {

  return (
    <>
      <Navbar />
      <main className='overflow-x-hidden'>
        <ScrollUp />
        <Hero />
        <About />
        <Team />
        <Break />
        <Gallery />
        <Testimoni />
      </main>
      <Footer />
    </>
  )
}
