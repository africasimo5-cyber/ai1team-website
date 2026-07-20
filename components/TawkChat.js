'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export default function TawkChat() {
  const pathname = usePathname()
  const loadedRef = useRef(false)

  useEffect(() => {
    if (pathname === '/bizos') {
      if (window.Tawk_API && typeof window.Tawk_API.hideWidget === 'function') {
        window.Tawk_API.hideWidget()
      }
      return
    }

    if (loadedRef.current) return

    const load = () => {
      window.Tawk_API = window.Tawk_API || {}
      window.Tawk_LoadStart = new Date()
      const s1 = document.createElement("script")
      const s0 = document.getElementsByTagName("script")[0]
      s1.async = true
      s1.src = 'https://embed.tawk.to/69f9ec5a79f2b21c34522b9b/1jns46gcl'
      s1.charset = 'UTF-8'
      s1.setAttribute('crossorigin', '*')
      s0.parentNode.insertBefore(s1, s0)
      loadedRef.current = true
    }

    let idleId, timeoutId
    if ('requestIdleCallback' in window) {
      idleId = requestIdleCallback(load, { timeout: 5000 })
    } else {
      timeoutId = setTimeout(load, 3000)
    }

    return () => {
      if (idleId && 'cancelIdleCallback' in window) cancelIdleCallback(idleId)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [pathname])

  return null
}
