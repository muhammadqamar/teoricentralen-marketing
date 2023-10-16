'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
export const ReadMore = ({ content, moreContent }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  // Function to toggle the read more/less state
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="my-[20px]">
      <p className="mb-3 text-center">{content}</p>
      <motion.div
        initial={isExpanded ? 'open' : 'closed'}
        animate={isExpanded ? 'open' : 'closed'}
        variants={{
          open: {
            height: 'auto',
            overflow: 'visible',
          },
          closed: {
            height: '0',
            overflow: 'hidden',
          },
        }}
      >
        <p className="mb-3  text-center">{moreContent}</p>
      </motion.div>
      <button
        className="m-auto flex italic underline"
        onClick={() => toggleReadMore()}
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  )
}
