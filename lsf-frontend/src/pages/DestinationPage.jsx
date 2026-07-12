import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { properties } from '../data/citiesData';
import {
  Search, X, Calendar, Map, SlidersHorizontal,
  MapPin, Heart, Maximize2, Flame, ChevronDown
} from 'lucide-react';

const NEARBY = [
  "Paris Intramuros", "Montreuil", "Villejuif", "Noisy-le-Grand", "Clichy",
  "Nanterre", "Levallois-Perret", "Créteil", "Ivry-sur-Seine",
  "Boulogne-Billancourt", "Achères"
];

const HISTO = [3, 5, 8, 12, 18, 24, 32, 28, 22, 16, 12, 8, 5, 3, 2];

// Composant Calendrier Simple
const SimpleCalendar = ({ onClose }) => (
  <div className="absolute top-full right-0 mt-2 p-4 bg-white border border-gray-100 rounded-2xl shadow-xl z-50 w-72">
    <div className="flex justify-between items-center mb-4">
      <h3 className="font-bold text-sm">Juillet 2026</h3>
      <button onClick={onClose} className="text-gray-400 hover:text-gray-900"><X size={16} /></button>
    </div>
    <div className="grid grid-cols-7 gap-2 text-center text-xs text-gray-500">
      {['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'].map(d => <span key={d}>{d}</span>)}
      {Array.from({length: 31}).map((_, i) => (
        <button key={i} className="p-2 hover:bg-orange-50 rounded-lg text-gray-700">{i + 1}</button>
      ))}
    </div>
  </div>
);

