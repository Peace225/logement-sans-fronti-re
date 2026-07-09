export default function UniversityCard({u}) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md text-center">
      <div className="w-12 h-12 mx-auto bg-gray-100 rounded-full grid place-items-center mb-3">{u?.logo || '🎓'}</div>
      <h3 className="font-semibold">{u?.name || 'Groupe EDH'}</h3>
      <p className="text-sm text-gray-600">{u?.city || 'Paris'}, {u?.country || 'France'}</p>
    </div>
  )
}