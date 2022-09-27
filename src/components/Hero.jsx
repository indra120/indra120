import { Button, Container, Flex, Wrapper } from './Utility'

export default function Hero() {
  return (
    <section id='hero' className='pt-36 md:pt-30 bg-slate-100'>
      <Container>
        <Flex wrap className='md:flex-nowrap'>
          <Left />
          <Right />
        </Flex>
      </Container>
    </section>
  )
}

function Left() {
  return (
    <Wrapper half lg className='self-center'>
      <h1 className='text-base font-semibold text-primary lg:text-xl'>
        Hi All!, I'm{' '}
        <span className='block font-bold text-dark text-4xl mt-1 lg:text-5xl'>
          Indra
        </span>
      </h1>

      <h2 className='font-medium text-secondary text-lg mb-5 lg:text-2xl'>
        <span className='text-dark'>Web Developer |</span> IT Enthusiast
      </h2>

      <p className='font-medium text-secondary mb-10 leading-relaxed'>
        An ordinary guy who love to sit in front of computer screen for{' '}
        <span className='text-dark font-bold'>hours</span>
      </p>

      <Button type='link' href='#contact'>
        Contact Me
      </Button>
    </Wrapper>
  )
}

function Right() {
  return (
    <Wrapper half lg className='self-end'>
      <div className='mt-10 relative lg:mt-9 lg:right-0'>
        <img
          src='/images/profile-picture.png'
          alt='Indra Pranata'
          className='max-w-full mx-auto'
        />
      </div>
    </Wrapper>
  )
}
