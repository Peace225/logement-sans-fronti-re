import { Link } from 'react-router-dom';

export default function CityCard({ city }) {
  return (
    <Link 
      to={`/logements?city=${city.name}`} 
      className="group relative h-64 overflow-hidden rounded-2xl block transition-transform duration-300 hover:scale-[1.02]"
    >
      {/* Image de fond */}
      <img 
        src={city.image} 
        alt={city.name} 
        className="w-full h-full object-cover"
      />
      
      {/* Overlay dégradé pour le texte */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      
      {/* Nom de la ville */}
      <div className="absolute bottom-6 left-6 text-white">
        <h3 className="text-2xl font-bold">{city.name}</h3>
        <p className="text-sm opacity-90">{city.count} logements</p>
      </div>
    </Link>
  );
}