import { Container } from '@/components/Container'
import { Faq } from '@/components/Faq'

export const metadata = {
  title: 'Buss',
  description: 'Vi svarar på de vanligaste frågorna',
}

export default async function Page({ params: { locale } }) {
  return <Container className="my-16">Buss</Container>
}
