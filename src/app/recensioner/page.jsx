import Image from 'next/image'

import { Container } from '@/components/Container'
import portraitImage from '@/images/portrait.jpg'
import Testimonials from '@/components/Testimonials'

export const metadata = {
  title: 'Recensioner',
  description: 'Framtidens trafikutbildning är här',
}

export default function Reviews() {
  return <Testimonials />
}
