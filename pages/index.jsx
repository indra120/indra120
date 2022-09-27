import About from '../src/components/About'
import Contact from '../src/components/Contact'
import Header from '../src/components/Header'
import Hero from '../src/components/Hero'
import Portfolio from '../src/components/Portfolio'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </>
  )
}