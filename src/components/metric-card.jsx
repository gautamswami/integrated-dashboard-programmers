
export default function MetricCard({ title, value }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
      <p className="text-3xl font-bold text-indigo-600">{value}</p>
    </div>
  )
}

