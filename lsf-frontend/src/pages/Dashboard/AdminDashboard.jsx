import { useState } from 'react'
import { Users, Home, Euro, AlertTriangle, CheckCircle, Clock, Search } from 'lucide-react'

export default function AdminDashboard() {
  const [search, setSearch] = useState('')

  const stats = {
    students: 1247,
    properties: 342,
    occupancy: 94,
    monthlyRevenue: 42800
  }

  const pending = [
    { id: 1, type: 'Vérification logement', item: 'T2 Lyon 7 - Propriétaire M. Durand', priority: 'high', time: '2h' },
    { id: 2, type: 'Dossier étudiant', item: 'Aminata K. - Côte d\'Ivoire - Sorbonne', priority: 'medium', time: '5h' },
    { id: 3, type: 'Paiement en retard', item: 'Fatou S. - Bruxelles - 580€', priority: 'high', time: '1j' },
    { id: 4, type: 'Installation', item: 'Moussa D. - arrivée CDG demain 14h', priority: 'medium', time: '1j' },
  ]

  const recentStudents = [
    { name: 'Aminata K.', country: 'CI', university: 'Sorbonne', city: 'Paris', status: 'logé', pack: 'Confort' },
    { name: 'Moussa D.', country: 'SN', university: 'Lyon 2', city: 'Lyon', status: 'en cours', pack: 'Premium' },
    { name: 'Fatou S.', country: 'ML', university: 'ULB', city: 'Bruxelles', status: 'logé', pack: 'Essentiel' },
    { name: 'Ibrahim T.', country: 'BF', university: 'UCM', city: 'Madrid', status: 'recherche', pack: 'Confort' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Admin LSF</h1>
            <p className="text-sm opacity-80">Khady DIABATE - Dashboard</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16}/>
              <input 
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Rechercher étudiant, logement..."
                className="pl-9 pr-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/60 text-sm w-64 focus:outline-none focus:bg-white/20"
              />
            </div>
            <div className="w-9 h-9 bg-orange rounded-full grid place-items-center font-bold">K</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-2xl border">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600">Étudiants actifs</p>
                <p className="text-3xl font-bold mt-1">{stats.students}</p>
                <p className="text-xs text-green-600 mt-1">+24 cette semaine</p>
              </div>
              <Users className="text-navy" size={28}/>
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl border">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600">Logements</p>
                <p className="text-3xl font-bold mt-1">{stats.properties}</p>
                <p className="text-xs text-gray-500 mt-1">{stats.occupancy}% occupés</p>
              </div>
              <Home className="text-orange" size={28}/>
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl border">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600">Revenus mensuels</p>
                <p className="text-3xl font-bold mt-1">{(stats.monthlyRevenue/1000).toFixed(1)}k€</p>
                <p className="text-xs text-green-600 mt-1">+12% vs mois dernier</p>
              </div>
              <Euro className="text-green-600" size={28}/>
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl border">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600">Alertes</p>
                <p className="text-3xl font-bold mt-1">4</p>
                <p className="text-xs text-red-600 mt-1">2 urgentes</p>
              </div>
              <AlertTriangle className="text-red-500" size={28}/>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Tâches prioritaires */}
          <div className="lg:col-span-2 bg-white rounded-2xl border p-6">
            <h2 className="font-bold text-lg mb-4">Tâches prioritaires</h2>
            <div className="space-y-3">
              {pending.map(task => (
                <div key={task.id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 border">
                  <div className={`w-2 h-2 rounded-full ${task.priority === 'high' ? 'bg-red-500' : 'bg-yellow-500'}`}></div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{task.type}</p>
                    <p className="text-xs text-gray-600">{task.item}</p>
                  </div>
                  <span className="text-xs text-gray-500">{task.time}</span>
                  <button className="text-xs bg-navy text-white px-3 py-1.5 rounded-lg">Traiter</button>
                </div>
              ))}
            </div>
          </div>

          {/* Actions rapides */}
          <div className="bg-white rounded-2xl border p-6">
            <h2 className="font-bold text-lg mb-4">Actions rapides</h2>
            <div className="space-y-2">
              <button className="w-full text-left p-3 rounded-xl hover:bg-gray-50 border text-sm">+ Ajouter logement</button>
              <button className="w-full text-left p-3 rounded-xl hover:bg-gray-50 border text-sm">+ Nouvel étudiant</button>
              <button className="w-full text-left p-3 rounded-xl hover:bg-gray-50 border text-sm">Vérifier paiement</button>
              <button className="w-full text-left p-3 rounded-xl hover:bg-gray-50 border text-sm">Envoyer relance</button>
            </div>

            <div className="mt-6 pt-6 border-t">
              <h3 className="font-semibold text-sm mb-2">Raccourcis Khady</h3>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between"><span>WhatsApp actifs</span><span className="font-medium">47</span></div>
                <div className="flex justify-between"><span>Arrivées cette semaine</span><span className="font-medium">12</span></div>
                <div className="flex justify-between"><span>Garanties actives</span><span className="font-medium">1,247</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Étudiants récents */}
        <div className="mt-6 bg-white rounded-2xl border overflow-hidden">
          <div className="p-6 border-b flex justify-between items-center">
            <h2 className="font-bold text-lg">Étudiants récents</h2>
            <button className="text-sm text-orange font-medium">Voir tout</button>
          </div>
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr className="text-left">
                <th className="p-4 font-medium">Étudiant</th>
                <th className="p-4 font-medium">Pays</th>
                <th className="p-4 font-medium">Université</th>
                <th className="p-4 font-medium">Ville</th>
                <th className="p-4 font-medium">Pack</th>
                <th className="p-4 font-medium">Statut</th>
              </tr>
            </thead>
            <tbody>
              {recentStudents.map((s, i) => (
                <tr key={i} className="border-t hover:bg-gray-50">
                  <td className="p-4 font-medium">{s.name}</td>
                  <td className="p-4">{s.country}</td>
                  <td className="p-4">{s.university}</td>
                  <td className="p-4">{s.city}</td>
                  <td className="p-4">{s.pack}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      s.status === 'logé' ? 'bg-green-100 text-green-700' :
                      s.status === 'en cours' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {s.status === 'logé' ? <CheckCircle size={12} className="inline mr-1"/> : s.status === 'en cours' ? <Clock size={12} className="inline mr-1"/> : null}
                      {s.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}