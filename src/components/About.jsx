import { Container, Flex, IconLink, Wrapper } from './Utility'
import { socialLinks } from '../data'

export default function About() {
  return (
    <section id='about' className='pt-36 pb-32'>
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
    <Wrapper half lg className='mb-10'>
      <h4 className='font-bold uppercase text-primary text-lg mb-3'>
        About Me
      </h4>
      <h2 className='font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl'>
        Start of the Journey
      </h2>
      <p className='font-medium text-base text-secondary max-w-xl lg:text-lg'>
        It all started from 2020. I have so much free time because of study from home, but I didn't know
        what to do. So, I tried to learn web dev, starting from HTML & CSS. It
        was lot of fun, but then I know that there is a lot of other things that
        I should know to become a 'Web Developer'. I decided to explore this world.
      </p>
    </Wrapper>
  )
}

function Right() {
  return (
    <Wrapper half lg>
      <h3 className='font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10'>
        Let's Connect
      </h3>

      <p className='font-medium text-base text-secondary mb-6 lg:text-lg'>
        These are my social media accounts. Check it out if you want to know
        more about me. Maybe we can be a friend, co-worker, or even business
        partner!
      </p>

      <Flex itemsCenter>
        {socialLinks.map(platform => (
          <IconLink key={platform.name} href={platform.url}>
            <platform.Icon />
          </IconLink>
        ))}
      </Flex>
    </Wrapper>
  )
}
