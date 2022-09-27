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

export function SectionHeader({ title, headline, shortDesc }) {
  return (
    <Wrapper>
      <div className='max-w-xl mx-auto text-center mb-16'>
        <h4 className='font-semibold text-lg text-primary mb-2'>{title}</h4>
        <h2 className='font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl'>
          {headline}
        </h2>
        <p className='font-medium text-md text-secondary md:text-lg'>
          {shortDesc}
        </p>
      </div>
    </Wrapper>
  )
}

export function Button({ children, type, className, href }) {
  if (type === 'link') {
    return (
      <a href={href} className={`button ${className ? className : ''}`}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={`button ${className ? className : ''}`}>
      {children}
    </button>
  )
}
