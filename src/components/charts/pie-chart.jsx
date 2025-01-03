'use client'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function PieChart() {
  const data = {
    labels: ['Series A', 'Series B', 'Series C'],
    datasets: [
      {
        data: [30, 40, 30],
        backgroundColor: [
          'rgb(45, 212, 191)',
          'rgb(59, 130, 246)',
          'rgb(168, 85, 247)',
        ],
      },
    ],
  }

  return (
    <div className="bg-white rounded-lg shadow p-4 w-80">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Problem Distribution</h3>
      <Pie data={data} />
    </div>
  )
}

