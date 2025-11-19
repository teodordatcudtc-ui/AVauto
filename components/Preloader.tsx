'use client'

import { useEffect, useState } from 'react'

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-dark z-[9999] flex items-center justify-center animate-fade-in">
      <div className="flex flex-col items-center space-y-4">
        <div className="spinner"></div>
        <p className="text-secondary text-sm">A.V Auto Service</p>
      </div>
    </div>
  )
}

