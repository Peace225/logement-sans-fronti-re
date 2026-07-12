import { Link } from 'react-router-dom';
import PropertyCard from './PropertyCard';

export default function LatestProperties({ properties }) {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="bg-[#F27427] text-white px-6 py-2 rounded-full font-bold shadow-md">
            Les derniers logements ajoutés
          </span>
        </div>

        {/* Titre */}
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
          Nos dernières opportunités
        </h2>

        {/* Grille */}
        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((p) => (
            <div key={p.id} className="transition-transform hover:-translate-y-1">
              <PropertyCard p={p} />
            </div>
          ))}
        </div>

        {/* Bouton CTA */}
        <div className="text-center mt-12">
          <Link 
            to="/logements" 
            className="inline-block border-2 border-[#F27427] text-[#F27427] px-8 py-3 rounded-lg font-bold hover:bg-[#F27427] hover:text-white transition-all"
          >
            Voir tous les logements →
          </Link>
        </div>
      </div>
    </section>
  );
}