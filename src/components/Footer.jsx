import { Container, Flex, IconLink, Wrapper } from './Utility'
import { navLinks, socialLinks } from '../data'

export default function Footer() {
  return (
    <footer className='bg-dark pt-24 pb-12'>
      <Container>
        <Flex wrap>
          <Wrapper half md className='mb-12 text-slate-300'>
            <h2 className='font-bold font-medium text-4xl text-white mb-5'>
              Indra Pranata
            </h2>
            <h3 className='font-bold text-2xl mb-2'>Contact Me</h3>
            <p>indrapranata120@gmail.com</p>
            <p>Jl. Jalan No. 69</p>
            <p>Tarakan</p>
          </Wrapper>

          <Wrapper half md className='mb-12 text-slate-300'>
            <h3 className='font-semibold text-xl text-white mb-5'>
              Navigation
            </h3>

            <ul className='text-slate-300'>
              {navLinks.map(link => (
                <FooterLink key={link.url} href={link.url}>
                  {link.name}
                </FooterLink>
              ))}
            </ul>
          </Wrapper>
        </Flex>

        <Wrapper className='pt-10 px-0 border-t border-slate-700'>
          <Flex itemsCenter justifyCenter className='mb-5'>
            {socialLinks.map(platform => (
              <IconLink key={platform.name} href={platform.url}>
                <platform.Icon />
              </IconLink>
            ))}
          </Flex>
          <p className='font-medium text-xs text-slate-500 text-center'>
            Created by{' '}
            <a
              href='https://github.com/indra120'
              target='_blank'
              className='font-bold text-primary'
            >
              Indra Pranata
            </a>
            , using{' '}
            <a
              href='https://nextjs.org'
              target='_blank'
              className='text-white'
            >
              NextJS
            </a>{' '}
            &{' '}
            <a
              href='https://tailwindcss.com'
              target='_blank'
              className='font-bold text-sky-500'
            >
              Tailwind
            </a>
          </p>
        </Wrapper>
      </Container>
    </footer>
  )
}

function FooterLink({ children, href }) {
  return (
    <li>
      <a href={href} className='inline-block text-base hover:text-primary mb-3'>
        {children}
      </a>
    </li>
  )
}
