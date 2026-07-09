import MainLayout from '../layouts/MainLayout'
import { Link } from 'react-router-dom'
import { Check, X, Shield, Plane, Home, CreditCard, FileText } from 'lucide-react'

export default function Services() {
  const packs = [
    {
      name: 'Essentiel',
      price: 199,
      tagline: 'Le minimum vital pour démarrer',
      color: 'border-gray-200',
      button: 'bg-gray-900 hover:bg-black',
      features: [
        { name: 'Logement vérifié LSF', included: true },
        { name: 'Garantie Khady DIABATE', included: true },
        { name: 'Bail traduit', included: true },
        { name: 'Assistance WhatsApp', included: true },
        { name: 'Accueil aéroport', included: false },
        { name: 'Assurance habitation', included: false },
        { name: 'Ouverture compte bancaire', included: false },
        { name: 'Dossier CAF', included: false },
        { name: 'Carte SIM + transport', included: false },
      ]
    },
    {
      name: 'Confort',
      price: 399,
      tagline: 'Le plus choisi par nos étudiants',
      popular: true,
      color: 'border-orange ring-2 ring-orange',
      button: 'bg-orange hover:bg-orange/90',
      features: [
        { name: 'Logement vérifié LSF', included: true },
        { name: 'Garantie Khady DIABATE', included: true },
        { name: 'Bail traduit', included: true },
        { name: 'Assistance WhatsApp 7j/7', included: true },
        { name: 'Accueil aéroport', included: true },
        { name: 'Assurance habitation', included: true },
        { name: 'Ouverture compte bancaire', included: false },
        { name: 'Dossier CAF', included: false },
        { name: 'Carte SIM + transport', included: true },
      ]
    },
    {
      name: 'Premium',
      price: 699,
      tagline: 'Zéro stress, on s’occupe de tout',
      color: 'border-navy',
      button: 'bg-navy hover:bg-navy/90',
      features: [
        { name: 'Logement vérifié LSF', included: true },
        { name: 'Garantie Khady DIABATE', included: true },
        { name: 'Bail traduit', included: true },
        { name: 'Assistance WhatsApp 7j/7', included: true },
        { name: 'Accueil aéroport VIP', included: true },
        { name: 'Assurance habitation', included: true },
        { name: 'Ouverture compte bancaire', included: true },
        { name: 'Dossier CAF complet', included: true },
        { name: 'Carte SIM + transport', included: true },
      ]
    },
  ]

  const services = [
    { icon: Shield, title: 'Garantie locative', desc: 'Khady se porte garante. Acceptée par 100% de nos propriétaires.' },
    { icon: Plane, title: 'Accueil aéroport', desc: 'CDG, Orly, Bruxelles, Madrid. Quelqu’un vous attend avec une pancarte.' },
    { icon: Home, title: 'Assurance habitation', desc: 'Contrat en 10 min, attestation immédiate pour le bail.' },
    { icon: CreditCard, title: 'Banque', desc: 'Rendez-vous garanti sous 72h, sans justificatif de domicile.' },
    { icon: FileText, title: 'CAF', desc: 'On remplit le dossier, vous touchez 150-200€/mois.' },
  ]

  return (
    <MainLayout>
      {/* Hero */}
      <section className="bg-navy text-white text-center py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Nos services d'installation</h1>
          <p className="mt-4 text-lg opacity-90">Parce qu'un logement ne suffit pas. L'accompagnement LM Global Education, par Khady DIABATE.</p>
        </div>
      </section>

      {/* Packs */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {packs.map(pack => (
            <div key={pack.name} className={`relative bg-white rounded-2xl border-2 ${pack.color} p-8`}>
              {pack.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                  LE PLUS POPULAIRE
                </span>
              )}
              
              <h3 className="text-2xl font-bold text-navy">{pack.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{pack.tagline}</p>
              
              <div className="my-6">
                <span className="text-5xl font-bold">{pack.price}€</span>
                <span className="text-gray-500"> / une fois</span>
              </div>

              <ul className="space-y-3 mb-8">
                {pack.features.map(f => (
                  <li key={f.name} className="flex items-center gap-2">
                    {f.included ? <Check size={18} className="text-green-600"/> : <X size={18} className="text-gray-300"/>}
                    <span className={f.included ? 'text-gray-800' : 'text-gray-400 line-through'}>{f.name}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contact" className={`block w-full text-center text-white py-3 rounded-xl font-semibold ${pack.button}`}>
                Choisir {pack.name}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Détail services */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-navy mb-12">Ce qui est inclus</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {services.map(s => (
              <div key={s.title} className="bg-white p-6 rounded-2xl text-center border">
                <s.icon className="mx-auto text-orange mb-3" size={32}/>
                <h3 className="font-semibold mb-1">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garantie */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="bg-orange/5 border border-orange/20 rounded-2xl p-8">
          <Shield size={48} className="mx-auto text-orange mb-4"/>
          <h2 className="text-2xl font-bold text-navy">Garantie "Satisfait ou remboursé" 7 jours</h2>
          <p className="text-gray-700 mt-3">Si le logement ne correspond pas aux photos vérifiées par LSF, Khady vous reloge gratuitement ou vous rembourse intégralement.</p>
        </div>
      </section>
    </MainLayout>
  )
}