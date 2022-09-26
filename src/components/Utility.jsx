export function Container({ children, className = '' }) {
  return (
    <div className={`container ${className ? className : ''}`}>{children}</div>
  )
}

export function Flex({ children, className = '', item = false, wrap = false }) {
  if (item) {
    return <div className={`w-full px-4 lg:w-1/2 ${className ? className : ''}`}>{children}</div>
  }

  return (
    <div className={`flex ${wrap ? 'flex-wrap' : ''} ${className ? className : ''}`}>
      {children}
    </div>
  )
}

export function IconLink({ children, href = '' }) {
  return (
    <a
      href={href}
      target='_blank'
      className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white transition duration-300 ease-in-out'
    >
      {children}
    </a>
  )
}