import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MapPin, Calendar, Search, Home, Wallet } from 'lucide-react';
import { FR, BE, ES, MA, CI, SN, CH, IT } from 'country-flag-icons/react/3x2';

export default function SearchBar() {
  const [q, setQ] = useState({ 
    country: 'FR', 
    city: '', 
    type: '', 
    budget: '', 
    arrival: '' 
  });
  
  const nav = useNavigate();

  const countries = [
    { code: 'FR', name: 'France', Flag: FR },
    { code: 'BE', name: 'Belgique', Flag: BE },
    { code: 'ES', name: 'Espagne', Flag: ES },
    { code: 'MA', name: 'Maroc', Flag: MA },
    { code: 'CI', name: 'Côte d\'Ivoire', Flag: CI },
    { code: 'SN', name: 'Sénégal', Flag: SN },
    { code: 'CH', name: 'Suisse', Flag: CH },
    { code: 'IT', name: 'Italie', Flag: IT },
  ];

  const housingTypes = [
    { value: '', label: 'Tous les types' },
    { value: 'studio', label: 'Studio' },
    { value: 'chambre', label: 'Chambre' },
    { value: 't1', label: 'Appartement T1' },
    { value: 'colocation', label: 'Colocation' }
  ];

  const ActiveFlag = countries.find(c => c.code === q.country)?.Flag;

  const handleSearch = () => {
    nav(`/logements?country=${q.country}&city=${q.city}&type=${q.type}&budget=${q.budget}&arrival=${q.arrival}`);
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 -mt-16 relative z-20">
      {/* Container avec bordures arrondies (rounded-2xl) et overflow-hidden pour la propreté des coins */}
      <div className="bg-white border border-gray-200 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] rounded-4xl overflow-hidden flex flex-col lg:flex-row items-stretch w-full">
        
        {/* 1. Pays */}
        <div className="flex items-center flex-1 px-8 py-6 hover:bg-gray-50 transition-colors border-b lg:border-b-0 lg:border-r border-gray-100">
          <div className="mr-4 w-7 h-5 overflow-hidden border border-gray-200 flex-shrink-0">
            {ActiveFlag && <ActiveFlag />}
          </div>
          <div className="flex flex-col w-full">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Destination</label>
            <select 
              value={q.country} 
              onChange={e => setQ({ ...q, country: e.target.value })} 
              className="w-full bg-transparent text-[#0A192F] font-bold focus:outline-none cursor-pointer text-base"
            >
              {countries.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
            </select>
          </div>
        </div>

        {/* 2. Ville */}
        <div className="flex items-center flex-[1.2] px-8 py-6 hover:bg-gray-50 transition-colors border-b lg:border-b-0 lg:border-r border-gray-100 group">
          <MapPin className="text-gray-400 group-hover:text-[#F25C05] transition-colors mr-4 flex-shrink-0" size={20} />
          <div className="flex flex-col w-full">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Localisation</label>
            <input 
              value={q.city} 
              onChange={e => setQ({ ...q, city: e.target.value })} 
              placeholder="Ville ou Univ." 
              className="w-full bg-transparent text-[#0A192F] font-semibold placeholder-gray-300 focus:outline-none text-base"
            />
          </div>
        </div>

        {/* 3. Type */}
        <div className="flex items-center flex-1 px-8 py-6 hover:bg-gray-50 transition-colors border-b lg:border-b-0 lg:border-r border-gray-100 group">
          <Home className="text-gray-400 group-hover:text-[#F25C05] transition-colors mr-4 flex-shrink-0" size={20} />
          <div className="flex flex-col w-full">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Type</label>
            <select 
              value={q.type} 
              onChange={e => setQ({ ...q, type: e.target.value })} 
              className="w-full bg-transparent text-[#0A192F] font-semibold focus:outline-none cursor-pointer text-base"
            >
              {housingTypes.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
            </select>
          </div>
        </div>

        {/* 4. Budget */}
        <div className="flex items-center flex-1 px-8 py-6 hover:bg-gray-50 transition-colors border-b lg:border-b-0 lg:border-r border-gray-100 group">
          <Wallet className="text-gray-400 group-hover:text-[#F25C05] transition-colors mr-4 flex-shrink-0" size={20} />
          <div className="flex flex-col w-full">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Budget Max</label>
            <input 
              type="number"
              value={q.budget} 
              onChange={e => setQ({ ...q, budget: e.target.value })} 
              placeholder="Montant (€)" 
              className="w-full bg-transparent text-[#0A192F] font-semibold placeholder-gray-300 focus:outline-none text-base"
            />
          </div>
        </div>

        {/* 5. Date */}
        <div className="flex items-center flex-1 px-8 py-6 hover:bg-gray-50 transition-colors group">
          <Calendar className="text-gray-400 group-hover:text-[#F25C05] transition-colors mr-4 flex-shrink-0" size={20} />
          <div className="flex flex-col w-full">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Arrivée</label>
            <input 
              type="date" 
              value={q.arrival}
              onChange={e => setQ({ ...q, arrival: e.target.value })}
              className="w-full bg-transparent text-[#0A192F] font-semibold focus:outline-none cursor-pointer text-base"
            />
          </div>
        </div>

        {/* Bouton */}
        <button 
          onClick={handleSearch} 
          className="bg-[#0A192F] hover:bg-[#F25C05] text-white px-10 py-6 lg:py-0 font-bold flex items-center justify-center gap-3 transition-colors duration-300 flex-shrink-0"
        >
          <Search size={22} />
          <span className="uppercase tracking-wider text-base">Rechercher</span>
        </button>

      </div>
    </div>
  );
}