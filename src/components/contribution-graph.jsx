'use client'

import { useEffect, useRef } from 'react'

export default function ContributionGraph() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const ctx = canvasRef.current.getContext('2d')
    if (!ctx) return

    const drawCell = (x, y, intensity) => {
      ctx.fillStyle = `rgba(79, 70, 229, ${intensity})`
      ctx.fillRect(x * 20 + 2, y * 20 + 2, 16, 16)
    }

    // Sample data - replace with actual contribution data
    const days = 52 * 7
    const rows = 7
    for (let i = 0; i < days; i++) {
      const x = Math.floor(i / rows)
      const y = i % rows
      const intensity = Math.random() * 0.8 + 0.1
      drawCell(x, y, intensity)
    }
  }, [])

  return (
    <div className="bg-white rounded-lg shadow p-4 mt-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Contribution Graph</h3>
      <canvas
        ref={canvasRef}
        width={1040}
        height={140}
        className="w-full"
      />
    </div>
  )
}

