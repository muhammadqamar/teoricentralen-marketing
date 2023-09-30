'use client'

import React from 'react'
import { InlineWidget } from 'react-calendly'

export function Calendly() {
  return (
    <InlineWidget
      url="https://calendly.com/teoricentralen-portal/teoricentralen-utbildningsplattform"
      styles={{
        height: '1000px',
      }}
      pageSettings={{
        backgroundColor: '',
        primaryColor: '00a2ff',
        textColor: '4d5055',
      }}
    />
  )
}
