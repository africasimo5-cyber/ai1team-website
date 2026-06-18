'use client'

import { useEffect } from 'react'

export default function TawkChat() {
  useEffect(() => {
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
    }

    if ('requestIdleCallback' in window) {
      requestIdleCallback(load, { timeout: 5000 })
    } else {
      setTimeout(load, 3000)
    }
  }, [])

  return null
}
