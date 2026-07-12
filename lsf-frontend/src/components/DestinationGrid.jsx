import { Link } from 'react-router-dom';

export default function DestinationGrid({ destinations }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-navy mb-10 text-center">
        Trouvez votre logement à travers le monde
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {destinations.map((dest) => (
          <Link 
            key={dest.country} 
            // Redirige vers une page dédiée à ce pays
            to={`/destination/${dest.country.toLowerCase()}`} 
            className="group relative h-64 md:h-80 overflow-hidden rounded-lg block shadow-md hover:shadow-xl transition-all duration-300"
          >
            <img 
              src={dest.image} 
              alt={dest.country} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all" />
            
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">{dest.country}</h3>
              <p className="text-sm opacity-90">{dest.cities.length} villes disponibles</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}