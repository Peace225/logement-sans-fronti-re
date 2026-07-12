import { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Users, Bed, Bath, Maximize } from 'lucide-react';

export default function PropertyCard({ p }) {
  // Image de secours si le tableau est vide ou si une image locale ne charge pas
  const defaultImage = "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800";
  
  // On récupère le tableau d'images, s'il n'existe pas on crée un tableau avec l'image par défaut
  const propertyImages = p.images && p.images.length > 0 ? p.images : [defaultImage];
  
  // État pour suivre l'index de l'image actuellement affichée
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonctions de navigation du carrousel
  const prevImage = (e) => {
    e.stopPropagation(); // Évite de déclencher un éventuel clic sur la carte
    setCurrentIndex((prev) => (prev === 0 ? propertyImages.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === propertyImages.length - 1 ? 0 : prev + 1));
  };

  // Valeurs par défaut pour les caractéristiques
  const area = p.area || "20";
  const beds = p.beds || "1";
  const baths = p.baths || "1";
  const guests = p.guests || "1";

  return (
    /* L'arrondi (rounded-2xl) a été supprimé ici */
    <div className="bg-white shadow-[0_2px_10px_rgb(0,0,0,0.06)] hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 max-w-sm w-full mx-auto">
      
      {/* 1. Zone Image avec Carrousel Actif */}
      <div className="relative h-56 overflow-hidden bg-gray-100 group/carousel">
        <img 
          src={propertyImages[currentIndex]} 
          alt={`${p.title} - vue ${currentIndex + 1}`} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          onError={(e) => { 
            // Si une image locale échoue, on la remplace discrètement par l'image par défaut
            e.target.src = defaultImage; 
          }}
        />

        {/* Compteur d'images dynamique */}
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full z-10">
          {currentIndex + 1} / {propertyImages.length}
        </div>

        {/* Flèches de navigation (visibles au survol de la carte) */}
        {propertyImages.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white shadow-md text-gray-700 transition opacity-0 group-hover/carousel:opacity-100 z-10"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white shadow-md text-gray-700 transition opacity-0 group-hover/carousel:opacity-100 z-10"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}

        {/* Indicateurs de pagination (Dots) dynamiques */}
        {propertyImages.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 items-center z-10">
            {propertyImages.map((_, index) => (
              <div 
                key={index}
                className={`transition-all duration-300 rounded-full shadow-sm ${
                  index === currentIndex ? 'w-5 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/60'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* 2. Corps de la carte (Prix, Titre, Localisation) */}
      <div className="p-4 pb-3">
        <p className="text-[11px] font-bold text-gray-800 uppercase tracking-wide">À partir de</p>
        <div className="flex items-baseline gap-1 mt-0.5">
          <span className="text-2xl font-black text-[#F25C05]">{p.price}€</span>
          <span className="text-sm font-bold text-gray-900">/ mois</span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mt-2 leading-tight truncate">
          {p.title}
        </h3>

        <div className="flex items-center gap-1.5 mt-2">
          <MapPin size={16} className="text-[#F25C05]" />
          <span className="text-sm font-bold text-gray-700">{p.city}</span>
        </div>
      </div>

      {/* 3. Caractéristiques (Icônes) */}
      <div className="grid grid-cols-4 gap-2 py-3 px-4 border-t border-gray-100">
        <div className="flex items-center justify-center gap-1.5 text-gray-500">
          <Users size={16} /> 
          <span className="text-xs font-medium">{guests}</span>
        </div>
        <div className="flex items-center justify-center gap-1.5 text-gray-500">
          <Bed size={16} /> 
          <span className="text-xs font-medium">{beds}</span>
        </div>
        <div className="flex items-center justify-center gap-1.5 text-gray-500">
          <Bath size={16} /> 
          <span className="text-xs font-medium">{baths}</span>
        </div>
        <div className="flex items-center justify-center gap-1.5 text-gray-500">
          <Maximize size={14} /> 
          <span className="text-xs font-medium">{area} m²</span>
        </div>
      </div>

      {/* 4. Statut de disponibilité */}
      <div className="px-4 py-3 border-t border-gray-100 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
        <span className="text-[11px] font-medium text-gray-800 uppercase tracking-wide">
          Disponible immédiatement
        </span>
      </div>

    </div>
  );
}