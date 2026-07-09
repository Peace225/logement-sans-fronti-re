import MainLayout from '../layouts/MainLayout'
import { Link } from 'react-router-dom'
import { MapPin, Users, Home, Star } from 'lucide-react'

export default function Universities() {
  const universities = [
    {
      id: 1,
      name: 'Groupe EDH',
      city: 'Paris',
      country: 'France',
      logo: 'EDH',
      students: 3200,
      housing: 45,
      programs: ['Communication', 'Design', 'Digital'],
      partnership: 'Officiel LM Global',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Université Paris 1 Panthéon-Sorbonne',
      city: 'Paris',
      country: 'France',
      logo: 'Sorbonne',
      students: 42000,
      housing: 120,
      programs: ['Droit', 'Économie', 'Histoire'],
      partnership: 'Logements vérifiés',
      rating: 4.9
    },
    {
      id: 3,
      name: 'Université de Lille',
      city: 'Lille',
      country: 'France',
      logo: 'Lille',
      students: 74000,
      housing: 89,
      programs: ['Médecine', 'Ingénierie', 'Lettres'],
      partnership: 'Partenaire LSF',
      rating: 4.7
    },
    {
      id: 4,
      name: 'UCLouvain',
      city: 'Louvain-la-Neuve',
      country: 'Belgique',
      logo: 'UCL',
      students: 31000,
      housing: 67,
      programs: ['Sciences', 'Ingénieur civil', 'Économie'],
      partnership: 'Officiel LM Global',
      rating: 4.8
    },
    {
      id: 5,
      name: 'Université Libre de Bruxelles',
      city: 'Bruxelles',
      country: 'Belgique',
      logo: 'ULB',
      students: 24000,
      housing: 54,
      programs: ['Sciences Po', 'Médecine', 'Droit'],
      partnership: 'Logements vérifiés',
      rating: 4.6
    },
    {
      id: 6,
      name: 'Universidad Complutense Madrid',
      city: 'Madrid',
      country: 'Espagne',
      logo: 'UCM',
      students: 86000,
      housing: 78,
      programs: ['Espagnol', 'Business', 'Tourisme'],
      partnership: 'Partenaire LSF',
      rating: 4.7
    },
  ]

  return (
    <MainLayout>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold">Universités partenaires</h1>
          <p className="mt-3 text-lg opacity-90 max-w-2xl">LM Global Education accompagne les étudiants vers ces établissements. LSF garantit le logement à proximité.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-lg border p-6 grid grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold text-orange">45+</p>
            <p className="text-sm text-gray-600">Universités</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-orange">12 000</p>
            <p className="text-sm text-gray-600">Étudiants placés</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-orange">98%</p>
           <p className="text-sm text-gray-600">Logés {'<'} 1km</p>
          </div>
        </div>
      </section>

      {/* Liste */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {universities.map(u => (
            <div key={u.id} className="bg-white rounded-2xl border shadow-sm hover:shadow-md transition p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-navy text-white rounded-xl grid place-items-center font-bold">
                  {u.logo.slice(0,3)}
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${u.partnership.includes('Officiel') ? 'bg-orange/10 text-orange' : 'bg-gray-100 text-gray-700'}`}>
                  {u.partnership}
                </span>
              </div>

              <h3 className="font-bold text-xl text-navy">{u.name}</h3>
              <p className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                <MapPin size={14}/> {u.city}, {u.country}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-2">
                <Star size={14} className="text-yellow-500 fill-yellow-500"/>
                <span className="text-sm font-medium">{u.rating}</span>
                <span className="text-xs text-gray-500">satisfaction logement</span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 my-4 py-4 border-y">
                <div>
                  <div className="flex items-center gap-1 text-gray-600 text-xs"><Users size={14}/> Étudiants</div>
                  <p className="font-semibold">{u.students.toLocaleString()}</p>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-gray-600 text-xs"><Home size={14}/> Logements</div>
                  <p className="font-semibold">{u.housing} proches</p>
                </div>
              </div>

              {/* Programmes */}
              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-1.5">Filières populaires :</p>
                <div className="flex flex-wrap gap-1.5">
                  {u.programs.map(p => (
                    <span key={p} className="text-xs bg-gray-100 px-2 py-1 rounded-full">{p}</span>
                  ))}
                </div>
              </div>

              <Link 
                to={`/logements?university=${encodeURIComponent(u.name)}`}
                className="block w-full text-center bg-orange text-white py-2.5 rounded-xl font-semibold hover:bg-orange/90 mt-2"
              >
                Voir logements à proximité
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Khady */}
      <section className="bg-orange/5 py-16 border-y border-orange/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy">Ton université n'est pas listée ?</h2>
          <p className="text-gray-700 mt-3">Khady DIABATE et LM Global Education travaillent avec 45+ établissements. Nous trouvons un logement même pour les non-partenaires.</p>
          <div className="mt-6 flex gap-3 justify-center">
            <Link to="/contact" className="bg-navy text-white px-6 py-3 rounded-xl font-semibold">Contacter Khady</Link>
            <Link to="/logements" className="border border-navy text-navy px-6 py-3 rounded-xl font-semibold">Chercher par ville</Link>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}