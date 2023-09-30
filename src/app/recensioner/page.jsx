import { AllReviews } from '@/components/AllReviews'

import { Container } from '@/components/Container'

export const metadata = {
  title: 'Recensioner',
  description: 'Se vad våra användare säger.',
}

export default function Recensioner() {
  return (
    <Container className="mt-16">
      <AllReviews />
    </Container>
  )
}
