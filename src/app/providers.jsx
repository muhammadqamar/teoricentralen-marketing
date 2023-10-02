'use client'

import { createContext, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

import { appWithTranslation } from 'next-i18next'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

const AppContext = createContext({})

function Providers({ children }) {
  let pathname = usePathname()
  let previousPathname = usePrevious(pathname)

  return (
    <AppContext.Provider value={{ previousPathname }}>
      {children}
    </AppContext.Provider>
  )
}
export default appWithTranslation(Providers)
