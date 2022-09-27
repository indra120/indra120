import { useEffect, useState } from 'react'
import { Container, Flex, HamburgerLayer } from './Utility'
import { navLinks } from '../data'

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
    <header>
      <Container>
        <Flex itemsCenter spaceBetween className='relative'>
          <div className='px-4'>
            <a
              href='#hero'
              className='navbar-brand'
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
      className={`navbar-toggler ${active ? 'hamburger-active' : ''}`}
    >
      <HamburgerLayer />
      <HamburgerLayer />
      <HamburgerLayer />
    </button>
  )
}

function NavMenu({ active, children }) {
  return (
    <nav className={`${!active ? 'hidden' : ''} nav-menu`}>
      <ul>{children}</ul>
    </nav>
  )
}

function NavLink({ children, href }) {
  return (
    <li className='group cursor-pointer'>
      <a href={href} className='nav-link'>
        {children}
      </a>
    </li>
  )
}
