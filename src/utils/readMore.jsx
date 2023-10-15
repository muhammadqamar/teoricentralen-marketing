'use client'
import React, { useState } from 'react'
export function ReadMore({ content, moreContent }) {
  const [isExpanded, setIsExpanded] = useState(false)

  // Function to toggle the read more/less state
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="my-[20px]">
      <p>{content}</p>
      <p
        className="overflow-hidden "
        style={{ height: isExpanded ? 'auto' : '0' }}
      >
        {moreContent}
      </p>
      <button
        className="m-auto flex italic underline"
        onClick={() => toggleReadMore()}
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  )
}
