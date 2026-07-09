import MainLayout from '../layouts/MainLayout'
import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { MapPin, ShieldCheck, Wifi, Home, Train, Euro, Heart, Share2, ArrowLeft } from 'lucide-react'
import Gallery from '../components/Gallery'
import BookingModal from '../components/BookingModal'
import Calendar from '../components/Calendar'

export default function HousingDetails() {
  const { id } = useParams()
  const [showBooking, setShowBooking] = useState(false)

  // Donnée démo - remplace par fetch Supabase
  const property = {
    id: id || 1,
    title: 'Studio meublé Paris 13 - Proche Crous',
    address: '45 Rue Tolbiac, 75013 Paris',
    city: 'Paris',
    country: 'France',
    price: 650,
    charges: 50,
    deposit: 650,
    size: 22,
    type: 'Studio',
    furnished: true,
    distance: 450,
    university: 'Université Paris 1 Panthéon-Sorbonne',
    verified: true,
    availableFrom: '2026-09-01',
    description: `Studio de 22m² entièrement meublé et vérifié par l'équipe LSF. Idéal étudiant international. À 450m de l'université, 5 min à pied du métro ligne 7. 

    Inclus : lit 140, bureau, placard, kitchenette équipée, salle d'eau. Chauffage collectif. Internet fibre inclus.

    Khady DIABATE se porte garante pour votre dossier. Pas besoin de garant français.`,
    amenities: ['Wifi fibre', 'Meublé', 'Lave-linge commun', 'Chauffage', 'Digicode'],
    images: [1,2,3,4],
    owner: { name: 'Propriétaire vérifié LSF', responseTime: '2h' }
  }

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Link to="/logements" className="inline-flex items-center gap-2 text-gray-600 hover:text-orange mb-4">
          <ArrowLeft size={18}/> Retour aux logements
        </Link>

        {/* Galerie */}
        <Gallery images={property.images} />

        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          {/* Contenu principal */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {property.verified && (
                    <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                      <ShieldCheck size={14}/> Vérifié LSF
                    </span>
                  )}
                  <span className="text-sm text-gray-500">{property.type} • {property.size}m²</span>
                </div>
                <h1 className="text-3xl font-bold text-navy">{property.title}</h1>
                <p className="flex items-center gap-1 text-gray-600 mt-1">
                  <MapPin size={16}/> {property.address}
                </p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 border rounded-xl hover:bg-gray-50"><Heart size={20}/></button>
                <button className="p-2 border rounded-xl hover:bg-gray-50"><Share2 size={20}/></button>
              </div>
            </div>

            {/* Points clés LSF */}
            <div className="grid grid-cols-3 gap-4 my-6">
              <div className="bg-orange/5 p-4 rounded-xl text-center">
                <Train className="mx-auto text-orange mb-1" size={24}/>
                <p className="text-sm font-semibold">{property.distance}m</p>
                <p className="text-xs text-gray-600">de {property.university}</p>
              </div>
              <div className="bg-orange/5 p-4 rounded-xl text-center">
                <ShieldCheck className="mx-auto text-orange mb-1" size={24}/>
                <p className="text-sm font-semibold">Garant LSF</p>
                <p className="text-xs text-gray-600">Khady incluse</p>
              </div>
              <div className="bg-orange/5 p-4 rounded-xl text-center">
                <Home className="mx-auto text-orange mb-1" size={24}/>
                <p className="text-sm font-semibold">Meublé</p>
                <p className="text-xs text-gray-600">Prêt à vivre</p>
              </div>
            </div>

            {/* Description */}
            <div className="prose max-w-none">
              <h2 className="text-xl font-bold text-navy mb-3">Description</h2>
              <p className="whitespace-pre-line text-gray-700">{property.description}</p>
            </div>

            {/* Équipements */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-navy mb-3">Équipements</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {property.amenities.map(a => (
                  <div key={a} className="flex items-center gap-2 text-gray-700">
                    <Wifi size={16} className="text-orange"/> {a}
                  </div>
                ))}
              </div>
            </div>

            {/* Calendrier */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-navy mb-3">Disponibilités</h2>
              <Calendar availableFrom={property.availableFrom} />
            </div>
          </div>

          {/* Sidebar réservation */}
          <div>
            <div className="sticky top-24 bg-white border rounded-2xl shadow-sm p-6">
              <div className="flex items-baseline justify-between mb-4">
                <div>
                  <span className="text-3xl font-bold">{property.price}€</span>
                  <span className="text-gray-600">/mois</span>
                </div>
                <span className="text-sm text-gray-500">+{property.charges}€ charges</span>
              </div>

              <div className="space-y-3 text-sm mb-6">
                <div className="flex justify-between"><span>Caution</span><span className="font-medium">{property.deposit}€</span></div>
                <div className="flex justify-between"><span>Frais LSF</span><span className="font-medium text-green-600">0€ (étudiant)</span></div>
                <div className="flex justify-between border-t pt-2 font-semibold"><span>Total 1er mois</span><span>{property.price + property.charges + property.deposit}€</span></div>
              </div>

              <button 
                onClick={() => setShowBooking(true)}
                className="w-full bg-orange text-white py-3 rounded-xl font-semibold hover:bg-orange/90 mb-3"
              >
                Réserver avec garantie LSF
              </button>
              
              <button className="w-full border border-orange text-orange py-3 rounded-xl font-semibold hover:bg-orange/5">
                Contacter Khady
              </button>

              <div className="mt-6 pt-6 border-t text-center">
                <p className="text-xs text-gray-500">Propriétaire {property.owner.name}</p>
                <p className="text-xs text-gray-500">Répond en ~{property.owner.responseTime}</p>
              </div>

              <div className="mt-4 bg-green-50 p-3 rounded-xl text-xs">
                <p className="font-semibold text-green-800 flex items-center gap-1"><ShieldCheck size={14}/> Garantie LSF incluse</p>
                <p className="text-green-700 mt-1">Khady DIABATE se porte garante. Remboursement si logement non conforme.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showBooking && <BookingModal property={property} onClose={() => setShowBooking(false)} />}
    </MainLayout>
  )
}