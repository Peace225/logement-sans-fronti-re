import MainLayout from '../layouts/MainLayout';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { MapPin, ShieldCheck, Wifi, Home, Train, Heart, Share2, ArrowLeft, CheckCircle2, ChevronRight } from 'lucide-react';
import Gallery from '../components/Gallery';
import BookingModal from '../components/BookingModal';
import Calendar from '../components/Calendar';

export default function HousingDetails() {
  const { id } = useParams();
  const [showBooking, setShowBooking] = useState(false);

  const property = {
    id: id || 1,
    title: 'Studio meublé Paris 13 - Proche Crous',
    address: '45 Rue Tolbiac, 75013 Paris',
    price: 650,
    charges: 50,
    deposit: 650,
    size: 22,
    type: 'Studio',
    distance: 450,
    university: 'Paris 1 Panthéon-Sorbonne',
    verified: true,
    availableFrom: '2026-09-01',
    description: `Studio de 22m² entièrement meublé et vérifié par l'équipe LSF. Idéal étudiant international. À 450m de l'université, 5 min à pied du métro ligne 7.\n\nInclus : lit 140, bureau, placard, kitchenette équipée, salle d'eau. Chauffage collectif. Internet fibre inclus.\n\nKhady DIABATE se porte garante pour votre dossier. Pas besoin de garant français.`,
    amenities: ['Wifi fibre', 'Meublé', 'Lave-linge', 'Chauffage', 'Digicode', 'Kitchenette'],
    images: [1, 2, 3, 4],
    owner: { name: 'Propriétaire certifié LSF', responseTime: '2h' }
  };

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Navigation retour */}
        <Link to="/logements" className="inline-flex items-center gap-2 text-zinc-500 hover:text-[#F25C05] transition-colors mb-8 font-medium text-sm">
          <ArrowLeft size={16}/> Retour aux résultats
        </Link>

        {/* Galerie */}
        <div className="rounded-3xl overflow-hidden shadow-2xl mb-12">
          <Gallery images={property.images} />
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* COLONNE GAUCHE (Contenu) */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#F25C05]/10 text-[#F25C05] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck size={14}/> Vérifié LSF
                </span>
                <span className="text-zinc-400 text-sm font-medium">{property.type} • {property.size} m²</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-[#0A192F] mb-4 tracking-tight">{property.title}</h1>
              <p className="flex items-center gap-2 text-zinc-500 text-lg">
                <MapPin size={18} className="text-[#F25C05]"/> {property.address}
              </p>
            </div>

            {/* Points clés (Grille optimisée) */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Train, val: property.distance + 'm', label: 'de l\'uni' },
                { icon: ShieldCheck, val: 'Garant', label: 'LSF incluse' },
                { icon: Home, val: 'Meublé', label: 'Prêt à vivre' }
              ].map((item, i) => (
                <div key={i} className="bg-zinc-50 border border-zinc-100 p-5 rounded-2xl text-center">
                  <item.icon className="mx-auto text-[#F25C05] mb-2" size={24} strokeWidth={1.5}/>
                  <p className="font-bold text-[#0A192F] text-sm">{item.val}</p>
                  <p className="text-xs text-zinc-400 mt-0.5">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Description épurée */}
            <div>
              <h3 className="text-xl font-bold text-[#0A192F] mb-4">À propos du logement</h3>
              <p className="text-zinc-600 leading-relaxed font-light whitespace-pre-line">{property.description}</p>
            </div>

            {/* Équipements */}
            <div>
              <h3 className="text-xl font-bold text-[#0A192F] mb-4">Équipements</h3>
              <div className="flex flex-wrap gap-3">
                {property.amenities.map(a => (
                  <div key={a} className="flex items-center gap-2 bg-white border border-zinc-200 px-4 py-2 rounded-xl text-sm text-zinc-600">
                    <CheckCircle2 size={16} className="text-green-500"/> {a}
                  </div>
                ))}
              </div>
            </div>

            <Calendar availableFrom={property.availableFrom} />
          </div>

          {/* SIDEBAR RÉSERVATION (Premium Card) */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white border border-zinc-100 p-8 rounded-3xl shadow-xl shadow-zinc-100">
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-black text-[#0A192F]">{property.price}€</span>
                <span className="text-zinc-400 font-medium">/mois</span>
              </div>

              <div className="space-y-4 text-sm mb-8">
                <div className="flex justify-between pb-3 border-b border-zinc-50"><span className="text-zinc-500">Charges</span><span className="font-bold text-[#0A192F]">{property.charges}€</span></div>
                <div className="flex justify-between pb-3 border-b border-zinc-50"><span className="text-zinc-500">Caution</span><span className="font-bold text-[#0A192F]">{property.deposit}€</span></div>
                <div className="flex justify-between pt-1"><span className="text-zinc-500">Frais LSF</span><span className="font-bold text-green-600">Offerts</span></div>
              </div>

              <button 
                onClick={() => setShowBooking(true)}
                className="w-full bg-[#0A192F] text-white py-4 rounded-xl font-bold hover:bg-[#1e3a6e] transition-all shadow-lg hover:shadow-xl mb-4 flex items-center justify-center gap-2"
              >
                Réserver ce bien <ChevronRight size={18}/>
              </button>
              
              <button className="w-full border border-zinc-200 text-zinc-600 py-4 rounded-xl font-bold hover:bg-zinc-50 transition-all">
                Contacter le propriétaire
              </button>

              <div className="mt-8 bg-orange-50/50 p-5 rounded-2xl border border-orange-100">
                <p className="font-bold text-[#F25C05] text-sm flex items-center gap-2 mb-2">
                  <ShieldCheck size={16}/> Garantie LSF incluse
                </p>
                <p className="text-zinc-600 text-xs leading-relaxed">Khady DIABATE se porte garante pour votre dossier. Aucune avance de frais de garantie n'est requise.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showBooking && <BookingModal property={property} onClose={() => setShowBooking(false)} />}
    </MainLayout>
  )
}