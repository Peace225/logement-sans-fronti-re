import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MapPin, Calendar, Globe, Search } from 'lucide-react';

// Import des drapeaux réels
import { FR, BE, ES, MA, CI } from 'country-flag-icons/react/3x2';

export default function SearchBar() {
  const [q, setQ] = useState({ 
    country: 'FR', 
    city: '', 
    arrival: '', 
    departure: '' 
  });
  const nav = useNavigate();

  // Liste des pays pour le sélecteur
  const countries = [
    { code: 'FR', name: 'France', Flag: FR },
    { code: 'BE', name: 'Belgique', Flag: BE },
    { code: 'ES', name: 'Espagne', Flag: ES },
    { code: 'MA', name: 'Maroc', Flag: MA },
    { code: 'CI', name: 'Côte d\'Ivoire', Flag: CI },
  ];

  // Trouver le drapeau actif pour l'affichage
  const ActiveFlag = countries.find(c => c.code === q.country)?.Flag;

  return (
    <div className="max-w-6xl mx-auto px-4 -mt-16 relative z-20">
      <div className="bg-white rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] p-2 md:p-3 flex flex-col md:flex-row items-center gap-2 border border-gray-100">
        
    {/* Pays avec Drapeaux SVG plus grands */}
<div className="flex items-center w-full md:w-[220px] px-4 py-3 hover:bg-gray-50 rounded-2xl transition-colors">
  {/* Augmentation de la taille à w-8 h-8 et ajout d'une bordure */}
  <div className="mr-3 w-8 h-8 overflow-hidden rounded-full border border-gray-200 shadow-sm flex items-center justify-center shrink-0">
    {ActiveFlag && <ActiveFlag />}
  </div>
  <div className="flex flex-col w-full overflow-hidden">
    <label className="text-[10px] font-bold text-navy uppercase tracking-wider mb-0.5">Pays</label>
    <select 
      value={q.country} 
      onChange={e => setQ({ ...q, country: e.target.value })} 
      className="w-full bg-transparent text-gray-800 font-bold focus:outline-none cursor-pointer text-sm truncate"
    >
      {countries.map(c => (
        <option key={c.code} value={c.code}>{c.name}</option>
      ))}
    </select>
  </div>
</div>

        <div className="hidden md:block w-px h-10 bg-gray-200"></div>

        {/* Ville ou Université */}
        <div className="flex items-center w-full flex-1 px-4 py-3 hover:bg-gray-50 rounded-2xl transition-colors">
          <MapPin className="text-gray-400 mr-3" size={20} />
          <div className="flex flex-col w-full">
            <label className="text-[10px] font-bold text-navy uppercase tracking-wider mb-0.5">Ville ou Université</label>
            <input 
              value={q.city} 
              onChange={e => setQ({ ...q, city: e.target.value })} 
              placeholder="Où étudies-tu ?" 
              className="w-full bg-transparent text-gray-800 font-medium placeholder-gray-400 focus:outline-none"
            />
          </div>
        </div>

        <div className="hidden md:block w-px h-10 bg-gray-200"></div>

        {/* Dates */}
        <div className="flex items-center w-full md:w-auto flex-[1.2] px-4 py-3 hover:bg-gray-50 rounded-2xl transition-colors gap-2">
          <Calendar className="text-gray-400 shrink-0" size={20} />
          <div className="flex flex-col w-full">
            <label className="text-[10px] font-bold text-navy uppercase tracking-wider mb-0.5">Arrivée - Départ</label>
            <div className="flex items-center gap-1">
              <input 
                type="date" 
                onChange={e => setQ({ ...q, arrival: e.target.value })}
                className="w-full bg-transparent text-[12px] text-gray-600 font-medium focus:outline-none cursor-pointer"
              />
              <span className="text-gray-300 px-1">→</span>
              <input 
                type="date" 
                onChange={e => setQ({ ...q, departure: e.target.value })}
                className="w-full bg-transparent text-[12px] text-gray-600 font-medium focus:outline-none cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Bouton */}
        <button 
          onClick={() => nav(`/logements?country=${q.country}&city=${q.city}&from=${q.arrival}&to=${q.departure}`)} 
          className="bg-navy hover:bg-navy/90 text-white p-4 md:px-8 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg transition-transform hover:-translate-y-0.5"
        >
          <Search size={20} />
          <span className="hidden lg:inline">Rechercher</span>
        </button>
        
      </div>
    </div>
  );
}