import MainLayout from '../../layouts/MainLayout'
import { Home, Euro, Users, FileText, Plus, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function OwnerDashboard() {
  const [activeTab, setActiveTab] = useState('properties')

  const stats = {
    properties: 3,
    occupancy: 100,
    monthlyIncome: 1650,
    students: 3
  }

  const properties = [
    { id: 1, title: 'Studio Paris 13', tenant: 'Aminata K.', country: 'Côte d\'Ivoire', rent: 650, status: 'occupé', paid: true, nextPayment: '05/07/2026' },
    { id: 2, title: 'Chambre Lyon 7', tenant: 'Moussa D.', country: 'Sénégal', rent: 420, status: 'occupé', paid: true, nextPayment: '05/07/2026' },
    { id: 3, title: 'T1 Bruxelles', tenant: 'Fatou S.', country: 'Mali', rent: 580, status: 'occupé', paid: false, nextPayment: '05/07/2026' },
  ]

  const payments = [
    { date: '05/06/2026', property: 'Studio Paris 13', amount: 650, status: 'payé', method: 'Virement LSF' },
    { date: '05/06/2026', property: 'Chambre Lyon 7', amount: 420, status: 'payé', method: 'Virement LSF' },
    { date: '05/06/2026', property: 'T1 Bruxelles', amount: 580, status: 'payé', method: 'Virement LSF' },
    { date: '05/05/2026', property: 'Studio Paris 13', amount: 650, status: 'payé', method: 'Virement LSF' },
  ]

  return (
    <MainLayout>
      <div className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold">Espace Propriétaire</h1>
              <p className="opacity-80 mt-1">Géré par LSF - Khady DIABATE</p>
            </div>
            <Link to="/proprietaire/ajouter" className="bg-orange px-4 py-2 rounded-xl font-semibold flex items-center gap-2 hover:bg-orange/90">
              <Plus size={18}/> Ajouter un logement
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-2xl border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Logements</p>
                <p className="text-2xl font-bold">{stats.properties}</p>
              </div>
              <Home className="text-orange" size={24}/>
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Taux occupation</p>
                <p className="text-2xl font-bold">{stats.occupancy}%</p>
              </div>
              <Users className="text-green-600" size={24}/>
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Revenus/mois</p>
                <p className="text-2xl font-bold">{stats.monthlyIncome}€</p>
              </div>
              <Euro className="text-navy" size={24}/>
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Étudiants</p>
                <p className="text-2xl font-bold">{stats.students}</p>
              </div>
              <FileText className="text-purple-600" size={24}/>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 border-b mb-6">
          {['properties', 'payments', 'documents'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-medium border-b-2 ${activeTab === tab ? 'border-orange text-orange' : 'border-transparent text-gray-600'}`}
            >
              {tab === 'properties' ? 'Mes logements' : tab === 'payments' ? 'Paiements' : 'Documents'}
            </button>
          ))}
        </div>

        {/* Properties */}
        {activeTab === 'properties' && (
          <div className="space-y-4">
            {properties.map(p => (
              <div key={p.id} className="bg-white rounded-2xl border p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-bold text-lg">{p.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${p.status === 'occupé' ? 'bg-green-100 text-green-700' : 'bg-gray-100'}`}>
                        {p.status}
                      </span>
                      {!p.paid && <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-700">Paiement en attente</span>}
                    </div>
                    <p className="text-sm text-gray-600">Locataire : {p.tenant} ({p.country})</p>
                    <p className="text-sm text-gray-600">Loyer : {p.rent}€ / mois • Prochain : {p.nextPayment}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="border px-4 py-2 rounded-xl text-sm flex items-center gap-1 hover:bg-gray-50">
                      <Eye size={16}/> Voir
                    </button>
                    <button className="bg-navy text-white px-4 py-2 rounded-xl text-sm">Contacter LSF</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Payments */}
        {activeTab === 'payments' && (
          <div className="bg-white rounded-2xl border overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 text-left text-sm">
                <tr>
                  <th className="p-4">Date</th>
                  <th className="p-4">Logement</th>
                  <th className="p-4">Montant</th>
                  <th className="p-4">Méthode</th>
                  <th className="p-4">Statut</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {payments.map((pay, i) => (
                  <tr key={i} className="border-t">
                    <td className="p-4">{pay.date}</td>
                    <td className="p-4">{pay.property}</td>
                    <td className="p-4 font-semibold">{pay.amount}€</td>
                    <td className="p-4">{pay.method}</td>
                    <td className="p-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">{pay.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Documents */}
        {activeTab === 'documents' && (
          <div className="grid md:grid-cols-2 gap-4">
            {['Contrat de gestion LSF', 'Attestation assurance PNO', 'Bail Aminata K.', 'Bail Moussa D.', 'Bail Fatou S.', 'Relevés fiscaux 2025'].map(doc => (
              <div key={doc} className="bg-white p-4 rounded-xl border flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <FileText className="text-orange" size={20}/>
                  <span className="font-medium">{doc}</span>
                </div>
                <button className="text-sm text-orange font-semibold">Télécharger</button>
              </div>
            ))}
          </div>
        )}

        {/* Garantie LSF */}
        <div className="mt-12 bg-green-50 border border-green-200 rounded-2xl p-6">
          <h3 className="font-bold text-lg mb-2">Garantie Loyer Impayé LSF</h3>
          <p className="text-sm text-gray-700">Tous vos logements sont couverts par la garantie Khady DIABATE. Paiement garanti le 5 de chaque mois, même si l'étudiant a un retard. Zéro vacance locative grâce au réseau LM Global Education (12 000 étudiants/an).</p>
        </div>
      </div>
    </MainLayout>
  )
}