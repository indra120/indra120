import Blob from './Blob'
import { Container, Flex } from './Utility'

export default function Hero() {
  return (
    <section id='hero' className='pt-36'>
      <Container>
        <Flex wrap>
          <Left />
          <Right />
        </Flex>
      </Container>
    </section>
  )
}

function Left() {
  return (
    <Flex item className='self-center'>
      <h1 className='text-base font-semibold text-primary lg:text-xl'>
        Hi All!, I'm{' '}
        <span className='block font-bold text-dark text-4xl mt-1 lg:text-5xl'>
          Indra
        </span>
      </h1>

      <h2 className='font-medium text-secondary text-lg mb-5 lg:text-2xl'>
        Web Developer | <span className='text-dark'>IT Enthusiast</span>
      </h2>

      <p className='font-medium text-secondary mb-10 leading-relaxed'>
        An ordinary guy who love to sit in front of computer screen for{' '}
        <span className='text-dark font-bold'>hours</span>
      </p>

      <a
        href='#'
        className='text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out'
      >
        Contact Me
      </a>
    </Flex>
  )
}

function Right() {
  return (
    <Flex item className='self-end'>
      <div className='mt-10 relative lg:mt-9 lg:right-0'>
        <img
          src='/images/profile-picture.png'
          alt='Indra Pranata'
          className='max-w-full mx-auto'
        />
        <span className='absolute -bottom-0 lg:bottom-3 -z-10 left-1/2 -translate-x-1/2 md:scale-125'>
          <Blob />
        </span>
      </div>
    </Flex>
  )
}