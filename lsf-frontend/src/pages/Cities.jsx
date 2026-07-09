import MainLayout from '../layouts/MainLayout'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { Search, MapPin, GraduationCap } from 'lucide-react'

export default function Cities() {
  const { country } = useParams()
  const [search, setSearch] = useState('')

  const allCities = {
    france: [
      { name: 'Paris', properties: 1240, universities: 18, image: 'paris', avgPrice: 680 },
      { name: 'Lyon', properties: 560, universities: 8, image: 'lyon', avgPrice: 520 },
      { name: 'Lille', properties: 420, universities: 6, image: 'lille', avgPrice: 450 },
      { name: 'Toulouse', properties: 380, universities: 5, image: 'toulouse', avgPrice: 480 },
      { name: 'Marseille', properties: 290, universities: 4, image: 'marseille', avgPrice: 460 },
      { name: 'Bordeaux', properties: 310, universities: 4, image: 'bordeaux', avgPrice: 510 },
    ],
    belgique: [
      { name: 'Bruxelles', properties: 420, universities: 7, image: 'bruxelles', avgPrice: 550 },
      { name: 'Louvain-la-Neuve', properties: 180, universities: 1, image: 'louvain', avgPrice: 480 },
      { name: 'Liège', properties: 150, universities: 2, image: 'liege', avgPrice: 420 },
      { name: 'Gand', properties: 140, universities: 2, image: 'gand', avgPrice: 460 },
    ],
    espagne: [
      { name: 'Madrid', properties: 520, universities: 9, image: 'madrid', avgPrice: 500 },
      { name: 'Barcelone', properties: 480, universities: 8, image: 'barcelone', avgPrice: 540 },
      { name: 'Valence', properties: 200, universities: 3, image: 'valence', avgPrice: 420 },
    ],
    maroc: [
      { name: 'Casablanca', properties: 320, universities: 5, image: 'casa', avgPrice: 300 },
      { name: 'Rabat', properties: 180, universities: 3, image: 'rabat', avgPrice: 280 },
      { name: 'Marrakech', properties: 150, universities: 2, image: 'marrakech', avgPrice: 260 },
    ],
    'cote-divoire': [
      { name: 'Abidjan', properties: 280, universities: 4, image: 'abidjan', avgPrice: 250 },
      { name: 'Yamoussoukro', properties: 40, universities: 1, image: 'yakro', avgPrice: 180 },
    ]
  }

  const countryName = country ? country.charAt(0).toUpperCase() + country.slice(1) : 'France'
  const cities = allCities[country?.toLowerCase()] || allCities.france

  const filtered = cities.filter(c => 
    c.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <MainLayout>
      {/* Header */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-navy">Villes étudiantes - {countryName}</h1>
              <p className="text-gray-600 mt-1">{cities.length} villes avec logements vérifiés LSF</p>
            </div>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18}/>
              <input 
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Rechercher une ville..."
                className="w-full pl-10 pr-4 py-2.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pays selector */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {['France', 'Belgique', 'Espagne', 'Maroc', "Côte d'Ivoire"].map(p => (
            <Link 
              key={p}
              to={`/villes/${p.toLowerCase().replace(" ", "-").replace("'", "")}`}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm border ${p.toLowerCase() === country?.toLowerCase() || (!country && p==='France') ? 'bg-navy text-white border-navy' : 'hover:bg-gray-100'}`}
            >
              {p}
            </Link>
          ))}
        </div>
      </section>

      {/* Grille villes */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(city => (
            <Link 
              key={city.name}
              to={`/logements?city=${encodeURIComponent(city.name)}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-lg transition"
            >
              <div className="h-48 bg-gradient-to-br from-navy to-orange/80 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">{city.name}</h3>
                  <p className="text-sm opacity-90">À partir de {city.avgPrice}€/mois</p>
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1 text-gray-600">
                      <MapPin size={16} className="text-orange"/> {city.properties} logements
                    </span>
                    <span className="flex items-center gap-1 text-gray-600">
                      <GraduationCap size={16} className="text-orange"/> {city.universities} univ.
                    </span>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xs text-green-700 bg-green-50 px-2 py-1 rounded-full">Vérifié LSF</span>
                  <span className="text-orange font-semibold text-sm group-hover:translate-x-1 transition">Voir →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500">Aucune ville trouvée pour "{search}"</p>
          </div>
        )}
      </section>

      {/* Info LSF */}
      <section className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold">Toutes nos villes incluent la garantie Khady</h2>
          <p className="opacity-80 mt-2 max-w-2xl mx-auto">Pas de garant français ? Pas de problème. LSF se porte garante dans chaque ville listée.</p>
        </div>
      </section>
    </MainLayout>
  )
}