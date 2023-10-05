import Image from 'next/image'
import React from 'react'
import christian from '@/images/testimonials/christian.jpg'
const Review = ({ testimonial }) => {
  return (
    <figure className="rounded-lg bg-white p-6 shadow ring-1 ring-dark/5">
      <blockquote className="text-gray-900">
        <p>{`“${testimonial.title}”`}</p>
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-x-4">
        <Image
          src={christian}
          alt={testimonial.user?.name}
          className="h-10 w-10 rounded-full bg-gray-50"
        />
        <div>
          <div className="font-semibold">{testimonial.user?.name}</div>
          <div className="text-gray-600">{`${testimonial.user?.discription}`}</div>
        </div>
      </figcaption>
    </figure>
  )
}

export default Review
