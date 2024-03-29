import Head from 'next/head'
import About from '../src/components/About'
import Contact from '../src/components/Contact'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import Hero from '../src/components/Hero'
import Portfolio from '../src/components/Portfolio'

export default function Home() {
  return (
    <>
      <Head>
        <title>Indra Pranata | Portfolio</title>
      </Head>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}