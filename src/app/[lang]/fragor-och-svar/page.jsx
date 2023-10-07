import { Container } from '@/components/Container'
import { Faq } from '@/components/Faq'

export const metadata = {
  title: 'Frågor och svar',
  description: 'Vi svarar på de vanligaste frågorna',
}

export default async function Page({ params }) {
  return (
    <>
      <Container className="my-16">
        <Faq />
      </Container>
    </>
  )
}
