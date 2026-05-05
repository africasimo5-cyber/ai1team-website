'use client'

import { useEffect } from 'react'

export default function TawkChat() {
  useEffect(() => {
    var Tawk_API = Tawk_API || {}
    var Tawk_LoadStart = new Date()
    var s1 = document.createElement("script")
    var s0 = document.getElementsByTagName("script")[0]
    s1.async = true
    s1.src = 'https://embed.tawk.to/69f9ec5a79f2b21c34522b9b/1jns46gcl'
    s1.charset = 'UTF-8'
    s1.setAttribute('crossorigin', '*')
    s0.parentNode.insertBefore(s1, s0)
  }, [])

  return null
}
