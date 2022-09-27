import { Container, Flex, Wrapper } from './Utility'
import { projects } from '../data'

export default function Portfolio() {
  return (
    <section id='portfolio' className='pt-36 pb-16 bg-slate-100'>
      <Container>
        <Header />
        <Content />
      </Container>
    </section>
  )
}

function Header() {
  return (
    <Wrapper>
      <div className='max-w-xl mx-auto text-center mb-16'>
        <h4 className='font-semibold text-lg text-primary mb-2'>Portfolio</h4>
        <h2 className='font-bold text-dark text-3xl mb-4'>Latest Projects</h2>
        <p className='font-medium text-md text-secondary'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum ullam
          alias delectus exercitationem, a ratione. Iure sit suscipit a eaque.
        </p>
      </div>
    </Wrapper>
  )
}

function Content() {
  return (
    <Wrapper>
      <Flex wrap justifyCenter>
        {projects.map(project => (
          <Project
            key={project.title}
            title={project.title}
            imageUrl={project.imageUrl}
            description={project.description}
            livePreview={project.livePreview}
          />
        ))}
      </Flex>
    </Wrapper>
  )
}

function Project({ title, imageUrl, description, livePreview }) {
  return (
    <div className='mb-12 p-4 md:w-1/2'>
      <div className='rounded-md shadow-md overflow-hidden'>
        <a href={livePreview}>
          <img src={imageUrl} alt={title} title={title} />
        </a>
      </div>

      <h3 className='font-semibold text-dark text-xl mt-5 mb-3'>
        <a
          href={livePreview}
          className='hover:text-primary transition duration-300 ease-in-out'
        >
          {title}
        </a>
      </h3>
      <p className='font-medium text-base text-secondary'>{description}</p>
    </div>
  )
}
