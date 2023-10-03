import Image from 'next/image'
import React from 'react'
import christian from '@/images/testimonials/christian.jpg'
const Review = ({ testimonial }) => {
  return (
    <figure className="p-6 bg-white shadow-lg rounded-2xl ring-1 ring-gray-900/5">
      <blockquote className="text-gray-900">
        <p>{`“${testimonial.title}”`}</p>
      </blockquote>
      <figcaption className="flex items-center mt-6 gap-x-4">
        <Image
          src={christian}
          alt={testimonial.user?.name}
          className="w-10 h-10 rounded-full bg-gray-50"
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
