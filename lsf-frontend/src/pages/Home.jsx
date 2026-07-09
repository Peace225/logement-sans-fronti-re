import MainLayout from '../layouts/MainLayout'
import Hero from '../components/Hero'
import SearchBar from '../components/SearchBar'
import PropertyCard from '../components/PropertyCard'
import ServiceCard from '../components/ServiceCard'
import Testimonials from '../components/Testimonials'
import ChatIA from '../components/ChatIA'
import { Link } from 'react-router-dom'

export default function Home() {
  // Correction : Ajout de la propriété 'image' à chaque logement
 const properties = [
    { 
      id: 1, 
      title: 'Studio meublé Paris 13', 
      city: 'Paris', 
      country: 'France', 
      price: 650, 
      image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      id: 2, 
      title: 'Colocation Lyon 7', 
      city: 'Lyon', 
      country: 'France', 
      price: 420, 
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      id: 3, 
      title: 'T1 Bruxelles', 
      city: 'Bruxelles', 
      country: 'Belgique', 
      price: 550, 
      image: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&q=80&w=800' 
    },
  ];

  const services = [
    { code: 'garantie', name: 'Garantie locative LSF' },
    { code: 'assurance', name: 'Assurance habitation' },
    { code: 'aeroport', name: 'Accueil aéroport' },
    { code: 'banque', name: 'Ouverture compte bancaire' },
  ];

  const cities = [
    { name: 'Paris', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800' },
    { name: 'Lyon', image: 'https://images.unsplash.com/photo-1563990112129-a9a7201c1094?auto=format&fit=crop&q=80&w=800' }, 
    { name: 'Nice', image: 'https://images.unsplash.com/photo-1571708892496-c67d60ed6d38?auto=format&fit=crop&q=80&w=800' }, 
    { name: 'Bordeaux', image: 'https://images.unsplash.com/photo-1568817457723-96b42b938f32?auto=format&fit=crop&q=80&w=800' }, 
  ];

  return (
    <MainLayout>
      <Hero />
      <SearchBar />

      {/* SECTION : VILLES CLIQUABLES */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-navy mb-10 text-center">
          Louez pour au moins 1 mois, partout dans le monde.
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {cities.map((city) => (
            <Link 
              key={city.name} 
              to={`/logements?city=${city.name}`} 
              className="group relative h-64 md:h-80 overflow-hidden rounded-lg block shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              <img 
                src={city.image} 
                alt={city.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              
              <div className="absolute top-3 right-3 bg-[#F27427] text-white px-4 py-1 rounded text-sm font-medium shadow-sm">
                {city.name}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION : LOGEMENTS (Design Premium) */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="flex justify-center mb-8">
            <span className="bg-[#F27427] text-white px-6 py-2 rounded-full font-bold shadow-md">
              Les derniers logements ajoutés
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
            Nos dernières opportunités
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {properties.map(p => (
              <div key={p.id} className="transition-transform hover:-translate-y-1">
                <PropertyCard p={p} />
              </div>
            ))}
          </div>

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

      {/* SECTION : SERVICES */}
      <section className="bg-[#0A192F] text-white py-24 rounded-[3rem] mx-4 my-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16">Nos services d'installation</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {services.map(s => <ServiceCard key={s.code} s={s} />)}
          </div>
        </div>
      </section>

      <Testimonials />
      <ChatIA />
    </MainLayout>
  )
}