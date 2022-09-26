import type { NextPage } from 'next'
import About from '../src/components/About'
import Hero from '../src/components/Hero'

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <About />
    </>
  )
}

export default Home