import Image from 'next/image'
import React from 'react'

const Review = ({ testimonial }) => {
  return (
    <figure className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
      <blockquote className="text-gray-900">
        <p>{`“${testimonial.body}”`}</p>
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-x-4">
        <Image
          src={testimonial.author.imageUrl}
          alt={testimonial.author.name}
          className="h-10 w-10 rounded-full bg-gray-50"
        />
        <div>
          <div className="font-semibold">{testimonial.author.name}</div>
          <div className="text-gray-600">{`${testimonial.author.business}`}</div>
        </div>
      </figcaption>
    </figure>
  )
}

export default Review
