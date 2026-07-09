import MainLayout from '../layouts/MainLayout'
import { CheckCircle, Circle, Plane, Home, CreditCard, FileText, Wifi, MapPin } from 'lucide-react'

export default function Installation() {
  const steps = [
    {
      id: 1,
      title: 'Confirmation & paiement',
      desc: 'Tu choisis ton pack (199€, 399€ ou 699€) et ton logement est bloqué.',
      icon: CheckCircle,
      status: 'done',
      time: 'Jour 0'
    },
    {
      id: 2,
      title: 'Accueil aéroport',
      desc: 'Notre équipe t’attend à CDG, Orly, Bruxelles ou Madrid avec une pancarte LSF.',
      icon: Plane,
      status: 'done',
      time: 'Jour J'
    },
    {
      id: 3,
      title: 'Remise des clés',
      desc: 'État des lieux avec vidéo LSF. Vérification conformité photos.',
      icon: Home,
      status: 'current',
      time: 'Jour J'
    },
    {
      id: 4,
      title: 'Assurance habitation',
      desc: 'Contrat signé en 10 min. Attestation envoyée au propriétaire.',
      icon: FileText,
      status: 'upcoming',
      time: 'J+1'
    },
    {
      id: 5,
      title: 'Ouverture compte bancaire',
      desc: 'RDV garanti sous 72h. Khady fournit attestation de domicile.',
      icon: CreditCard,
      status: 'upcoming',
      time: 'J+2'
    },
    {
      id: 6,
      title: 'Dossier CAF',
      desc: 'On remplit tout. Tu touches 150-200€/mois dès le mois suivant.',
      icon: FileText,
      status: 'upcoming',
      time: 'J+3'
    },
    {
      id: 7,
      title: 'Carte SIM & transport',
      desc: 'Forfait étudiant + carte Navigo/TEC. Tu es connecté.',
      icon: Wifi,
      status: 'upcoming',
      time: 'J+3'
    },
    {
      id: 8,
      title: 'Installation terminée',
      desc: 'Suivi WhatsApp 3 mois inclus. Bienvenue chez toi !',
      icon: MapPin,
      status: 'upcoming',
      time: 'J+7'
    },
  ]

  return (
    <MainLayout>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Ton installation pas à pas</h1>
          <p className="mt-3 text-lg opacity-90">Suivi en temps réel par l'équipe de Khady DIABATE</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="relative">
          {/* Ligne verticale */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>

          <div className="space-y-8">
            {steps.map((step, idx) => {
              const Icon = step.icon
              const isDone = step.status === 'done'
              const isCurrent = step.status === 'current'
              
              return (
                <div key={step.id} className="relative flex gap-6">
                  {/* Icône */}
                  <div className={`relative z-10 w-12 h-12 rounded-full grid place-items-center shrink-0 ${
                    isDone ? 'bg-green-100' : isCurrent ? 'bg-orange' : 'bg-gray-100'
                  }`}>
                    {isDone ? (
                      <CheckCircle className="text-green-600" size={24}/>
                    ) : isCurrent ? (
                      <Icon className="text-white" size={24}/>
                    ) : (
                      <Circle className="text-gray-400" size={24}/>
                    )}
                  </div>

                  {/* Contenu */}
                  <div className={`flex-1 pb-8 ${idx !== steps.length -1 ? 'border-b md:border-0' : ''}`}>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className={`text-xl font-bold ${isCurrent ? 'text-orange' : 'text-navy'}`}>
                            Étape {step.id} : {step.title}
                          </h3>
                          {isCurrent && (
                            <span className="bg-orange/10 text-orange text-xs px-2 py-1 rounded-full font-medium">En cours</span>
                          )}
                          {isDone && (
                            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">Terminé</span>
                          )}
                        </div>
                        <p className="text-gray-600 mt-1">{step.desc}</p>
                      </div>
                      <span className="text-sm text-gray-500 font-medium whitespace-nowrap">{step.time}</span>
                    </div>

                    {/* Contenu spécial étape en cours */}
                    {isCurrent && (
                      <div className="mt-4 bg-orange/5 border border-orange/20 rounded-xl p-4">
                        <p className="text-sm"><strong>Prochaine action :</strong> Rendez-vous aujourd'hui à 14h au 45 Rue Tolbiac. Amène ta pièce d'identité et ton attestation LSF.</p>
                        <button className="mt-3 text-sm bg-orange text-white px-4 py-2 rounded-lg font-medium">Voir sur Maps</button>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl border p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-lg">Une question sur ton installation ?</h3>
              <p className="text-gray-600 text-sm">Ton conseiller dédié : Khady DIABATE</p>
            </div>
            <div className="flex gap-3">
              <a href="https://wa.me/33600000000" className="bg-green-500 text-white px-5 py-2.5 rounded-xl font-semibold">WhatsApp</a>
              <a href="tel:+33600000000" className="border px-5 py-2.5 rounded-xl font-semibold">Appeler</a>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}