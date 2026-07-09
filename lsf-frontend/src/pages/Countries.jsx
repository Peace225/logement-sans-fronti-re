import MainLayout from '../../layouts/MainLayout'
import { Link } from 'react-router-dom'
import { MapPin, Users, Home } from 'lucide-react'

export default function Countries() {
  const countries = [
    {
      code: 'FR',
      name: 'France',
      flag: '🇫🇷',
      cities: 24,
      properties: 3400,
      students: 7200,
      description: 'Paris, Lyon, Lille, Toulouse, Bordeaux. Garant Khady disponible.',
      popularCities: ['Paris', 'Lyon', 'Lille', 'Marseille'],
      color: 'from-blue-600 to-red-500'
    },
    {
      code: 'BE',
      name: 'Belgique',
      flag: '🇧🇪',
      cities: 8,
      properties: 890,
      students: 1500,
      description: 'Bruxelles, Louvain, Liège. Idéal pour étudiants francophones.',
      popularCities: ['Bruxelles', 'Louvain-la-Neuve', 'Liège', 'Gand'],
      color: 'from-black to-yellow-400'
    },
    {
      code: 'ES',
      name: 'Espagne',
      flag: '🇪🇸',
      cities: 12,
      properties: 1200,
      students: 2100,
      description: 'Madrid, Barcelone, Valence. Logements vérifiés près des campus.',
      popularCities: ['Madrid', 'Barcelone', 'Valence', 'Séville'],
      color: 'from-red-600 to-yellow-400'
    },
    {
      code: 'MA',
      name: 'Maroc',
      flag: '🇲🇦',
      cities: 6,
      properties: 650,
      students: 900,
      description: 'Casablanca, Rabat, Marrakech. Hub Afrique-Europe.',
      popularCities: ['Casablanca', 'Rabat', 'Marrakech'],
      color: 'from-red-700 to-green-600'
    },
    {
      code: 'CI',
      name: "Côte d'Ivoire",
      flag: '🇨🇮',
      cities: 3,
      properties: 320,
      students: 400,
      description: 'Abidjan. Base LSF Afrique de l’Ouest.',
      popularCities: ['Abidjan', 'Yamoussoukro'],
      color: 'from-orange-500 to-green-600'
    },
  ]

  return (
    <MainLayout>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold">5 pays, une seule promesse</h1>
          <p className="mt-3 text-lg opacity-90 max-w-2xl">Logement vérifié et garant inclus partout où LM Global Education accompagne les étudiants.</p>
        </div>
      </section>

      {/* Grille pays */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map(country => (
            <Link 
              key={country.code}
              to={`/pays/${country.code.toLowerCase()}`}
              className="group bg-white rounded-2xl shadow-sm border overflow-hidden hover:shadow-xl transition-all"
            >
              {/* Header avec drapeau */}
              <div className={`h-32 bg-gradient-to-r ${country.color} relative`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute bottom-4 left-6">
                  <span className="text-5xl">{country.flag}</span>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-navy group-hover:text-orange transition">{country.name}</h2>
                <p className="text-gray-600 text-sm mt-1 mb-4">{country.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 py-4 border-y">
                  <div className="text-center">
                    <Home size={18} className="mx-auto text-orange mb-1"/>
                    <p className="font-bold">{country.properties}</p>
                    <p className="text-xs text-gray-500">logements</p>
                  </div>
                  <div className="text-center">
                    <MapPin size={18} className="mx-auto text-orange mb-1"/>
                    <p className="font-bold">{country.cities}</p>
                    <p className="text-xs text-gray-500">villes</p>
                  </div>
                  <div className="text-center">
                    <Users size={18} className="mx-auto text-orange mb-1"/>
                    <p className="font-bold">{country.students}</p>
                    <p className="text-xs text-gray-500">étudiants</p>
                  </div>
                </div>

                {/* Villes populaires */}
                <div className="mt-4">
                  <p className="text-xs text-gray-500 mb-2">Villes populaires :</p>
                  <div className="flex flex-wrap gap-1.5">
                    {country.popularCities.map(city => (
                      <span key={city} className="text-xs bg-gray-100 px-2 py-1 rounded-full">{city}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy">Ton pays n'est pas listé ?</h2>
          <p className="text-gray-600 mt-2">Khady et LM Global Education ouvrent de nouvelles destinations chaque semestre.</p>
          <Link to="/contact" className="inline-block mt-6 bg-orange text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange/90">
            Proposer une destination
          </Link>
        </div>
      </section>
    </MainLayout>
  )
}