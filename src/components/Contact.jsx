import { Button, Container, SectionHeader, Wrapper } from './Utility'
import { sectionHeader } from '../data'

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.target)
    const { name, email, subject, message } = Object.fromEntries(form.entries())

    const link = document.createElement('a')
    link.href = `mailto:indrapranata120@gmail.com?subject=${subject}&body=${name} | ${email} | ${message}`
    link.target = '_blank'
    link.click()
  }

  return (
    <section id='contact' className='pt-36 pb-32'>
      <Container>
        <Wrapper>
          <SectionHeader {...sectionHeader.contact} />
        </Wrapper>

        <form onSubmit={handleSubmit}>
          <Wrapper className='lg:w-2/3 mx-auto px-0'>
            <Input type='text' label='Name' name='name' />
            <Input type='email' label='E-Mail' name='email' />
            <Input type='text' label='Subject' name='subject' />
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
        <textarea name={name} id={name} className='input h-32' required />
      ) : (
        <input type={type} name={name} id={name} className='input' required />
      )}
    </Wrapper>
  )
}
