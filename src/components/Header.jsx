import { useEffect, useState } from 'react'
import { navLinks } from '../data'
import { Container, Flex, HamburgerLayer } from './Utility'

export default function Header() {
  const [active, setActive] = useState(false)

  function toggleNavbar() {
    setActive(prev => !prev)
  }

  useEffect(() => {
    if (window) {
      window.onscroll = () => {
        const header = document.querySelector('header')
        const fixedNav = header?.offsetTop || 0

        if (window.pageYOffset > fixedNav) {
          header?.classList.add('fixed-navbar')
        } else {
          header?.classList.remove('fixed-navbar')
        }
      }
    }
  }, [])

  return (
    <header className='bg-transparent absolute top-0 left-0 w-full flex items-center z-10'>
      <Container>
        <Flex itemsCenter spaceBetween className='relative'>
          <div className='px-4'>
            <a
              href='#hero'
              className='font-bold text-lg text-primary block py-6'
            >
              Indra Pranata
            </a>
          </div>

          <Flex itemsCenter className='px-4'>
            <NavbarToggler active={active} onClick={toggleNavbar} />

            <NavMenu active={active}>
              {navLinks.map(link => (
                <NavLink key={link.url} href={link.url}>
                  {link.name}
                </NavLink>
              ))}
            </NavMenu>
          </Flex>
        </Flex>
      </Container>
    </header>
  )
}

function NavbarToggler({ onClick, active }) {
  return (
    <button
      onClick={onClick}
      className={`block absolute right-4 lg:hidden${
        active ? ' hamburger-active' : ''
      }`}
    >
      <HamburgerLayer className='origin-top-left' />
      <HamburgerLayer />
      <HamburgerLayer className='origin-bottom-left' />
    </button>
  )
}

function NavMenu({ active, children }) {
  return (
    <nav
      className={`${
        !active ? 'hidden' : ''
      } absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}
    >
      <ul className='block lg:flex'>{children}</ul>
    </nav>
  )
}

function NavLink({ children, href }) {
  return (
    <li className='group cursor-pointer'>
      <a
        href={href}
        className='text-base text-dark py-2 mx-8 flex group-hover:text-primary'
      >
        {children}
      </a>
    </li>
  )
}
