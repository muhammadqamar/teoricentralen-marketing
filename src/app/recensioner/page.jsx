import Testimonials from '@/components/Testimonials/Testimonials'
// import { useTranslation } from 'next-i18next'

export const metadata = {
  title: 'Recensioner',
  description: 'Framtidens trafikutbildning är här',
}

export default function Reviews() {
  // const { t } = useTranslation('common')
  return (
    <>
      <Testimonials />
    </>
  )
}
