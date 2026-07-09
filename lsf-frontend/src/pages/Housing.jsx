import MainLayout from '../layouts/MainLayout'
import Filters from '../components/Filters'
import PropertyCard from '../components/PropertyCard'
import Map from '../components/Map'
import Loading from '../components/Loading'
import { useState, useEffect } from 'react'
// import { useProperties } from '../../hooks/useProperties' // décommente quand Supabase est prêt

export default function Housing() {
  const [loading, setLoading] = useState(true)
  const [properties, setProperties] = useState([])
  const [filters, setFilters] = useState({ country: 'France', city: '', type: '', budget: '' })

  // Données démo LSF (remplace par useProperties quand Supabase est branché)
  useEffect(() => {
    setTimeout(() => {
      setProperties([
        { id: 1, title: 'Studio meublé Paris 13 - Crous', city: 'Paris', country: 'France', price: 650, distance: 450, verified: true, type: 'studio', images: [] },
        { id: 2, title: 'Chambre colocation Lyon 7', city: 'Lyon', country: 'France', price: 420, distance: 300, verified: true, type: 'colocation', images: [] },
        { id: 3, title: 'T1 proche ULB', city: 'Bruxelles', country: 'Belgique', price: 550, distance: 600, verified: true, type: 'studio', images: [] },
        { id: 4, title: 'Appartement Madrid Centro', city: 'Madrid', country: 'Espagne', price: 480, distance: 800, verified: false, type: 'appartement', images: [] },
        { id: 5, title: 'Studio Casablanca Maarif', city: 'Casablanca', country: 'Maroc', price: 300, distance: 500, verified: true, type: 'studio', images: [] },
        { id: 6, title: 'Résidence étudiante Abidjan', city: 'Abidjan', country: "Côte d'Ivoire", price: 250, distance: 200, verified: true, type: 'residence', images: [] },
      ])
      setLoading(false)
    }, 800)
  }, [])

  // const { data: properties, loading } = useProperties(filters)

  const filtered = properties.filter(p => {
    if (filters.country && p.country !== filters.country) return false
    if (filters.city && !p.city.toLowerCase().includes(filters.city.toLowerCase())) return false
    if (filters.type && p.type !== filters.type) return false
    if (filters.budget && p.price > Number(filters.budget)) return false
    return true
  })

  return (
    <MainLayout>
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-navy">Trouve ton logement étudiant</h1>
          <p className="text-gray-600 mt-1">Vérifié par l'équipe LSF de Khady DIABATE</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Filtres LSF */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border mb-6">
          <div className="grid md:grid-cols-5 gap-3">
            <select 
              value={filters.country}
              onChange={e => setFilters({...filters, country: e.target.value})}
              className="border rounded-xl p-2.5"
            >
              <option>France</option>
              <option>Belgique</option>
              <option>Espagne</option>
              <option>Maroc</option>
              <option>Côte d'Ivoire</option>
            </select>
            <input 
              placeholder="Ville (Paris, Lyon...)"
              value={filters.city}
              onChange={e => setFilters({...filters, city: e.target.value})}
              className="border rounded-xl p-2.5"
            />
            <select 
              value={filters.type}
              onChange={e => setFilters({...filters, type: e.target.value})}
              className="border rounded-xl p-2.5"
            >
              <option value="">Type de logement</option>
              <option value="studio">Studio</option>
              <option value="colocation">Colocation</option>
              <option value="appartement">Appartement</option>
              <option value="residence">Résidence</option>
            </select>
            <input 
              type="number"
              placeholder="Budget max (€)"
              value={filters.budget}
              onChange={e => setFilters({...filters, budget: e.target.value})}
              className="border rounded-xl p-2.5"
            />
            <button className="bg-orange text-white rounded-xl font-semibold hover:bg-orange/90">
              Rechercher
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Liste */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-600">{filtered.length} logements trouvés</p>
              <select className="border rounded-lg p-2 text-sm">
                <option>Tri : Recommandés</option>
                <option>Prix croissant</option>
                <option>Distance université</option>
                <option>Vérifiés d'abord</option>
              </select>
            </div>

            {loading ? (
              <Loading />
            ) : (
              <div className="grid md:grid-cols-2 gap-4">
                {filtered.map(p => (
                  <PropertyCard key={p.id} p={p} />
                ))}
              </div>
            )}

            {!loading && filtered.length === 0 && (
              <div className="bg-white p-12 rounded-2xl text-center border">
                <p className="text-gray-600">Aucun logement ne correspond. Essaie Abidjan ou Casablanca.</p>
              </div>
            )}
          </div>

          {/* Carte */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <Map />
              <div className="mt-4 bg-orange/5 p-4 rounded-2xl border border-orange/20">
                <h3 className="font-bold text-sm mb-1">Besoin d'aide ?</h3>
                <p className="text-xs text-gray-600 mb-3">Khady peut se porter garante pour toi</p>
                <a href="https://wa.me/33600000000" className="text-xs bg-orange text-white px-3 py-1.5 rounded-lg inline-block">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}