import { Button, Container, SectionHeader, Wrapper } from './Utility'
import { sectionHeader } from '../data'

export default function Contact() {
  return (
    <section id='contact' className='pt-36 pb-32'>
      <Container>
        <Wrapper>
          <SectionHeader {...sectionHeader.contact} />
        </Wrapper>

        <form>
          <Wrapper className='lg:w-2/3 mx-auto px-0'>
            <Input type='text' label='Name' name='name' />
            <Input type='email' label='E-Mail' name='email' />
            <Input type='textarea' label='Message' name='message' />

            <Wrapper>
              <Button type='submit' className='w-full'>
                Send
              </Button>
            </Wrapper>
          </Wrapper>
        </form>
      </Container>
    </section>
  )
}

function Input({ label, name, type }) {
  return (
    <Wrapper className='mb-8'>
      <label htmlFor={name} className='text-base text-primary font-bold'>
        {label}
      </label>
      {type == 'textarea' ? (
        <textarea name={name} id={name} className='input h-32' />
      ) : (
        <input type={type} name={name} id={name} className='input' />
      )}
    </Wrapper>
  )
}
