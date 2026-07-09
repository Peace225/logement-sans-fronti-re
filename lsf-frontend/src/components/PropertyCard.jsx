export default function PropertyCard({ p }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
      {/* Remplacement de la div grise par une balise img */}
      <div className="h-48 overflow-hidden">
        {p.image ? (
          <img 
            src={p.image} 
            alt={p.title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 grid place-items-center text-gray-500">
            Image indisponible
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold">{p.title}</h3>
          {p.verified && (
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full whitespace-nowrap">
              Vérifié LSF
            </span>
          )}
        </div>
        
        {/* Affichage conditionnel de la distance uniquement si elle existe */}
        <p className="text-sm text-gray-600 mt-1">
          {p.city}, {p.country} {p.distance ? `• ${p.distance}m université` : ''}
        </p>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-xl font-bold">
            {p.price}€<span className="text-sm font-normal text-gray-500">/mois</span>
          </span>
          <button className="px-4 py-2 bg-[#0A192F] text-white rounded-lg text-sm font-medium hover:bg-opacity-90 transition">
            Réserver
          </button>
        </div>
      </div>
    </div>
  );
}