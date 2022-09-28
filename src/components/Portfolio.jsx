import Image from 'next/image'
import { Container, Flex, Wrapper, SectionHeader } from './Utility'
import { projects, sectionHeader } from '../data'

export default function Portfolio() {
  return (
    <section id='portfolio' className='pt-36 pb-16 bg-slate-100'>
      <Container>
        <SectionHeader {...sectionHeader.portfolio} />
        <Content />
      </Container>
    </section>
  )
}

function Content() {
  return (
    <Wrapper className='xl:w-10/12 xl:mx-auto'>
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
      <div className='rounded-md shadow-md overflow-hidden '>
        <a href={livePreview}>
          <Image
            src={imageUrl}
            alt={title}
            title={title}
            width='488.66'
            height='278'
            layout='responsive'
          />
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
