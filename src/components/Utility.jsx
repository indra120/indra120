export function Container({ children, className }) {
  return (
    <div className={`container ${className ? className : ''}`}>{children}</div>
  )
}

export function Flex({
  children,
  className,
  wrap,
  itemsCenter,
  justifyCenter,
  spaceBetween,
}) {
  return (
    <div
      className={`flex ${wrap ? 'flex-wrap' : ''} ${
        itemsCenter ? 'items-center' : ''
      } ${justifyCenter ? 'justify-center' : ''} ${
        spaceBetween ? 'justify-between' : ''
      } ${className ? className : ''}`}
    >
      {children}
    </div>
  )
}

export function Wrapper({ children, className, half }) {
  return (
    <div
      className={`w-full px-4 ${half ? 'lg:w-1/2' : ''} ${
        className ? className : ''
      }`}
    >
      {children}
    </div>
  )
}

export function IconLink({ children, href }) {
  return (
    <a href={href} target='_blank' className='icon-link'>
      {children}
    </a>
  )
}

export function HamburgerLayer() {
  return <span className='hamburger-layer' />
}
