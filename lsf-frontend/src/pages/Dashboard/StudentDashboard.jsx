import DashboardLayout from '../../layouts/DashboardLayout'
import { Home, FileText, CreditCard, MessageCircle, CheckCircle, Clock, AlertCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function StudentDashboard() {
  const student = {
    name: 'Aminata K.',
    country: "Côte d'Ivoire",
    university: 'Université Paris 1',
    avatar: 'AK'
  }

  const reservation = {
    property: 'Studio Paris 13 - Tolbiac',
    address: '45 Rue Tolbiac, 75013',
    price: 650,
    status: 'confirmée',
    moveIn: '2026-09-01',
    garant: 'Khady DIABATE'
  }

  const installationProgress = 62 // %

  const tasks = [
    { id: 1, title: 'Payer la caution', status: 'done', icon: CreditCard },
    { id: 2, title: 'Signer le bail', status: 'done', icon: FileText },
    { id: 3, title: 'Souscrire assurance', status: 'current', icon: FileText },
    { id: 4, title: 'Dossier CAF', status: 'upcoming', icon: FileText },
    { id: 5, title: 'RDV banque', status: 'upcoming', icon: CreditCard },
  ]

  const documents = [
    { name: 'Bail signé', status: 'validé' },
    { name: 'Attestation garant LSF', status: 'validé' },
    { name: 'Assurance habitation', status: 'en attente' },
    { name: 'Justificatif domicile', status: 'à venir' },
  ]

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-navy text-white rounded-full grid place-items-center text-xl font-bold">
              {student.avatar}
            </div>
            <div>
              <h1 className="text-2xl font-bold">Bonjour, {student.name}</h1>
              <p className="text-gray-600">{student.university} • {student.country}</p>
            </div>
          </div>
          <a href="https://wa.me/33600000000" className="hidden md:flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-xl font-medium">
            <MessageCircle size={18}/> Contacter Khady
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Colonne principale */}
          <div className="lg:col-span-2 space-y-6">
            {/* Ma réservation */}
            <div className="bg-white rounded-2xl border p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold flex items-center gap-2"><Home size={20} className="text-orange"/> Ma réservation</h2>
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">Confirmée</span>
              </div>
              
              <div className="flex gap-4">
                <div className="w-24 h-24 bg-gray-200 rounded-xl shrink-0"></div>
                <div className="flex-1">
                  <h3 className="font-semibold">{reservation.property}</h3>
                  <p className="text-sm text-gray-600">{reservation.address}</p>
                  <div className="flex gap-4 mt-2 text-sm">
                    <span><strong>{reservation.price}€</strong>/mois</span>
                    <span>Emménagement : {reservation.moveIn}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Garant : {reservation.garant}</p>
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <Link to={`/logement/1`} className="text-sm bg-navy text-white px-4 py-2 rounded-lg">Voir le logement</Link>
                <button className="text-sm border px-4 py-2 rounded-lg">Télécharger bail</button>
              </div>
            </div>

            {/* Installation */}
            <div className="bg-white rounded-2xl border p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">Installation</h2>
                <span className="text-sm font-medium text-orange">{installationProgress}% complété</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                <div className="bg-orange h-2 rounded-full" style={{width: `${installationProgress}%`}}></div>
              </div>

              <div className="space-y-3">
                {tasks.map(task => {
                  const Icon = task.icon
                  return (
                    <div key={task.id} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50">
                      <div className={`w-8 h-8 rounded-full grid place-items-center ${
                        task.status === 'done' ? 'bg-green-100' : task.status === 'current' ? 'bg-orange/10' : 'bg-gray-100'
                      }`}>
                        {task.status === 'done' ? <CheckCircle size={16} className="text-green-600"/> : 
                         task.status === 'current' ? <Clock size={16} className="text-orange"/> :
                         <Icon size={16} className="text-gray-400"/>}
                      </div>
                      <span className={`flex-1 ${task.status === 'done' ? 'line-through text-gray-500' : ''}`}>{task.title}</span>
                      {task.status === 'current' && <button className="text-xs bg-orange text-white px-3 py-1 rounded-lg">Faire</button>}
                    </div>
                  )
                })}
              </div>

              <Link to="/installation" className="inline-block mt-4 text-sm text-orange font-medium">Voir le détail →</Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Documents */}
            <div className="bg-white rounded-2xl border p-6">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2"><FileText size={20} className="text-orange"/> Mes documents</h2>
              <div className="space-y-2.5">
                {documents.map(doc => (
                  <div key={doc.name} className="flex items-center justify-between text-sm">
                    <span>{doc.name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      doc.status === 'validé' ? 'bg-green-100 text-green-700' :
                      doc.status === 'en attente' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-100 text-gray-600'
                    }`}>{doc.status}</span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-sm border border-dashed rounded-xl py-2 hover:bg-gray-50">+ Ajouter un document</button>
            </div>

            {/* Paiements */}
            <div className="bg-white rounded-2xl border p-6">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2"><CreditCard size={20} className="text-orange"/> Paiements</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Caution</span>
                  <span className="font-medium text-green-600">Payé</span>
                </div>
                <div className="flex justify-between">
                  <span>1er loyer</span>
                  <span className="font-medium">650€ - dû le 01/09</span>
                </div>
                <div className="flex justify-between">
                  <span>Pack Confort</span>
                  <span className="font-medium text-green-600">Payé</span>
                </div>
              </div>
            </div>

            {/* Alerte */}
            <div className="bg-orange/5 border border-orange/20 rounded-2xl p-5">
              <div className="flex gap-2">
                <AlertCircle size={20} className="text-orange shrink-0 mt-0.5"/>
                <div>
                  <h3 className="font-semibold text-sm">Action requise</h3>
                  <p className="text-xs text-gray-700 mt-1">Finalise ton assurance habitation avant le 25 août pour récupérer les clés.</p>
                  <button className="text-xs bg-orange text-white px-3 py-1.5 rounded-lg mt-2">Souscrire maintenant</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}