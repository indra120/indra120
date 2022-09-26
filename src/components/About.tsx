import { Container, Flex, IconLink } from './Utility'
import { socialLink } from '../data'

export default function About() {
  return (
    <section id='about' className='pt-36 pb-32'>
      <Container>
        <Flex wrap>
          <Flex item className='mb-10'>
            <h4 className='font-bold uppercase text-primary text-lg mb-3'>
              About Me
            </h4>
            <h2 className='font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl'>
              Life is just like a soup, and I'm fork
            </h2>
            <p className='font-medium text-base text-secondary max-w-xl lg:text-lg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              impedit ea, cupiditate laborum earum aspernatur reiciendis.
            </p>
          </Flex>

          <Flex item>
            <h3 className='font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10'>
              Let's Connect
            </h3>

            <p className='font-medium text-base text-secondary mb-6 lg:text-lg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              ipsum adipisci ipsam eveniet obcaecati, aspernatur error
              laboriosam accusamus?
            </p>

            <Flex className='items-center'>
              {socialLink.map(platform => (
                <IconLink key={platform.name} href={platform.url}>
                  <platform.Icon />
                </IconLink>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </section>
  )
}