function ListingCard({ p }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all group">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img src={p.image || '/images/hero.jpg'} alt={p.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-500" />
        <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-sm hover:bg-white transition">
          <Heart size={16} className="text-gray-600" />
        </button>
        {p.promo && (
          <span className="absolute top-3 left-3 inline-flex items-center gap-1 bg-[#FF6B2C] text-white text-xs font-bold tracking-wide px-2.5 py-1 rounded-full">
            <Flame size={12} /> PROMO
          </span>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex flex-wrap gap-1.5">
            <span className="text-xs font-semibold px-2 py-1 rounded-md bg-orange-50 text-orange-600 border border-orange-100">{p.type || 'T1'}</span>
            <span className="text-xs font-semibold px-2 py-1 rounded-md bg-purple-50 text-purple-600">En vedette</span>
          </div>
          <div className="text-right leading-none">
            <div className="text-lg font-extrabold text-gray-900">{p.price}€<span className="text-sm font-normal text-gray-400">/mois</span></div>
          </div>
        </div>

        <h3 className="text-base font-bold text-gray-900 leading-snug line-clamp-2 min-h-[3rem] mb-2">
          {p.title}
        </h3>

        <div className="flex items-center gap-1 text-sm text-gray-500 mb-4 truncate">
          <MapPin size={12} className="text-gray-400 shrink-0" />
          <span className="font-medium text-gray-700">{p.city}</span>
          <span className="truncate">· {p.address || 'Rue de Bagnolet, 75020 Paris'}</span>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-50 text-sm">
          <span className="flex items-center gap-1 text-gray-500"><Maximize2 size={12} /> {p.surface || '21'} m²</span>
          <span className="flex items-center gap-1 text-emerald-600 font-medium text-xs"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> Disponible</span>
        </div>
      </div>
    </div>
  );
}

export default function DestinationPage() {
  const { name = 'Paris' } = useParams();
  
  // États
  const [query, setQuery] = useState(name);
  const [showCalendar, setShowCalendar] = useState(false);
  const [minPrice, setMinPrice] = useState(500);
  const [maxPrice, setMaxPrice] = useState(2500);
  const [propertyType, setPropertyType] = useState('Tous');
  const [rentalType, setRentalType] = useState('Indifférent');
  const [sortBy, setSortBy] = useState('Recommandé');
  const [activeNearby, setActiveNearby] = useState(null);

  const finalProperties = useMemo(() => {
    const targetCity = activeNearby || name;
    let filtered = properties.filter(p => 
      p.city.toLowerCase() === targetCity.toLowerCase() || 
      p.country?.toLowerCase() === targetCity.toLowerCase()
    );

    filtered = filtered.filter(p => {
      const matchPrice = p.price >= minPrice && p.price <= maxPrice;
      const matchProperty = propertyType === 'Tous' || p.category === propertyType;
      const matchRental = rentalType === 'Indifférent' || p.rentalType === rentalType;
      return matchPrice && matchProperty && matchRental;
    });

    if (sortBy === 'Prix croissant') filtered.sort((a, b) => a.price - b.price);
    else if (sortBy === 'Prix décroissant') filtered.sort((a, b) => b.price - a.price);

    return filtered;
  }, [name, activeNearby, minPrice, maxPrice, propertyType, rentalType, sortBy]);

  return (
    <MainLayout>
      <div className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
        <div className="max-w-7xl mx-auto px-4 py-3">
          {/* LIGNE 1: RECHERCHE */}
          <div className="flex gap-3 mb-3">
            <div className="flex-1 flex items-center h-12 px-4 rounded-xl border border-gray-200 bg-white focus-within:border-gray-400 transition">
              <Search size={18} className="text-gray-400 mr-3" />
              <input value={query} onChange={e => setQuery(e.target.value)} className="w-full outline-none text-sm font-medium" placeholder="Ville, quartier..." />
              {query && <button onClick={() => setQuery('')} className="text-gray-400 hover:text-gray-600"><X size={16} /></button>}
            </div>
            
            <div className="relative">
              <button 
                onClick={() => setShowCalendar(!showCalendar)}
                className="flex items-center h-12 px-4 rounded-xl border border-gray-200 bg-white text-gray-400 hover:border-gray-400 transition"
              >
                <Calendar size={18} className="mr-3" />
                <span className="text-sm font-medium text-gray-700">Date d'arrivée</span>
              </button>
              {showCalendar && <SimpleCalendar onClose={() => setShowCalendar(false)} />}
            </div>

            <div className="flex gap-2">
              <button className="h-12 px-5 rounded-xl bg-gray-50 border border-gray-200 text-sm font-semibold flex items-center gap-2 hover:bg-gray-100 transition"><Map size={16} /> Carte</button>
              <button className="h-12 px-5 rounded-xl bg-gray-900 text-white text-sm font-semibold flex items-center gap-2 hover:bg-gray-800 transition"><SlidersHorizontal size={16} /> Filtres</button>
            </div>
          </div>

          {/* LIGNE 2: FILTRES DÉTAILLÉS */}
          <div className="flex items-center gap-6 py-2 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Type de bien</span>
              <select value={propertyType} onChange={e => setPropertyType(e.target.value)} className="text-sm font-semibold text-gray-700 bg-transparent outline-none cursor-pointer pr-4">
                <option>Tous</option><option>Studio</option><option>Appartement</option><option>Maison</option>
              </select>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Type de location</span>
              <select value={rentalType} onChange={e => setRentalType(e.target.value)} className="text-sm font-semibold text-gray-700 bg-transparent outline-none cursor-pointer pr-4">
                <option>Indifférent</option><option>Individuel</option><option>Colocation</option>
              </select>
            </div>

            <div className="h-6 w-px bg-gray-200 mx-2" />

            <div className="flex items-center gap-4 flex-1">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Prix</span>
              <div className="flex items-center gap-2">
                <div className="px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold text-gray-900 w-24 text-center">MIN {minPrice} €</div>
                <div className="relative w-48 h-10 flex items-center">
                   <div className="absolute inset-0 flex items-end gap-[2px] pb-1">
                    {HISTO.map((h, i) => <div key={i} style={{ height: `${(h / Math.max(...HISTO)) * 100}%` }} className="flex-1 bg-orange-100 rounded-t-sm" />)}
                  </div>
                  <input type="range" min="0" max="3000" value={minPrice} onChange={(e) => setMinPrice(Math.min(Number(e.target.value), maxPrice - 50))} className="absolute w-full opacity-0 cursor-pointer z-20" />
                  <input type="range" min="0" max="3000" value={maxPrice} onChange={(e) => setMaxPrice(Math.max(Number(e.target.value), minPrice + 50))} className="absolute w-full opacity-0 cursor-pointer z-20" />
                  <div className="absolute w-full h-1 bg-gray-200 rounded-full" />
                  <div className="absolute h-1 bg-[#FF6B2C]" style={{ left: `${(minPrice/3000)*100}%`, right: `${100-(maxPrice/3000)*100}%` }} />
                </div>
                <div className="px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold text-gray-900 w-24 text-center">MAX {maxPrice} €</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 bg-[#FAFBFC] min-h-screen">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-extrabold text-gray-900">Logements à {activeNearby || name}</h1>
          <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="h-10 px-4 rounded-xl border border-gray-200 bg-white text-sm font-medium"> 
            <option>Recommandé</option><option>Prix croissant</option><option>Prix décroissant</option> 
          </select>
        </div>

        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1 h-5 bg-[#FF6B2C] rounded-full" />
            <h2 className="text-sm font-bold text-gray-900">Logement étudiant aux alentours</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {NEARBY.map(city => (
              <button 
                key={city} 
                onClick={() => setActiveNearby(city === activeNearby ? null : city)} 
                className={`h-10 px-4 rounded-full border text-xs font-semibold flex items-center gap-1.5 transition ${
                  activeNearby === city 
                    ? 'bg-gray-900 text-white border-gray-900 shadow-md' 
                    : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
                }`}
              >
                <MapPin size={14} className={activeNearby === city ? 'text-white' : 'text-[#FF8A3D]'} /> {city}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {finalProperties.length > 0 ? (
            finalProperties.map(p => <ListingCard key={p.id} p={p} />)
          ) : (
            <div className="col-span-full py-20 text-center text-gray-500">Aucun logement trouvé pour ces critères.</div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}